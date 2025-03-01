import type { Metadata } from "next";
import { Press_Start_2P, VT323 } from "next/font/google"
import "./globals.css";
import Header from "@/components/Header";
import PixelatedBackground from "@/components/PixelatedBackground";
import FloatingPixels from "@/components/FloatingPixels";

const pressStart2P = Press_Start_2P({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-press-start-2p",
})

const vt323 = VT323({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-vt323",
})

export const metadata = {
  title: "Pixel Type | Retro Typing Speed Test",
  description: "Test and improve your typing speed with our retro-styled typing game",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${pressStart2P.variable} ${vt323.variable} font-sans bg-gray-900 text-green-400 dark:bg-gray-900 dark:text-green-400`}
      >
        <PixelatedBackground />
        <div className="max-w-4xl mx-auto px-4">
          <Header />
          <main className="pb-16">
            {children}
          </main>
          <footer className="py-8 text-center font-mono">© 2024 PIXEL TYPE. All keys reserved.</footer>
        </div>
        <FloatingPixels />
      </body>
    </html>
  );
}
