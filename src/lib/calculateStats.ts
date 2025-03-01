export const calculateWpm = (
   input: string,
   startTime: number | null,
   endTime: number | null
): number | null => {
   if (!startTime || !endTime) return null
   const timeInMinutes = (endTime - startTime) / 60000
   return Math.round(input.trim().split(/\s+/).length / timeInMinutes)
}

export const calculateAccuracy = (input: string, sampleText: string): number | null => {
   if (!input.length) return null

   const correctChars = input.split("").filter((char, i) => char === sampleText[i]).length

   return Math.round((correctChars / input.length) * 100)
}

