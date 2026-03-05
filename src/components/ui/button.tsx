import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const buttonVariants = cva(
  'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*="size-"])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:ring-2 focus-visible:ring-[#1877F2] focus-visible:ring-offset-2',
  {
    variants: {
      variant: {
        default: 'bg-[#2851A3] text-white shadow-xs hover:bg-[#1D3C78]',
        outline: 'border-2 border-[#2851A3] text-[#2851A3] hover:bg-[#ECF3FF]',
        ghost: 'hover:bg-[#ECF3FF] hover:text-[#1D3C78]',
        link: 'text-[#1877F2] underline-offset-4 hover:underline',
        secondary: 'bg-[#ECF3FF] text-[#1D3C78] shadow-xs hover:bg-[#AAC9FF]',
      },
      size: {
        default: 'h-10 px-5 py-2',
        sm: 'h-8 rounded-md px-3 text-xs',
        lg: 'h-12 rounded-md px-8 text-base',
        icon: 'size-10',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
);

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<'button'> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  }) {
  const Comp = asChild ? Slot : 'button';
  return (
    <Comp className={cn(buttonVariants({ variant, size, className }))} {...props} />
  );
}

export { Button, buttonVariants };
