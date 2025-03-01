import React from 'react'

interface Props {
   wpm: number | null
   accuracy: number | null
}

export default function Results(
   { wpm, accuracy }: Props
) {
   const results = [
      {
         label: 'WPM',
         value: wpm,
      },
      {
         label: 'Accuracy',
         value: accuracy,
      }
   ]
   return (
      <div className="flex space-x-4 font-mono text-lg">
         {results.map((r) => (
            <div className="flex justify-between text-lg font-mono bg-gray-900 p-3 rounded-lg">
               <span className="text-green-400">
                  {r.label}: {r.value ?? 0}</span>
            </div>
         ))}
      </div>
   )
}
