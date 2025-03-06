import { forwardRef } from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@workspace/ui/lib/utils";

const ButtonStyle = {
  base: "inline-flex items-center justify-center rounded-md text-sm font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background",
  variants: {
    default: "bg-primary text-primary-foreground shadow hover:bg-primary/90",
    secondary:
      "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
    brand:
      "bg-yellow-400 hover:bg-yellow-500 focus:ring-yellow-600 dark:text-slate-900",
    destructive:
      "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
    outline:
      "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",

    ghost: "hover:bg-accent hover:text-accent-foreground",
    link: "text-primary underline-offset-4 hover:underline",
  },
  sizes: {
    lg: "h-11 px-8 rounded-md",
    md: "h-10 py-2 px-4",
    sm: "h-9 px-6 rounded-md",
    xs: "h-9 px-3 rounded-md",
    icon: "size-10 rounded-full",
  },
};

const buttonVariants = cva(ButtonStyle.base, {
  variants: {
    variant: ButtonStyle.variants,
    size: ButtonStyle.sizes,
  },
  defaultVariants: {
    variant: "default",
    size: "md",
  },
});

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  };

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);

Button.displayName = "Button";

export { Button, ButtonStyle, buttonVariants };
