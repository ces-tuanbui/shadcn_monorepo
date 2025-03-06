"use client";

import { forwardRef } from "react";
import * as AvatarPrimitive from "@radix-ui/react-avatar";
import { type AvatarProps as RadixAvatarProps } from "@radix-ui/react-avatar";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@workspace/ui/lib/utils";
export interface CustomAvatarProps
  extends RadixAvatarProps,
    VariantProps<typeof avatarVariants> {}
export interface AvatarImageProps
  extends React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Image>,
    React.ImgHTMLAttributes<HTMLImageElement> {}

const AvatarStyle = {
  base: "relative flex shrink-0 overflow-hidden rounded-full",
  sizes: {
    lg: "size-14",
    md: "size-10 md:size-12",
    sm: "size-8",
    xs: "size-6",
  },
};

const avatarVariants = cva(AvatarStyle.base, {
  variants: {
    size: AvatarStyle.sizes,
  },
  defaultVariants: {
    size: "md",
  },
});

const Avatar = forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Root>,
  CustomAvatarProps
>(({ size, className, ...props }, ref) => (
  <AvatarPrimitive.Root
    ref={ref}
    className={cn(avatarVariants({ size, className }))}
    {...props}
  />
));

Avatar.displayName = AvatarPrimitive.Root.displayName;

const AvatarImage = forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Image>,
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Image>
>(({ className, ...props }, ref) => (
  <AvatarPrimitive.Image
    ref={ref}
    className={cn("aspect-square size-full", className)}
    {...props}
  />
));

AvatarImage.displayName = AvatarPrimitive.Image.displayName;

const AvatarFallback = forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Fallback>,
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Fallback>
>(({ className, ...props }, ref) => (
  <AvatarPrimitive.Fallback
    ref={ref}
    className={cn(
      "flex size-full items-center justify-center rounded-full bg-muted",
      className
    )}
    {...props}
  />
));

AvatarFallback.displayName = AvatarPrimitive.Fallback.displayName;

export { Avatar, AvatarImage, AvatarFallback, avatarVariants, AvatarStyle };
