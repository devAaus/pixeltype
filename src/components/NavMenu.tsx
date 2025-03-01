import { BarChart3, Keyboard, Trophy } from 'lucide-react'
import Link from 'next/link'

export default function NavMenu() {
   return (
      <nav className="flex justify-center space-x-4 my-4">
         <Link
            href="/tests"
            className="flex flex-col items-center p-2 bg-gray-800 rounded pixelated-border hover:bg-gray-700 transition-colors"
         >
            <Keyboard className="w-6 h-6 mb-1" />
            <span className="font-pixel text-xs">TESTS</span>
         </Link>
         <Link
            href="/leaderboard"
            className="flex flex-col items-center p-2 bg-gray-800 rounded pixelated-border hover:bg-gray-700 transition-colors"
         >
            <Trophy className="w-6 h-6 mb-1" />
            <span className="font-pixel text-xs">LEADERBOARD</span>
         </Link>
         <Link
            href="/stats"
            className="flex flex-col items-center p-2 bg-gray-800 rounded pixelated-border hover:bg-gray-700 transition-colors"
         >
            <BarChart3 className="w-6 h-6 mb-1" />
            <span className="font-pixel text-xs">STATS</span>
         </Link>
      </nav>
   )
}
