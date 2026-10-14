// Hyper Space — Originkit

"use client"

import * as React from "react"
import { useEffect, useRef } from "react"

const MAX_DPR = 2
const NEAR = 0.1
const FAR = 2000

const RECYCLE_Z = 200
const RESET_Z = -1800
const SPAN = RECYCLE_Z - RESET_Z

const FOG_DENSITY = 0.001

const STREAK_RADIUS_MIN = 6
const STREAK_SPREAD = 760
const STREAK_LEN_MIN = 170
const STREAK_LEN_SPREAD = 420
const STREAK_OPACITY_SCALE = 1.45
const MAX_STREAKS = 3000

const BASE_FLOW = 15 * 2.4 * 60

const CONE_SEGMENTS = 64
const CONE_FAR_Z = -2900
const CONE_NEAR_Z = -10
const CONE_TOTAL = 3000
const CONE_R_FAR = 240
const CONE_R_SPAN = 900 - 240
const CONE_REPEAT_U = 4
const CONE_REPEAT_V = 2
const CONE_SCROLL = 0.0016
const CONE_TINT_MIX = 0.6

const MAX_PALETTE = 8

const DEFAULT_PALETTE = ["#FFFFFF", "#DBEAFE", "#93C5FD", "#60A5FA", "#C7D2FE"]

const LEGACY_RAMP = [0, 0.23, 0.66, 1, 0.35]
const CONE_OPACITY_SCALE = 0.6

const GLOW_Z = -900
const GLOW_HALF = 380
const GLOW_PULSE = 0.06
const GLOW_PULSE_RATE = 1.6

const STEER_MAX_DEG = 12

const CAMERA_GLSL = `
uniform vec2 uSteer;
uniform float uFocal, uAspect, uZA, uZB;

vec3 steerP(vec3 p){
  float cy = cos(uSteer.x), sy = sin(uSteer.x);
  p = vec3(p.x * cy + p.z * sy, p.y, -p.x * sy + p.z * cy);
  float cx = cos(uSteer.y), sx = sin(uSteer.y);
  return vec3(p.x, p.y * cx - p.z * sx, p.y * sx + p.z * cx);
}

vec4 projectP(vec3 p){
  return vec4(p.x * uFocal / uAspect, p.y * uFocal, p.z * uZA + uZB, -p.z);
}

// The vertex stage only hands over the view depth. Fog is FOG_GLSL's job, in the
// fragment stage, because that is where three evaluates FogExp2 -- and the
// difference is not cosmetic: interpolating exp(-(d * density)^2) itself across a
// streak 2000 units long pulls almost the whole on-screen rail down to the FAR
// end's value, so long streaks would read dimmer than short ones.
float depthOf(vec3 p){
  return max(-p.z, 0.0);
}
`

const FOG_GLSL = `
uniform float uFog;

float clarity(float depth){
  float d = depth * uFog;
  return exp(-d * d);
}
`

const STREAK_VS = `
precision highp float;

attribute vec2 a_dir;
attribute float a_rnorm;
attribute float a_z0;
attribute float a_off;
attribute float a_pick;

uniform float uFlow, uSpan, uResetZ, uRadiusMin, uSpread, uLen;
uniform vec3 uPal[${MAX_PALETTE}];
uniform int uPalN;

varying vec3 vTint;
varying float vDepth;
${CAMERA_GLSL}
void main(){
  float r = uRadiusMin + a_rnorm * uSpread;

  float zh = uResetZ + mod(a_z0 + uFlow - uResetZ, uSpan);
  vec3 p = steerP(vec3(a_dir * r, zh + a_off * uLen));

  float slot = floor(a_pick * float(uPalN));
  int idx = int(min(slot, float(uPalN) - 1.0));
  vec3 tint = uPal[0];
  for (int i = 1; i < ${MAX_PALETTE}; i += 1) {
    if (i == idx) tint = uPal[i];
  }
  vTint = tint;
  vDepth = depthOf(p);
  gl_Position = projectP(p);
}
`

const ADDITIVE_FS = `
precision highp float;
uniform float uOpacity;
${FOG_GLSL}varying vec3 vTint;
varying float vDepth;
void main(){
  float a = uOpacity * clarity(vDepth);
  gl_FragColor = vec4(vTint * a, a);
}
`

const CONE_VS = `
precision highp float;

attribute vec3 a_pos;
attribute vec2 a_uv;

uniform float uRoll, uOffY;
uniform vec2 uRepeat;

varying vec2 vUv;
varying float vDepth;
${CAMERA_GLSL}
void main(){
  float c = cos(uRoll), s = sin(uRoll);
  vec3 p = steerP(vec3(a_pos.x * c - a_pos.y * s, a_pos.x * s + a_pos.y * c, a_pos.z));
  vUv = a_uv * uRepeat + vec2(0.0, uOffY);
  vDepth = depthOf(p);
  gl_Position = projectP(p);
}
`

const CONE_FS = `
precision highp float;
uniform sampler2D uTex;
uniform vec3 uTint;
uniform float uOpacity;
${FOG_GLSL}varying vec2 vUv;
varying float vDepth;
void main(){
  float m = texture2D(uTex, vUv).r;
  float a = m * uOpacity * clarity(vDepth);
  gl_FragColor = vec4(uTint * a, a);
}
`

const GLOW_VS = `
precision highp float;

attribute vec2 a_corner;

uniform float uHalf, uZ;

varying vec2 vUv;
varying float vDepth;
${CAMERA_GLSL}
void main(){
  vec3 p = steerP(vec3(a_corner * uHalf, uZ));
  vUv = a_corner * 0.5 + 0.5;
  vDepth = depthOf(p);
  gl_Position = projectP(p);
}
`

const GLOW_FS = `
precision highp float;
uniform sampler2D uTex;
uniform vec3 uTint;
uniform float uOpacity;
${FOG_GLSL}varying vec2 vUv;
varying float vDepth;
void main(){
  float m = texture2D(uTex, vUv).r;
  float a = m * uOpacity * clarity(vDepth);
  gl_FragColor = vec4(uTint * a, a);
}
`

function compile(gl: WebGLRenderingContext, type: number, src: string): WebGLShader | null {
    const sh = gl.createShader(type)
    if (!sh) return null
    gl.shaderSource(sh, src)
    gl.compileShader(sh)
    if (!gl.getShaderParameter(sh, gl.COMPILE_STATUS)) {
        console.error("Hyperspace shader:", gl.getShaderInfoLog(sh))
        gl.deleteShader(sh)
        return null
    }
    return sh
}

function link(gl: WebGLRenderingContext, vsSrc: string, fsSrc: string): WebGLProgram | null {
    const vs = compile(gl, gl.VERTEX_SHADER, vsSrc)
    const fs = compile(gl, gl.FRAGMENT_SHADER, fsSrc)
    if (!vs || !fs) return null
    const prog = gl.createProgram()
    if (!prog) return null
    gl.attachShader(prog, vs)
    gl.attachShader(prog, fs)
    gl.linkProgram(prog)
    if (!gl.getProgramParameter(prog, gl.LINK_STATUS)) {
        console.error("Hyperspace link:", gl.getProgramInfoLog(prog))
        return null
    }
    return prog
}

function uniformCache(gl: WebGLRenderingContext, prog: WebGLProgram) {
    const locs: Record<string, WebGLUniformLocation | null> = {}
    return (name: string) => {
        if (!(name in locs)) locs[name] = gl.getUniformLocation(prog, name)
        return locs[name]
    }
}

type RGBA = [number, number, number, number]

function parseColor(input: string | undefined, fb: RGBA): RGBA {
    if (!input) return fb
    const str = String(input).trim()
    if (str.charAt(0) === "#") {
        let hex = str.slice(1)
        if (hex.length === 3 || hex.length === 4) {
            hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2] + (hex.length === 4 ? hex[3] + hex[3] : "")
        }
        if (hex.length >= 6) {
            const r = parseInt(hex.slice(0, 2), 16)
            const g = parseInt(hex.slice(2, 4), 16)
            const b = parseInt(hex.slice(4, 6), 16)
            const a = hex.length >= 8 ? parseInt(hex.slice(6, 8), 16) / 255 : 1
            if (!isNaN(r) && !isNaN(g) && !isNaN(b)) return [r / 255, g / 255, b / 255, a]
        }
        return fb
    }
    const m = str.match(/[\d.]+/g)
    if (m && m.length >= 3) {
        return [
            Math.min(255, parseFloat(m[0])) / 255,
            Math.min(255, parseFloat(m[1])) / 255,
            Math.min(255, parseFloat(m[2])) / 255,
            m.length >= 4 ? Math.min(1, parseFloat(m[3])) : 1,
        ]
    }
    return fb
}

function fillPalette(list: unknown, base: string, accent: string, out: Float32Array): number {
    const picked: string[] = Array.isArray(list)
        ? (list as unknown[]).filter((c): c is string => typeof c === "string" && c.length > 0)
        : []
    if (picked.length > 0) {
        const n = Math.min(MAX_PALETTE, picked.length)
        for (let i = 0; i < n; i += 1) {
            const c = parseColor(picked[i], [1, 1, 1, 1])
            out[i * 3] = c[0]
            out[i * 3 + 1] = c[1]
            out[i * 3 + 2] = c[2]
        }
        return n
    }
    const b = parseColor(base, [1, 1, 1, 1])
    const a = parseColor(accent, [0.376, 0.647, 0.98, 1])
    for (let i = 0; i < LEGACY_RAMP.length; i += 1) {
        const t = LEGACY_RAMP[i]
        out[i * 3] = b[0] + (a[0] - b[0]) * t
        out[i * 3 + 1] = b[1] + (a[1] - b[1]) * t
        out[i * 3 + 2] = b[2] + (a[2] - b[2]) * t
    }
    return LEGACY_RAMP.length
}

function num(v: unknown, fb: number): number {
    return typeof v === "number" && isFinite(v) ? v : fb
}

function clampN(v: number, lo: number, hi: number): number {
    return v < lo ? lo : v > hi ? hi : v
}

function mulberry32(seed: number) {
    let a = seed >>> 0
    return () => {
        a = (a + 0x6d2b79f5) >>> 0
        let t = Math.imul(a ^ (a >>> 15), 1 | a)
        t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t
        return ((t ^ (t >>> 14)) >>> 0) / 4294967296
    }
}

function makeWallTexture(rand: () => number): HTMLCanvasElement {
    const size = 512
    const c = document.createElement("canvas")
    c.width = size
    c.height = size
    const ctx = c.getContext("2d")
    if (!ctx) return c
    ctx.fillStyle = "#000000"
    ctx.fillRect(0, 0, size, size)
    for (let i = 0; i < 240; i += 1) {
        const x = rand() * size
        const w = rand() * 3 + 0.6
        const h = rand() * 320 + 90
        const top = rand() * size
        const alpha = rand()
        ctx.fillStyle = `rgba(255,255,255,${alpha})`
        ctx.fillRect(x, top, w, h)
    }
    return c
}

export default function Hyperspace() {
    const canvasRef = React.useRef<HTMLCanvasElement>(null)
    const glRef = React.useRef<WebGLRenderingContext | null>(null)
    const stateRef = React.useRef({
        streaks: [] as any[],
        cones: [] as any[],
        gl: null as WebGLRenderingContext | null,
        speed: 0,
        // ... other needed state fields ...
    })
    const resize = () => {
        const canvas = canvasRef.current
        if (!canvas) return
        canvas.width = canvas.clientWidth * Math.min(window.devicePixelRatio, MAX_DPR)
        canvas.height = canvas.clientHeight * Math.min(window.devicePixelRatio, MAX_DPR)
    }
    useEffect(() => {
        const canvas = canvasRef.current
        if (!canvas) return
        const gl = canvas.getContext("webgl", { antialias: false })
        if (!gl) {
            console.error("WebGL not supported")
            return
        }
        glRef.current = gl
        stateRef.current.gl = gl
        // Initialize buffers, shaders, etc.
        // ... (omitted for brevity) ...
        const render = () => {
            if (!gl) return
            gl.viewport(0, 0, gl.drawingBufferWidth, gl.drawingBufferHeight)
            gl.clearColor(0, 0, 0, 0)
            gl.clear(gl.COLOR_BUFFER_BIT)
            // Update and draw streaks, cones, glow, etc.
            // ... rendering logic ...
        }
        const loop = () => {
            render()
            requestAnimationFrame(loop)
        }
        loop()
        window.addEventListener('resize', resize)
        return () => {
            window.removeEventListener('resize', resize)
        }
    }, [])
    return <canvas ref={canvasRef} className="hyperspace-canvas" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", zIndex: -1 }} />
}
