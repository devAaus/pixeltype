import { BarChart3, Keyboard, Trophy } from 'lucide-react'
import React from 'react'

export default function FeaturesSection() {
   const features = [
      {
         icon: <Keyboard className="w-12 h-12 mx-auto mb-4 text-green-400" />,
         title: 'Real-Time Feedback',
         description: 'See your accuracy as you type with color-coded feedback',
      },
      {
         icon: <Trophy className="w-12 h-12 mx-auto mb-4 text-green-400" />,
         title: 'Track WPM',
         description: 'Monitor your typing speed in words per minute',
      },
      {
         icon: <BarChart3 className="w-12 h-12 mx-auto mb-4 text-green-400" />,
         title: 'Progress Stats',
         description: 'Track your progress and see your improvement over time',
      }
   ]
   return (
      <section>
         <h2 className="text-2xl font-pixel mb-8 text-center">FEATURES</h2>
         <div className="grid md:grid-cols-3 gap-6">
            {features.map((feat) => (
               <div key={feat.title} className="pixelated-border bg-gray-800 p-6 rounded-lg text-center">
                  {feat.icon}
                  <h3 className="font-pixel text-lg mb-2">
                     {feat.title}
                  </h3>
                  <p className="font-mono text-gray-300">
                     {feat.description}
                  </p>
               </div>
            ))}
         </div>
      </section>
   )
}
