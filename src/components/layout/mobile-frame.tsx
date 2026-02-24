import { cn } from "@/lib/utils";

interface MobileFrameProps {
  children: React.ReactNode;
  className?: string;
}

export function MobileFrame({ children, className }: MobileFrameProps) {
  return (
    <div className="flex min-h-dvh justify-center bg-[#F0F0F0]">
      <div
        className={cn(
          "relative w-full max-w-[430px] min-h-dvh bg-background shadow-xl",
          className
        )}
      >
        {children}
      </div>
    </div>
  );
}
