import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const PHONE_NUMBER = '+998997228280'
export const PHONE_DISPLAY = '+998 99 722 82 80'
export const PHONE_HREF = `tel:${PHONE_NUMBER}`
