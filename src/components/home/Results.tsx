import { CheckCircle, Gauge } from 'lucide-react';
import React from 'react'

interface Props {
   wpm: number | null
   accuracy: number | null
}

export default function Results(
   { wpm, accuracy }: Props
) {
   const results = [
      { label: "WPM", value: wpm, icon: <Gauge className="w-5 h-5 text-green-400" /> },
      { label: "Accuracy", value: accuracy ? `${accuracy}%` : "0%", icon: <CheckCircle className="w-5 h-5 text-green-400" /> },
   ];
   return (
      <div className="flex space-x-4 font-mono text-lg">
         {results.map((r) => (
            <div key={r.label} className="flex items-center space-x-2 bg-gray-900 p-3 rounded-lg">
               {r.icon}
               <span className="text-green-400">
                  {r.label}: {r.value}
               </span>
            </div>
         ))}
      </div>
   )
}
