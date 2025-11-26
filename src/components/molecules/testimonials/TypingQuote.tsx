import React, { useEffect, useState } from "react";

interface TypingQuoteBrushProps {
  text: string;
  className?: string;
  speed?: number;
  startDelay?: number;
  showBrush?: boolean;
}

export const TypingQuote = ({
  text,
  className = "",
  speed = 45,
  startDelay = 300,
  showBrush = true,
}: TypingQuoteBrushProps) => {
  const [displayed, setDisplayed] = useState("");

  useEffect(() => {
    let mounted = true;
    let i = 0;
    let timer: ReturnType<typeof setTimeout>;

    const start = () => {
      const tick = () => {
        if (!mounted) return;
        if (i < text.length) {
          setDisplayed((prev) => prev + text.charAt(i));
          i += 1;
          timer = setTimeout(tick, speed);
        }
      };
      tick();
    };

    const startTimer = setTimeout(start, startDelay);
    return () => {
      mounted = false;
      clearTimeout(startTimer);
      clearTimeout(timer);
    };
  }, [text, speed, startDelay]);

  return (
    <p className={`relative inline-block ${className}`}>
      {displayed.split("").map((char, index) => (
        <span
          key={index}
          className="
            inline-block opacity-0
            animate-[fadeInBrush_0.35s_ease-out_forwards]
          "
          style={{ animationDelay: `${index * 0.04}s` }}
        >
          {char === " " ? "\u00A0" : char}
        </span>
      ))}

      {showBrush && (
        <span
          className="
            inline-block w-3 h-3 rounded-full ml-1
            bg-primario/60 blur-[2px]
            animate-[brushGlow_0.9s_ease-in-out_infinite]
          "
        />
      )}

      <style>
        {`
        @keyframes fadeInBrush {
          0% {
            opacity: 0;
            transform: translateX(-4px) scale(0.98) rotate(-1deg);
            filter: blur(2px);
          }
          60% {
            opacity: 0.9;
          }
          100% {
            opacity: 1;
            transform: translateX(0) scale(1) rotate(0deg);
            filter: blur(0px);
          }
        }

        @keyframes brushGlow {
          0%, 100% {
            transform: scale(1);
            opacity: 0.9;
          }
          50% {
            transform: scale(1.35);
            opacity: 0.5;
          }
        }
      `}
      </style>
    </p>
  );
};
