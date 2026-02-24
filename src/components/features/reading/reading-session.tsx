import type { ReadingSessionStep } from "@/types/reading";

interface ReadingSessionViewProps {
  step: ReadingSessionStep;
  children: Record<ReadingSessionStep, React.ReactNode>;
}

export function ReadingSessionView({
  step,
  children,
}: ReadingSessionViewProps) {
  return (
    <div className="relative min-h-dvh overflow-hidden">
      {children[step]}
    </div>
  );
}
