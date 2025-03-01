"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import BlinkingCursor from "../BlinkingCursor"
import { generateWords } from "@/lib/utils"
import { renderText } from "@/lib/renderText"

const TIME_LIMIT = 30

const TypingDemo = () => {
   const [sampleText, setSampleText] = useState(generateWords(50))
   const [input, setInput] = useState("")
   const [startTime, setStartTime] = useState<number | null>(null)
   const [endTime, setEndTime] = useState<number | null>(null)
   const [wpm, setWpm] = useState<number | null>(null)
   const [accuracy, setAccuracy] = useState<number | null>(null)
   const [isComplete, setIsComplete] = useState(false)
   const [timeLeft, setTimeLeft] = useState(TIME_LIMIT)
   const inputRef = useRef<HTMLTextAreaElement>(null)

   useEffect(() => {
      let timer: NodeJS.Timeout
      if (startTime && !isComplete) {
         timer = setInterval(() => {
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
      }
      return () => clearInterval(timer)
   }, [startTime, isComplete])

   const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      const value = e.target.value.slice(0, sampleText.length)
      setInput(value)

      if (!startTime) {
         setStartTime(Date.now())
      }

      if (value === sampleText && timeLeft > 0) {
         setEndTime(Date.now())
         setIsComplete(true)
      }
   }

   const resetTest = () => {
      setInput("")
      setStartTime(null)
      setEndTime(null)
      setWpm(null)
      setAccuracy(null)
      setIsComplete(false)
      setTimeLeft(TIME_LIMIT)

      const newText = generateWords(50)
      setSampleText(newText)

      setTimeout(() => inputRef.current?.focus(), 0)
   }

   useEffect(() => {
      if (startTime && endTime) {
         const timeInMinutes = (endTime - startTime) / 60000
         const typedWords = input.trim().split(/\s+/).length
         const calculatedWpm = Math.round(typedWords / timeInMinutes)
         setWpm(calculatedWpm)

         let correctChars = 0
         for (let i = 0; i < input.length; i++) {
            if (input[i] === sampleText[i]) {
               correctChars++
            }
         }
         const calculatedAccuracy = Math.round((correctChars / sampleText.length) * 100)
         setAccuracy(calculatedAccuracy)
      }
   }, [endTime, input, startTime])


   return (
      <div className="space-y-4">
         <div className="bg-gray-900 p-4 rounded-lg min-h-[100px] flex items-center">
            <div className="font-mono text-lg leading-relaxed">
               {renderText(sampleText, input)}
               {!isComplete && input.length < sampleText.length && <BlinkingCursor />}
            </div>
         </div>

         <div className="flex justify-between text-lg font-mono bg-gray-900 p-3 rounded-lg">
            <span>Time Left: {timeLeft}s</span>
         </div>

         <div className="flex flex-col space-y-4">
            <textarea
               ref={inputRef}
               value={input}
               onChange={handleInputChange}
               disabled={isComplete}
               className="bg-gray-900 border border-green-400 rounded-lg p-3 font-mono text-lg focus:outline-none focus:ring-2 focus:ring-green-400 resize-none min-h-[100px]"
               placeholder="Start typing..."
               autoFocus
               rows={5}
            />

            <div className="flex justify-between">
               <Button onClick={resetTest} className="font-pixel bg-gray-700 hover:bg-gray-600 cursor-pointer">
                  RESET
               </Button>

               {isComplete && (
                  <div className="flex space-x-4 font-mono text-lg">
                     <div className="bg-gray-900 px-3 py-1 rounded-lg">
                        WPM: <span className="text-green-400">{wpm}</span>
                     </div>
                     <div className="bg-gray-900 px-3 py-1 rounded-lg">
                        Accuracy: <span className="text-green-400">{accuracy}%</span>
                     </div>
                  </div>
               )}
            </div>
         </div>
      </div>
   )
}

export default TypingDemo

