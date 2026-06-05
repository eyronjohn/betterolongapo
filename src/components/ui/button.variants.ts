import { cva } from 'class-variance-authority';

export const buttonVariants = cva(
  'group/button inline-flex shrink-0 items-center justify-center rounded-md border border-transparent bg-clip-padding text-sm font-medium whitespace-nowrap transition-all outline-none select-none',
  {
    variants: {
      variant: {
        default: 'bg-primary text-primary-foreground hover:bg-primary/80',
        outline: 'border-border bg-background',
        link: 'text-primary underline underline-offset-4 hover:opacity-80',
      },
      size: {
        default: 'h-9 px-2.5',
        sm: 'h-8 px-2',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
);
