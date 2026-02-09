import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-lg text-sm font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-primary-500 text-white hover:bg-primary-600 shadow-soft hover:shadow-medium",
        destructive:
          "bg-error-500 text-white hover:bg-error-600 shadow-soft hover:shadow-medium",
        outline:
          "border-2 border-primary-500 text-primary-500 bg-surface hover:bg-primary-500 hover:text-white shadow-soft",
        secondary:
          "bg-secondary-500 text-white hover:bg-secondary-600 shadow-soft hover:shadow-medium",
        ghost: "text-text-secondary hover:bg-primary-50 hover:text-primary-600",
        link: "text-primary-600 underline-offset-4 hover:underline",
        success: "bg-success-500 text-white hover:bg-success-600 shadow-soft hover:shadow-medium",
        warning: "bg-warning-500 text-white hover:bg-warning-600 shadow-soft hover:shadow-medium",
      },
      size: {
        default: "h-10 px-6 py-2",
        sm: "h-9 rounded-md px-4",
        lg: "h-12 rounded-lg px-8 text-base",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }