"use client"

import type React from "react"
import { useState, useEffect, useRef, useMemo } from "react"
import { Button } from "@/components/ui/button"
import BlinkingCursor from "../BlinkingCursor"
import { generateWords } from "@/lib/utils"
import { renderText } from "@/lib/renderText"
import { calculateAccuracy, calculateWpm } from "@/lib/calculateStats"

const TIME_LIMIT = 30

const TypingDemo = () => {
   const words = generateWords(50)
   const [sampleText, setSampleText] = useState(words)
   const [input, setInput] = useState("")
   const [startTime, setStartTime] = useState<number | null>(null)
   const [endTime, setEndTime] = useState<number | null>(null)
   const [isComplete, setIsComplete] = useState(false)
   const [timeLeft, setTimeLeft] = useState(TIME_LIMIT)
   const inputRef = useRef<HTMLTextAreaElement>(null)

   const characterLimit = sampleText.length

   useEffect(() => {
      if (startTime && !isComplete) {
         const timer = setInterval(() => {
            setTimeLeft((prev) => {
               if (prev <= 1) {
                  clearInterval(timer)
                  setEndTime(Date.now())
                  setIsComplete(true)
                  return 0
               }
               return prev - 1
            })
         }, 1000)
         return () => clearInterval(timer)
      }
   }, [startTime, isComplete])

   const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      const value = e.target.value.slice(0, characterLimit)
      setInput(value)

      if (!startTime) setStartTime(Date.now())

      if (value.length === characterLimit && timeLeft > 0) {
         setEndTime(Date.now())
         setIsComplete(true)
      }
   }

   const resetTest = () => {
      setSampleText(words)
      setInput("")
      setStartTime(null)
      setEndTime(null)
      setIsComplete(false)
      setTimeLeft(TIME_LIMIT)
      setTimeout(() => inputRef.current?.focus(), 0)
   }

   const wpm = useMemo(() => calculateWpm(input, startTime, endTime), [input, startTime, endTime])
   const accuracy = useMemo(() => calculateAccuracy(input, sampleText), [input, sampleText])

   return (
      <div className="space-y-4">
         <div className="bg-gray-900 p-4 rounded-lg min-h-[100px] flex items-center">
            <div className="font-fira text-lg leading-relaxed select-none pointer-events-none" onCopy={(e) => e.preventDefault()}>
               {renderText(sampleText, input)}
               {!isComplete && input.length < sampleText.length && <BlinkingCursor />}
            </div>
         </div>

         <div className="flex flex-col space-y-4">
            <textarea
               ref={inputRef}
               value={input}
               onChange={handleInputChange}
               disabled={isComplete}
               className="bg-gray-900 border border-green-400 rounded-lg p-3 font-fira text-lg focus:outline-none focus:ring-2 focus:ring-green-400 resize-none min-h-[100px]"
               placeholder="Start typing..."
               rows={5}
            />

            <div className="flex justify-between">
               <Button onClick={resetTest} className="font-pixel bg-gray-700 hover:bg-gray-600 cursor-pointer">
                  RESET
               </Button>

               <div className="flex space-x-4 font-mono text-lg">
                  <div className="flex justify-between text-lg font-mono bg-gray-900 p-3 rounded-lg">
                     <span>Time Left: {timeLeft}s</span>
                  </div>

                  {isComplete && (
                     <>
                        <div className="flex justify-between text-lg font-mono bg-gray-900 p-3 rounded-lg">
                           <span className="text-green-400">WPM: {wpm ?? 0}</span>
                        </div>
                        <div className="flex justify-between text-lg font-mono bg-gray-900 p-3 rounded-lg">
                           <span className="text-green-400">Accuracy: {accuracy ?? 0}%</span>
                        </div>
                     </>
                  )}
               </div>
            </div>
         </div>
      </div>
   )
}

export default TypingDemo
