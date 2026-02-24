import { Button } from "@/components/ui/button";

interface ReadingPrepViewProps {
  onReady: () => void;
}

export function ReadingPrepView({ onReady }: ReadingPrepViewProps) {
  return (
    <div className="flex min-h-dvh flex-col items-center justify-between px-6 pb-8 pt-20">
      <div className="flex flex-1 flex-col items-center justify-center">
        {/* Book Icon */}
        <div className="flex size-20 items-center justify-center rounded-[20px] bg-toss-blue-light">
          <svg
            width="40"
            height="40"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#0064FF"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
            <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
          </svg>
        </div>

        <h1 className="mt-8 text-[28px] font-bold text-foreground">
          책을 펼치셨나요?
        </h1>
        <p className="mt-3 text-center text-base text-muted-foreground">
          이제 딱 <span className="font-bold text-primary">1분</span>만
          <br />
          다른 세상에 다녀오세요.
        </p>
      </div>

      <Button className="w-full" onClick={onReady}>
        준비 완료
      </Button>
    </div>
  );
}
