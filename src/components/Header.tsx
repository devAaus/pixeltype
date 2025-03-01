import React from 'react'
import PixelLogo from './PixelLogo'
import BlinkingCursor from './BlinkingCursor'
import NavMenu from './NavMenu'
import Link from 'next/link'

export default function Header() {
   return (
      <header className="py-8 flex flex-col items-center">
         <Link href='/'>
            <PixelLogo />
         </Link>
         <h1 className="text-4xl font-bold text-center font-pixel mb-2">PIXEL TYPE</h1>
         <p className="text-xl text-center font-mono flex items-center">
            Speed • Accuracy • Skill <BlinkingCursor />
         </p>
         {/* <NavMenu /> */}
      </header>
   )
}
