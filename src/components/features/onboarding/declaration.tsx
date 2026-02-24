import { Button } from "@/components/ui/button";

interface DeclarationViewProps {
  onDeclare: () => void;
}

export function DeclarationView({ onDeclare }: DeclarationViewProps) {
  return (
    <div className="flex min-h-dvh flex-col justify-between px-6 pb-8 pt-20">
      <div className="flex flex-1 flex-col items-center justify-center">
        <p className="text-center text-[28px] font-bold leading-snug text-foreground">
          나는 퇴근 후
          <br />
          숏폼을 보는 사람이 아닌
          <br />
          <span className="text-primary">책 읽는 사람</span>입니다.
        </p>
      </div>

      <Button className="w-full" onClick={onDeclare}>
        독서가로 살기 선언
      </Button>
    </div>
  );
}
