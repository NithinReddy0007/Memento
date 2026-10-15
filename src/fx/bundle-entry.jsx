import React, { useState, useRef, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import { Liquid } from 'liquid-gooey';
import { MetalFx, useMetalBend, setCursorLightConfig, isMetalFxSupported } from 'metal-fx';
import { ThinkingOrb } from 'thinking-orbs';

// Configure cursor reflection disabled per specification
try {
  setCursorLightConfig({ cursor: false });
} catch (e) {
  console.warn('MetalFx cursor light config error:', e);
}

// ─────────────────────────────────────────────────────────────
// 1. LIQUID-GOOEY FLOATING ACTION MENU
// ─────────────────────────────────────────────────────────────
function LiquidActionMenu({ onAddContent, onImportPoster }) {
  const [open, setOpen] = useState(false);
  const containerRef = useRef(null);

  // Close on Escape or click outside
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && open) setOpen(false);
    };
    const handleClickOutside = (e) => {
      if (open && containerRef.current && !containerRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('pointerdown', handleClickOutside);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('pointerdown', handleClickOutside);
    };
  }, [open]);

  const toggle = () => setOpen((prev) => !prev);

  return (
    <div
      ref={containerRef}
      className="memento-liquid-fab-container"
      style={{
        position: 'fixed',
        bottom: '28px',
        right: '28px',
        zIndex: 9990,
        pointerEvents: 'none',
      }}
    >
      <div style={{ pointerEvents: 'auto' }}>
        <Liquid
          blur={6}
          contrast={18}
          fill="var(--p-red, #da525d)"
          shadow="0 8px 24px rgba(218,82,93,0.38), 0 2px 8px rgba(0,0,0,0.3)"
        >
          {/* Main + button */}
          <Liquid.Item x={0} y={0} transition="bouncy">
            <button
              type="button"
              className={`memento-liquid-fab-trigger ${open ? 'is-active' : ''}`}
              onClick={toggle}
              aria-label={open ? 'Close action menu' : 'Open action menu'}
              aria-expanded={open}
              title="Add content or import poster"
              style={{
                width: '56px',
                height: '56px',
                borderRadius: '50%',
                border: 'none',
                background: 'var(--p-red, #da525d)',
                color: '#ffffff',
                display: 'grid',
                placeItems: 'center',
                cursor: 'pointer',
                boxShadow: '0 4px 16px rgba(0,0,0,0.25)',
                transition: 'transform 0.25s cubic-bezier(0.16, 1, 0.3, 1)',
              }}
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                style={{
                  transform: open ? 'rotate(45deg)' : 'rotate(0deg)',
                  transition: 'transform 0.28s cubic-bezier(0.34, 1.56, 0.64, 1)',
                }}
              >
                <line x1="12" y1="5" x2="12" y2="19" />
                <line x1="5" y1="12" x2="19" y2="12" />
              </svg>
            </button>
          </Liquid.Item>

          {/* Action 1: Add Content */}
          <Liquid.Item
            x={0}
            y={open ? -64 : 0}
            transition="bouncy"
            delay={open ? 0 : 35}
          >
            <button
              type="button"
              className="memento-liquid-action-btn"
              onClick={() => {
                setOpen(false);
                if (typeof onAddContent === 'function') onAddContent();
              }}
              aria-label="Add Content"
              tabIndex={open ? 0 : -1}
              style={{
                display: open ? 'inline-flex' : 'none',
                alignItems: 'center',
                gap: '8px',
                height: '46px',
                padding: '0 16px 0 12px',
                borderRadius: '23px',
                border: '1px solid rgba(255,255,255,0.22)',
                background: 'var(--surface, #141414)',
                color: 'var(--ink, #ffffff)',
                cursor: 'pointer',
                boxShadow: '0 8px 24px rgba(0,0,0,0.35)',
                fontSize: '13px',
                fontWeight: 600,
                fontFamily: 'var(--sans)',
                whiteSpace: 'nowrap',
                position: 'absolute',
                right: '0',
                bottom: '0',
              }}
            >
              <span
                style={{
                  width: '28px',
                  height: '28px',
                  borderRadius: '50%',
                  background: 'var(--p-maple, #c59f6b)',
                  color: '#ffffff',
                  display: 'grid',
                  placeItems: 'center',
                  flexShrink: 0,
                }}
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="2.18" ry="2.18" />
                  <line x1="7" y1="2" x2="7" y2="22" />
                  <line x1="17" y1="2" x2="17" y2="22" />
                  <line x1="2" y1="12" x2="22" y2="12" />
                  <line x1="2" y1="7" x2="7" y2="7" />
                  <line x1="2" y1="17" x2="7" y2="17" />
                  <line x1="17" y1="17" x2="22" y2="17" />
                  <line x1="17" y1="7" x2="22" y2="7" />
                </svg>
              </span>
              <span>Add Content</span>
            </button>
          </Liquid.Item>

          {/* Action 2: Import Custom Poster */}
          <Liquid.Item
            x={0}
            y={open ? -120 : 0}
            transition="bouncy"
            delay={open ? 35 : 0}
          >
            <button
              type="button"
              className="memento-liquid-action-btn"
              onClick={() => {
                setOpen(false);
                if (typeof onImportPoster === 'function') onImportPoster();
              }}
              aria-label="Import Poster"
              tabIndex={open ? 0 : -1}
              style={{
                display: open ? 'inline-flex' : 'none',
                alignItems: 'center',
                gap: '8px',
                height: '46px',
                padding: '0 16px 0 12px',
                borderRadius: '23px',
                border: '1px solid rgba(255,255,255,0.22)',
                background: 'var(--surface, #141414)',
                color: 'var(--ink, #ffffff)',
                cursor: 'pointer',
                boxShadow: '0 8px 24px rgba(0,0,0,0.35)',
                fontSize: '13px',
                fontWeight: 600,
                fontFamily: 'var(--sans)',
                whiteSpace: 'nowrap',
                position: 'absolute',
                right: '0',
                bottom: '0',
              }}
            >
              <span
                style={{
                  width: '28px',
                  height: '28px',
                  borderRadius: '50%',
                  background: 'var(--p-green, #96d1aa)',
                  color: '#1a3322',
                  display: 'grid',
                  placeItems: 'center',
                  flexShrink: 0,
                }}
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                  <circle cx="8.5" cy="8.5" r="1.5" />
                  <polyline points="21 15 16 10 5 21" />
                </svg>
              </span>
              <span>Import Poster</span>
            </button>
          </Liquid.Item>
        </Liquid>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────
// 2. METALFX SEARCH BAR COMPONENT
// ─────────────────────────────────────────────────────────────
function MetalSearchInput({
  id,
  name = 'query',
  placeholder = 'Start typing a title...',
  initialValue = '',
  onInput,
  onKeyDown,
  onFocus,
  onBlur,
  theme = 'auto',
  autoComplete = 'off',
  minLength = 2,
}) {
  const containerRef = useRef(null);
  const inputRef = useRef(null);
  const [val, setVal] = useState(initialValue);

  // Apply useMetalBend to the container
  try {
    useMetalBend(containerRef);
  } catch (err) {
    // Graceful fallback if bend not supported
  }

  const handleChange = (e) => {
    const next = e.target.value;
    setVal(next);
    if (onInput) onInput(e);
  };

  const handleClear = () => {
    setVal('');
    if (inputRef.current) {
      inputRef.current.value = '';
      inputRef.current.focus();
      const event = new Event('input', { bubbles: true });
      inputRef.current.dispatchEvent(event);
      if (onInput) onInput(event);
    }
  };

  const supported = typeof isMetalFxSupported === 'function' ? isMetalFxSupported() : true;

  return (
    <div
      ref={containerRef}
      className="memento-metal-search-container"
      style={{
        position: 'relative',
        width: '100%',
        maxWidth: '560px',
        display: 'inline-block',
      }}
    >
      <MetalFx
        preset="chromatic"
        variant="button"
        strength={0.90}
        innerShadow={{ alpha: 0.90, offsetY: 1, blur: 0.5 }}
        theme={theme}
      >
        <div
          className="memento-metal-search-inner"
          style={{
            position: 'relative',
            display: 'flex',
            alignItems: 'center',
            width: '100%',
            height: '46px',
            borderRadius: '8px',
            background: 'var(--surface, #111111)',
            padding: '0 12px 0 16px',
            transition: 'background 0.2s ease',
          }}
        >
          <svg
            width="17"
            height="17"
            viewBox="0 0 24 24"
            fill="none"
            stroke="var(--muted, #8e8e93)"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
            style={{ flexShrink: 0, marginRight: '10px' }}
          >
            <circle cx="11" cy="11" r="8" />
            <line x1="21" y1="21" x2="16.65" y2="16.65" />
          </svg>
          <input
            ref={inputRef}
            id={id}
            name={name}
            type="search"
            placeholder={placeholder}
            value={val}
            autoComplete={autoComplete}
            minLength={minLength}
            onChange={handleChange}
            onKeyDown={onKeyDown}
            onFocus={onFocus}
            onBlur={onBlur}
            className="memento-metal-search-input-field"
            style={{
              flex: 1,
              height: '100%',
              border: 'none',
              background: 'transparent',
              color: 'var(--ink, #ffffff)',
              fontSize: '14px',
              fontFamily: 'var(--sans)',
              outline: 'none',
              padding: 0,
            }}
          />
          {val ? (
            <button
              type="button"
              onClick={handleClear}
              aria-label="Clear search"
              style={{
                background: 'transparent',
                border: 'none',
                color: 'var(--muted, #8e8e93)',
                cursor: 'pointer',
                fontSize: '16px',
                padding: '4px',
                display: 'grid',
                placeItems: 'center',
                borderRadius: '50%',
              }}
            >
              ✕
            </button>
          ) : null}
        </div>
      </MetalFx>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────
// 3. THINKING-ORB LOADING COMPONENT
// ─────────────────────────────────────────────────────────────
function ThinkingOrbContainer({
  size = 64,
  state = 'listening',
  text = 'Loading...',
  theme = 'auto',
  inline = false,
}) {
  return (
    <div
      className="memento-thinking-orb-wrap"
      style={{
        display: inline ? 'inline-flex' : 'flex',
        flexDirection: inline ? 'row' : 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: inline ? '12px' : '14px',
        padding: inline ? '8px 12px' : '24px 16px',
        textAlign: 'center',
      }}
      role="status"
      aria-live="polite"
    >
      <div
        style={{
          width: `${size}px`,
          height: `${size}px`,
          display: 'grid',
          placeItems: 'center',
          flexShrink: 0,
        }}
      >
        <ThinkingOrb size={size} state={state} theme={theme} />
      </div>
      {text ? (
        <span
          style={{
            color: 'var(--muted, #8e8e93)',
            fontSize: size <= 24 ? '12px' : '13.5px',
            fontFamily: 'var(--sans)',
            fontWeight: 500,
            letterSpacing: '0.2px',
          }}
        >
          {text}
        </span>
      ) : null}
    </div>
  );
}

// ─────────────────────────────────────────────────────────────
// GLOBAL MOUNT / UNMOUNT APIS (Exposed on window.MementoFx)
// ─────────────────────────────────────────────────────────────
const activeRoots = new Map();

window.MementoFx = {
  // Mount Liquid Action Menu
  mountLiquidMenu: (container, props = {}) => {
    if (!container) return null;
    let root = activeRoots.get(container);
    if (!root) {
      root = ReactDOM.createRoot(container);
      activeRoots.set(container, root);
    }
    root.render(<LiquidActionMenu {...props} />);
    return root;
  },

  // Mount MetalFx Search
  mountMetalSearch: (container, props = {}) => {
    if (!container) return null;
    let root = activeRoots.get(container);
    if (!root) {
      root = ReactDOM.createRoot(container);
      activeRoots.set(container, root);
    }
    root.render(<MetalSearchInput {...props} />);
    return root;
  },

  // Mount ThinkingOrb Loader
  mountThinkingOrb: (container, { size = 64, state = 'listening', text = 'Loading...', theme = 'auto', inline = false } = {}) => {
    if (!container) return null;
    let root = activeRoots.get(container);
    if (!root) {
      root = ReactDOM.createRoot(container);
      activeRoots.set(container, root);
    }
    root.render(
      <ThinkingOrbContainer
        size={size}
        state={state}
        text={text}
        theme={theme}
        inline={inline}
      />
    );
    return root;
  },

  // Unmount any mounted component
  unmount: (container) => {
    if (!container) return;
    const root = activeRoots.get(container);
    if (root) {
      try {
        root.unmount();
      } catch (err) {}
      activeRoots.delete(container);
    }
  },

  // Direct component exports
  Liquid,
  MetalFx,
  useMetalBend,
  setCursorLightConfig,
  ThinkingOrb,
};

console.log('MementoFx bundle initialized with Liquid, MetalFx, and ThinkingOrb.');
