interface SkeletonProps {
  className?: string;
  variant?: "text" | "rect" | "circle";
}

export const Skeleton = ({ className = "", variant = "rect" }: SkeletonProps) => {
  const variantClasses = {
    text: "h-4 w-full rounded",
    rect: "h-32 w-full rounded-xl",
    circle: "h-12 w-12 rounded-full",
  };

  return (
    <div
      className={`
        animate-pulse bg-gray-200 
        ${variantClasses[variant]} 
        ${className}
      `}
    />
  );
};
