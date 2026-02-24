import { Button } from "@/components/ui/button";
import type { DayStatus } from "@/types/reading";
import { TOTAL_DAYS } from "@/lib/constants";

interface JourneyMapViewProps {
  currentDay: number;
  successCount: number;
  dayStatuses: DayStatus[];
  onBack: () => void;
}

export function JourneyMapView({
  currentDay,
  successCount,
  dayStatuses,
  onBack,
}: JourneyMapViewProps) {
  return (
    <div className="flex min-h-dvh flex-col justify-between px-6 pb-8 pt-6">
      <div>
        {/* Header */}
        <button
          onClick={onBack}
          className="flex items-center gap-1 text-sm text-muted-foreground"
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <polyline points="15 18 9 12 15 6" />
          </svg>
          뒤로
        </button>

        <h1 className="mt-4 text-[28px] font-bold text-foreground">
          30일의 여정
        </h1>
        <p className="mt-1 text-base text-muted-foreground">
          {successCount}일 성공 / {TOTAL_DAYS}일
        </p>

        {/* Grid Calendar */}
        <div className="mt-6 grid grid-cols-5 gap-3">
          {dayStatuses.map((status, i) => {
            const day = i + 1;
            return (
              <div
                key={day}
                className={`flex size-14 items-center justify-center rounded-[12px] text-sm font-semibold ${getDayStyle(
                  status,
                  day,
                  currentDay
                )}`}
              >
                {day}
              </div>
            );
          })}
        </div>

        {/* Legend */}
        <div className="mt-6 flex items-center justify-center gap-6">
          <LegendItem color="bg-primary" label="성공" />
          <LegendItem color="bg-white border border-border" label="실패" />
          <LegendItem color="bg-muted" label="예정" />
        </div>

        {/* Encouragement */}
        <div className="mt-8 rounded-[20px] bg-surface p-5 text-center">
          <p className="text-base text-foreground">
            비어있는 칸도 당신의 여정 중 일부입니다.
          </p>
          <p className="mt-1 text-base text-foreground">
            내일 다시 채우면 됩니다.
          </p>
        </div>
      </div>

      <Button className="w-full" onClick={onBack}>
        돌아가기
      </Button>
    </div>
  );
}

function getDayStyle(
  status: DayStatus,
  day: number,
  currentDay: number
): string {
  if (status === "success") {
    return "bg-primary text-white";
  }
  if (status === "fail") {
    return "bg-white text-foreground border border-border";
  }
  // pending
  if (day === currentDay) {
    return "bg-muted text-foreground ring-2 ring-primary";
  }
  return "bg-muted text-muted-foreground";
}

function LegendItem({ color, label }: { color: string; label: string }) {
  return (
    <div className="flex items-center gap-2">
      <div className={`size-4 rounded-[4px] ${color}`} />
      <span className="text-sm text-muted-foreground">{label}</span>
    </div>
  );
}
