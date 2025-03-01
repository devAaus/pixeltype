import { faker } from "@faker-js/faker"
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function generateWords(word: number) {
  return Array.from({ length: word }, () => faker.word.sample())
    .join(" ")
    .toLowerCase()
}


