export const renderText = (sampleText: string, input: string) => {
   return sampleText.split("").map((char, index) => {
      let className = "font-fira text-xl tracking-wider leading-relaxed break-all"

      if (index < input.length) {
         className += input[index] === char ? " text-green-400" : " text-red-500"
      } else {
         className += " text-slate-400"
      }

      return (
         <span key={index} className={className} >
            {char}
         </span>
      )
   })
}
