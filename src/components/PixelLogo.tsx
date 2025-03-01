import React from 'react'

export default function PixelLogo() {
   return (
      <div className="w-16 h-16 grid grid-cols-8 grid-rows-8 gap-0.5 mb-4">
         {/* Keyboard key shape */}
         {[...Array(64)].map((_, i) => {
            // Create a keyboard key shape
            const isOuterBorder =
               i < 8 || // top row
               i > 55 || // bottom row
               i % 8 === 0 || // left column
               i % 8 === 7 || // right column
               (i >= 24 && i <= 31) || // middle horizontal line
               i % 8 === 3 ||
               i % 8 === 4 // middle vertical line

            return <div key={i} className={`w-full h-full ${isOuterBorder ? "bg-green-400" : "bg-transparent"}`} />
         })}
      </div>
   )
}