import React, { ComponentPropsWithoutRef, CSSProperties } from "react";

import { cn } from "@/lib/utils";

interface RippleProps extends ComponentPropsWithoutRef<"div"> {
  mainCircleSize?: number;
  numCircles?: number;
  colors?: string[];
}

export const Ripple = React.memo(function Ripple({
  mainCircleSize = 210,
  numCircles = 8,
  colors = [
    "#8B0000", // Dark Red
    "#006400", // Dark Green
    "#00008B", // Dark Blue
    "#FF8C00", // Dark Orange
    "#FFD700", // Gold Yellow
    "#4B0082", // Indigo
    "#800000", // Maroon
    "#2F4F4F", // Dark Slate Gray
  ],
  className,
  ...props
}: RippleProps) {
  return (
    <div
      className={cn(
        "pointer-events-none absolute inset-0 select-none overflow-hidden", // Added overflow-hidden
        className,
      )}
      {...props}
    >
      {Array.from({ length: numCircles }, (_, i) => {
        const size = mainCircleSize + i * 200;
        const animationDelay = `${i * 0.06}s`;
        const borderStyle = i === numCircles - 1 ? "dashed" : "solid";
        const color = colors[i % colors.length];

        return (
          <div
            key={i}
            className="absolute animate-ripple rounded-full border"
            style={
              {
                "--i": i,
                width: `${size}px`,
                height: `${size}px`,
                opacity: 1,
                animationDelay,
                borderStyle,
                borderWidth: "2px", // thoda mota border
                borderColor: color,
                backgroundColor: "transparent", // NO fill
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%) scale(1)",
              } as CSSProperties
            }
          />
        );
      })}
    </div>
  );
});

Ripple.displayName = "Ripple";
