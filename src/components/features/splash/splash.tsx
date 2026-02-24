import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface SplashViewProps {
  email: string;
  onEmailChange: (value: string) => void;
  onSubscribe: () => void;
  onStart: () => void;
}

export function SplashView({
  email,
  onEmailChange,
  onSubscribe,
  onStart,
}: SplashViewProps) {
  return (
    <div className="flex min-h-dvh flex-col items-center justify-between px-6 pb-8 pt-16">
      {/* Hero Section */}
      <div className="flex flex-col items-center">
        {/* App Icon */}
        <div className="flex size-20 items-center justify-center rounded-[20px] bg-primary">
          <svg
            width="40"
            height="40"
            viewBox="0 0 24 24"
            fill="none"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
            <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
          </svg>
        </div>

        {/* Title */}
        <h1 className="mt-6 text-[28px] font-bold text-foreground">
          독서 습관 만들기
        </h1>
        <p className="mt-2 text-base text-muted-foreground">
          선언하기로 독서 습관을 만들어줍니다.
        </p>

        {/* Value Props */}
        <div className="mt-10 flex w-full flex-col gap-5">
          <ValueProp emoji="📊" text="하루 1분, 작은 습관부터 시작해요" />
          <ValueProp emoji="🎯" text="30일 여정으로 독서가가 되어보세요" />
          <ValueProp emoji="💪" text="정체성 선언으로 의지를 강화해요" />
        </div>
      </div>

      {/* Bottom Section */}
      <div className="flex w-full flex-col gap-3">
        <Input
          type="email"
          placeholder="이메일 주소를 입력해주세요"
          value={email}
          onChange={(e) => onEmailChange(e.target.value)}
        />
        <Button className="w-full" onClick={onSubscribe}>
          소식 받기
        </Button>
        <button
          onClick={onStart}
          className="w-full py-3 text-base font-semibold text-foreground transition-colors hover:text-primary"
        >
          바로 시작하기
        </button>
      </div>
    </div>
  );
}

function ValueProp({ emoji, text }: { emoji: string; text: string }) {
  return (
    <div className="flex items-center gap-4">
      <div className="flex size-10 items-center justify-center rounded-full bg-toss-blue-light">
        <span className="text-lg">{emoji}</span>
      </div>
      <p className="text-base text-foreground">{text}</p>
    </div>
  );
}
