// FloatingActionMenu – Liquid‑gooey floating action button
// This component provides a "+" button that expands into a liquid‑gooey menu
// with two actions: Add Content and Import Poster.

"use client"

import * as React from "react"
import { Liquid, LiquidItem } from "liquid-gooey"

/**
 * Props for the floating action menu.
 * @param onAddContent – callback when the Add Content action is selected.
 * @param onImportPoster – callback when a poster image file is selected.
 */
export interface FloatingActionMenuProps {
  onAddContent?: () => void
  onImportPoster?: (file: File) => void
}

export default function FloatingActionMenu({
  onAddContent,
  onImportPoster,
}: FloatingActionMenuProps) {
  const [isOpen, setIsOpen] = React.useState(false)
  const fileInputRef = React.useRef<HTMLInputElement>(null)

  const toggleMenu = () => setIsOpen((prev) => !prev)

  const handleImportClick = () => {
    // Trigger hidden file input
    fileInputRef.current?.click()
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file && onImportPoster) {
      onImportPoster(file)
    }
    // Reset the input so the same file can be selected again if needed
    e.target.value = ""
  }

  return (
    <div className="fixed inset-0 flex items-end justify-end p-6 pointer-events-none">
      {/* Liquid‑gooey container – pointer‑events needed for clicks */}
      <div className="pointer-events-auto">
        <Liquid
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          // Preserve the default animation settings; they already include blur,
          // fill, duration, easing, and staggered item animation.
          // We only adjust positioning.
        >
          {/* Primary + button */}
          <LiquidItem
            // The main trigger – we use a simple + sign.
            onClick={toggleMenu}
            aria-label="Open Memento actions menu"
            className="w-14 h-14 flex items-center justify-center bg-primary-600 text-white rounded-full shadow-lg"
          >
            <span className="text-2xl font-bold" aria-hidden="true">
              +
            </span>
          </LiquidItem>

          {/* Secondary actions – appear when isOpen */}
          {isOpen && (
            <>
              <LiquidItem
                onClick={onAddContent}
                aria-label="Add Content"
                className="w-12 h-12 flex items-center justify-center bg-primary-500 text-white rounded-full shadow"
              >
                {/* Simple text label – replace with an icon if desired */}
                <span className="text-sm" aria-hidden="true">
                  Add
                </span>
              </LiquidItem>

              <LiquidItem
                onClick={handleImportClick}
                aria-label="Import Poster"
                className="w-12 h-12 flex items-center justify-center bg-primary-500 text-white rounded-full shadow"
              >
                <span className="text-sm" aria-hidden="true">
                  Poster
                </span>
              </LiquidItem>
            </>
          )}
        </Liquid>
      </div>

      {/* Hidden file input for poster import */}
      <input
        type="file"
        accept="image/png, image/jpeg, image/webp"
        ref={fileInputRef}
        onChange={handleFileChange}
        className="hidden"
      />
    </div>
  )
}
