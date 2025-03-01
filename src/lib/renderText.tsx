import React from "react"

export const renderText = (sampleText: string, input: string) => {
   return sampleText.split("").map((char, index) => {
      let className = "font-mono text-2xl"

      if (index < input.length) {
         className += input[index] === char ? " text-green-400" : " text-red-500"
      } else {
         className += " text-gray-300"
      }

      return (
         <span key={index} className={className} >
            {char}
         </span>
      )
   })
}
