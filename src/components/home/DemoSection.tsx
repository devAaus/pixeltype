import React from 'react'
import TypingDemo from './TypingDemo'

export default function DemoSection() {
   return (
      <section className="pixelated-border bg-gray-800 p-6 rounded-lg">
         <h2 className="text-2xl font-pixel mb-4 text-center">TRY IT OUT</h2>
         <TypingDemo />
      </section>
   )
}
