import Link from 'next/link'
import React from 'react'
import { Button } from '../ui/button'

export default function HeroSection() {
   return (
      <section className="text-center space-y-6">
         <h1 className="text-4xl md:text-5xl font-pixel leading-tight">
            LEVEL UP YOUR
            <br />
            TYPING SKILLS
         </h1>
         <p className="font-mono text-xl max-w-2xl mx-auto">
            Challenge yourself with our retro-styled typing test. How fast can you type?
         </p>
         <div className="flex justify-center gap-4 pt-4">
            <Link href="/tests">
               <Button className="font-pixel text-lg px-8 py-6 bg-green-600 hover:bg-green-500 text-black">
                  START TYPING
               </Button>
            </Link>
         </div>
      </section>
   )
}
