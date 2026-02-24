import { Button } from "@/components/ui/button";

interface FailurePreviewViewProps {
  partnerName: string;
  onConfirm: () => void;
}

export function FailurePreviewView({
  partnerName,
  onConfirm,
}: FailurePreviewViewProps) {
  return (
    <div className="flex min-h-dvh flex-col justify-between px-6 pb-8 pt-12">
      <div>
        {/* Warning Badge */}
        <div className="flex items-center gap-1.5 text-sm text-destructive">
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <circle cx="12" cy="12" r="10" />
            <line x1="12" y1="8" x2="12" y2="12" />
            <line x1="12" y1="16" x2="12.01" y2="16" />
          </svg>
          <span>실패 시 자동 전송</span>
        </div>

        {/* Main Text */}
        <div className="mt-4">
          <h1 className="text-[28px] font-bold leading-snug text-foreground">
            자정까지 1분을 채우지 못하면
            <br />
            <span className="text-primary">{partnerName}</span>에게
            <br />이 메시지가 전송됩니다.
          </h1>
        </div>

        {/* Message Preview Card */}
        <div className="mt-10 rounded-[20px] bg-surface p-5">
          <div className="flex items-center gap-2">
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#0064FF"
              strokeWidth="2"
            >
              <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
              <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
            </svg>
            <span className="text-sm font-semibold text-foreground">
              독서 습관 만들기
            </span>
          </div>
          <div className="mt-3 rounded-[12px] bg-background px-4 py-3">
            <p className="text-sm text-muted-foreground">
              저는 오늘 독서를 실패했습니다! 😳
            </p>
          </div>
        </div>

        {/* Info */}
        <p className="mt-6 text-center text-sm text-muted-foreground">
          매일 자정 기준으로 확인됩니다.
        </p>
      </div>

      <Button className="w-full" onClick={onConfirm}>
        확정 및 시작하기
      </Button>
    </div>
  );
}
