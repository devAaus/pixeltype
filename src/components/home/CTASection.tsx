import Link from 'next/link'
import React from 'react'
import { Button } from '../ui/button'

export default function CTASection() {
   return (
      <section className="text-center space-y-6">
         <h2 className="text-3xl font-pixel">READY TO TYPE?</h2>
         <p className="font-mono text-xl">Test your typing speed and accuracy now!</p>
         <Button className="font-pixel text-xl px-10 py-8 bg-green-600 hover:bg-green-500 text-black" asChild>
            <Link href="/tests">
               START YOUR TYPING TEST
            </Link>
         </Button>
      </section>
   )
}
