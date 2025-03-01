import { Timer } from 'lucide-react'
import React from 'react'
import { Progress } from '../ui/progress'

interface Props {
   TIME_LIMIT: number
   timeLeft: number
}

export default function ProgressTimer(
   { TIME_LIMIT, timeLeft }: Props
) {
   const progressPercentage = ((TIME_LIMIT - timeLeft) / TIME_LIMIT) * 100;
   return (
      <div className="mt-4 space-y-2">
         <div className="flex justify-between text-xl font-mono">
            <span className='flex justify-between items-center gap-2'>
               <Timer className="h-5 w-5 text-green-400" />
               Time Left
            </span>
            <div className=" text-lg font-mono rounded-lg">
               <span
                  className={`text-2xl font-mono 
                     ${timeLeft <= 5
                        ? 'text-red-500 animate-pulse font-bold'
                        : ''
                     }`
                  }
               >
                  {timeLeft}s
               </span>
            </div>
         </div>

         <Progress value={progressPercentage} className="h-2 bg-gray-900" />
      </div>
   )
}
