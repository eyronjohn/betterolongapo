import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

import * as LucideIcons from 'lucide-react';
import type { LucideProps } from 'lucide-react';
import type { ComponentType } from 'react';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatDate(date: Date): string {
  return new Intl.DateTimeFormat('en-PH', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(date);
}

export function truncateText(text: string, maxLength: number): string {
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength) + '...';
}

export const getRandomNumber = (min: number, max: number): number => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

type LucideIconName = keyof typeof LucideIcons;

export function resolveLucideIcon(name?: string): ComponentType<LucideProps> {
  const fallback = LucideIcons.CircleHelp;
  if (!name) return fallback;

  if (name in LucideIcons) {
    return LucideIcons[name as LucideIconName] as ComponentType<LucideProps>;
  }

  return fallback;
}
