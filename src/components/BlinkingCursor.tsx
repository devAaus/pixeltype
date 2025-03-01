"use client"

import { motion } from "framer-motion"

export default function BlinkingCursor() {

   return <motion.span
      className="inline-block w-1 h-5 bg-green-400 ml-1"
      animate={{ opacity: [1, 0, 1] }}
      transition={{ duration: 1.2, repeat: Infinity, repeatType: "loop" }}
   />

}
