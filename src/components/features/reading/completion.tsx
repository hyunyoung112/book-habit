import { Button } from "@/components/ui/button";

interface CompletionViewProps {
  bookTitle: string;
  lastPage: number;
  onViewRecords: () => void;
}

export function CompletionView({
  bookTitle,
  lastPage,
  onViewRecords,
}: CompletionViewProps) {
  return (
    <div className="flex min-h-dvh flex-col items-center justify-between bg-primary px-6 pb-8 pt-20">
      <div className="flex flex-1 flex-col items-center justify-center">
        {/* Star Icon */}
        <div className="flex size-16 items-center justify-center rounded-full bg-white/20">
          <svg
            width="32"
            height="32"
            viewBox="0 0 24 24"
            fill="white"
            stroke="none"
          >
            <path d="M12 2l2.4 7.4h7.6l-6 4.6 2.3 7-6.3-4.6-6.3 4.6 2.3-7-6-4.6h7.6z" />
          </svg>
        </div>

        <h1 className="mt-8 text-center text-[28px] font-bold leading-snug text-white">
          어제보다
          <br />
          1% 더 성장했습니다.
        </h1>
        <p className="mt-3 text-center text-base text-white/70">
          이 성장은 당신을
          <br />
          예측 불가능한 사람으로 만듭니다.
        </p>

        {/* Today's Book Card */}
        <div className="mt-10 w-full rounded-[20px] bg-white/15 px-6 py-5">
          <p className="text-sm text-white/70">오늘 읽은 책</p>
          <p className="mt-1 text-xl font-bold text-white">{bookTitle}</p>
          <p className="mt-0.5 text-sm text-white/70">{lastPage}페이지까지</p>
        </div>
      </div>

      <Button
        variant="outline"
        className="w-full border-white bg-transparent text-white hover:bg-white/10"
        onClick={onViewRecords}
      >
        기록 확인하기
      </Button>
    </div>
  );
}
