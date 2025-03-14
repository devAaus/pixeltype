import React from 'react'

export default function PixelatedBackground() {
   return (
      <div className="fixed inset-0 z-[-1] opacity-10">
         <div className="absolute inset-0 bg-grid-pattern [mask-image:linear-gradient(to_bottom,white,transparent)]" />
      </div>
   )
}
