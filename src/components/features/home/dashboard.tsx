import { Button } from "@/components/ui/button";

interface DashboardViewProps {
  userName: string;
  currentDay: number;
  onStartReading: () => void;
  onViewJourney: () => void;
}

export function DashboardView({
  userName,
  currentDay,
  onStartReading,
  onViewJourney,
}: DashboardViewProps) {
  return (
    <div className="flex min-h-dvh flex-col px-6 pb-8 pt-12">
      {/* Greeting */}
      <div>
        <p className="text-[28px] font-bold leading-tight text-foreground">
          독서가 <span className="text-primary">{userName}</span>님,
        </p>
        <p className="text-[28px] font-bold text-foreground">안녕하세요.</p>
      </div>

      {/* Today's Reading CTA */}
      <div className="mt-8">
        <Button className="h-16 w-full text-lg" onClick={onStartReading}>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            className="mr-1"
          >
            <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
            <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
          </svg>
          오늘의 독서
        </Button>
      </div>

      {/* 30-Day Journey Card */}
      <button
        onClick={onViewJourney}
        className="mt-4 flex w-full items-center justify-between rounded-[20px] bg-surface p-5 text-left transition-colors hover:bg-muted"
      >
        <div className="flex items-center gap-3">
          <div className="flex size-10 items-center justify-center rounded-full bg-toss-blue-light">
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#0064FF"
              strokeWidth="2"
            >
              <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
              <line x1="16" y1="2" x2="16" y2="6" />
              <line x1="8" y1="2" x2="8" y2="6" />
              <line x1="3" y1="10" x2="21" y2="10" />
            </svg>
          </div>
          <div>
            <p className="text-base font-semibold text-foreground">
              30일의 여정
            </p>
            <p className="text-sm text-muted-foreground">
              Day {currentDay}/30
            </p>
          </div>
        </div>
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          className="text-muted-foreground"
        >
          <polyline points="9 18 15 12 9 6" />
        </svg>
      </button>
    </div>
  );
}
