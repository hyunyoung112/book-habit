import { Button } from "@/components/ui/button";

interface TimerViewProps {
  remainingSeconds: number;
  progress: number;
  isPaused: boolean;
  encouragement: string;
  onPause: () => void;
  onResume: () => void;
}

export function TimerView({
  remainingSeconds,
  progress,
  isPaused,
  encouragement,
  onPause,
  onResume,
}: TimerViewProps) {
  const minutes = Math.floor(remainingSeconds / 60);
  const seconds = remainingSeconds % 60;
  const timeDisplay = `${minutes}:${seconds.toString().padStart(2, "0")}`;
  const lines = encouragement.split("\n");

  return (
    <div className="dark flex min-h-dvh flex-col items-center justify-between bg-[#0D1117] px-6 pb-8 pt-20">
      {/* Timer Display */}
      <div className="flex flex-1 flex-col items-center justify-center">
        <p className="text-6xl font-bold text-white">{timeDisplay}</p>
        <p className="mt-2 text-sm text-[#8B949E]">남은 시간</p>

        {/* Progress Bar */}
        <div className="mt-6 h-2 w-48 overflow-hidden rounded-full bg-[#21262D]">
          <div
            className="h-full rounded-full bg-[#0064FF] transition-all duration-1000 ease-linear"
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* Encouragement */}
        <div className="mt-12 text-center">
          {lines.map((line, i) => {
            const isHighlighted =
              line.includes("독서가의 시작") || line.includes("성장");
            return (
              <p
                key={i}
                className={`text-sm leading-relaxed ${
                  isHighlighted
                    ? "font-bold text-[#0064FF]"
                    : "text-[#8B949E]"
                }`}
              >
                {line}
              </p>
            );
          })}
        </div>

        {/* Pause / Resume */}
        <div className="mt-8">
          {isPaused ? (
            <Button
              variant="outline"
              className="rounded-[20px] border-[#30363D] bg-transparent text-white hover:bg-[#21262D]"
              onClick={onResume}
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="white"
                className="mr-2"
              >
                <polygon points="5 3 19 12 5 21 5 3" />
              </svg>
              이어서 읽기
            </Button>
          ) : (
            <Button
              variant="outline"
              className="rounded-[20px] border-[#30363D] bg-transparent text-white hover:bg-[#21262D]"
              onClick={onPause}
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                strokeWidth="2"
                className="mr-2"
              >
                <rect x="6" y="4" width="4" height="16" />
                <rect x="14" y="4" width="4" height="16" />
              </svg>
              일시 정지
            </Button>
          )}
        </div>
      </div>

      <p className="text-xs text-[#8B949E]">
        오늘 자정 전까지만 1분을 채우면 성공입니다.
      </p>
    </div>
  );
}
