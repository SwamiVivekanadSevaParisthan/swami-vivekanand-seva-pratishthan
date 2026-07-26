"use client"

import React from "react"
import { cva } from "class-variance-authority"
import { HTMLMotionProps, motion } from "motion/react"

import { cn } from "../../lib/utils"

const bouncingDotsVariant = cva("flex gap-2 items-center justify-center", {
  variants: {
    messagePlacement: {
      bottom: "flex-col",
      right: "flex-row",
      left: "flex-row-reverse",
    },
  },
  defaultVariants: {
    messagePlacement: "bottom",
  },
})

export interface BouncingDotsProps {
  /**
   * The number of bouncing dots to display.
   * @default 3
   */
  dots?: number
  /**
   * Optional message to display alongside the bouncing dots.
   */
  message?: string
  /**
   * Position of the message relative to the spinner.
   * @default bottom
   */
  messagePlacement?: "bottom" | "left" | "right"
}

export function BouncingDots({
  dots = 3,
  message,
  messagePlacement = "bottom",
  className,
  ...props
}: HTMLMotionProps<"div"> & BouncingDotsProps) {
  return (
    <div className={cn(bouncingDotsVariant({ messagePlacement }))}>
      <div className={cn("flex gap-2 items-center justify-center")}>
        {Array(dots)
          .fill(undefined)
          .map((_, index) => (
            <motion.div
              key={index}
              className={cn("w-2.5 h-2.5 bg-amber-500 dark:bg-[#f4b223] rounded-full", className)}
              animate={{ y: [0, -12, 0] }}
              transition={{
                duration: 0.6,
                repeat: Number.POSITIVE_INFINITY,
                delay: index * 0.15,
                ease: "easeInOut",
              }}
              {...props}
            />
          ))}
      </div>
      {message && <div className="text-xs font-semibold text-amber-600 dark:text-[#f4b223]/90 font-mono mt-1">{message}</div>}
    </div>
  )
}
