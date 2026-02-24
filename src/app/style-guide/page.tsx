import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

export default function StyleGuidePage() {
  return (
    <div className="flex flex-col gap-10 p-6 pb-20">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-foreground">
          Toss Design System
        </h1>
        <p className="mt-1 text-muted-foreground">
          독서 습관 만들기 - 디자인 가이드
        </p>
      </div>

      {/* Color Palette */}
      <section>
        <h2 className="mb-4 text-lg font-bold">Color Palette</h2>
        <div className="grid grid-cols-2 gap-3">
          <ColorSwatch color="bg-primary" label="Primary" hex="#0064FF" />
          <ColorSwatch
            color="bg-toss-blue-dark"
            label="Primary Dark"
            hex="#004FCC"
          />
          <ColorSwatch color="bg-background" label="Background" hex="#FFFFFF" border />
          <ColorSwatch color="bg-surface" label="Surface" hex="#F4F4F5" />
          <ColorSwatch
            color="bg-toss-blue-light"
            label="Accent"
            hex="#E8F0FE"
          />
          <ColorSwatch color="bg-foreground" label="Text" hex="#191F28" />
          <ColorSwatch
            color="bg-muted-foreground"
            label="Text Secondary"
            hex="#8B95A1"
          />
          <ColorSwatch color="bg-destructive" label="Destructive" hex="#FF4747" />
        </div>
      </section>

      {/* Typography */}
      <section>
        <h2 className="mb-4 text-lg font-bold">Typography</h2>
        <div className="flex flex-col gap-4">
          <div>
            <p className="text-xs text-muted-foreground">Title - 28px Bold</p>
            <p className="text-[28px] font-bold leading-tight">
              독서가 현영님,
              <br />
              안녕하세요.
            </p>
          </div>
          <div>
            <p className="text-xs text-muted-foreground">Heading - 24px Bold</p>
            <p className="text-2xl font-bold">30일의 여정</p>
          </div>
          <div>
            <p className="text-xs text-muted-foreground">
              Body Accent - 16px Bold Blue
            </p>
            <p className="text-base">
              나는 <span className="font-bold text-primary">책 읽는 사람</span>
              입니다.
            </p>
          </div>
          <div>
            <p className="text-xs text-muted-foreground">
              Body - 16px Regular
            </p>
            <p className="text-base text-foreground">
              선언하기로 독서 습관을 만들어줍니다.
            </p>
          </div>
          <div>
            <p className="text-xs text-muted-foreground">
              Caption - 14px Muted
            </p>
            <p className="text-sm text-muted-foreground">
              매일 자정 기준으로 확인됩니다.
            </p>
          </div>
        </div>
      </section>

      {/* Buttons */}
      <section>
        <h2 className="mb-4 text-lg font-bold">Buttons</h2>
        <div className="flex flex-col gap-3">
          <Button className="w-full">바로 시작하기</Button>
          <Button variant="secondary" className="w-full">
            소식 받기
          </Button>
          <Button variant="outline" className="w-full">
            돌아가기
          </Button>
          <Button variant="ghost" className="w-full">
            건너뛰기
          </Button>
          <Button disabled className="w-full">
            비활성 버튼
          </Button>
          <div className="flex gap-2">
            <Button size="sm">Small</Button>
            <Button size="default">Default</Button>
            <Button size="lg">Large</Button>
          </div>
        </div>
      </section>

      {/* Inputs */}
      <section>
        <h2 className="mb-4 text-lg font-bold">Inputs</h2>
        <div className="flex flex-col gap-3">
          <div>
            <label className="mb-1.5 block text-sm font-medium">
              이메일 주소
            </label>
            <Input placeholder="이메일 주소를 입력해주세요" />
          </div>
          <div>
            <label className="mb-1.5 block text-sm font-medium">책 제목</label>
            <Input placeholder="어떤 책을 읽으셨나요?" />
          </div>
        </div>
      </section>

      {/* Cards */}
      <section>
        <h2 className="mb-4 text-lg font-bold">Cards</h2>
        <div className="flex flex-col gap-3">
          <Card className="rounded-[20px]">
            <CardHeader className="pb-2">
              <CardTitle className="text-base">30일의 여정</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">Day 1/30</p>
            </CardContent>
          </Card>
          <Card className="rounded-[20px] bg-surface border-none">
            <CardContent className="flex items-center gap-3 p-4">
              <div className="flex size-10 items-center justify-center rounded-full bg-toss-blue-light">
                <span className="text-lg">📖</span>
              </div>
              <div>
                <p className="font-semibold">엄마</p>
                <p className="text-sm text-muted-foreground">010-1234-5678</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Progress */}
      <section>
        <h2 className="mb-4 text-lg font-bold">Progress</h2>
        <div className="flex flex-col gap-4">
          <div>
            <p className="mb-2 text-sm text-muted-foreground">Timer - 80%</p>
            <Progress value={80} className="h-2" />
          </div>
          <div>
            <p className="mb-2 text-sm text-muted-foreground">Timer - 20%</p>
            <Progress value={20} className="h-2" />
          </div>
        </div>
      </section>

      {/* Radius Guide */}
      <section>
        <h2 className="mb-4 text-lg font-bold">Border Radius</h2>
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-4">
            <div className="size-16 rounded-[12px] bg-surface" />
            <span className="text-sm text-muted-foreground">
              12px - Input
            </span>
          </div>
          <div className="flex items-center gap-4">
            <div className="size-16 rounded-[16px] bg-surface" />
            <span className="text-sm text-muted-foreground">
              16px - Small Card
            </span>
          </div>
          <div className="flex items-center gap-4">
            <div className="size-16 rounded-[20px] bg-surface" />
            <span className="text-sm text-muted-foreground">
              20px - Card
            </span>
          </div>
          <div className="flex items-center gap-4">
            <div className="size-16 rounded-[24px] bg-primary" />
            <span className="text-sm text-muted-foreground">
              24px - Button
            </span>
          </div>
          <div className="flex items-center gap-4">
            <div className="size-16 rounded-full bg-primary" />
            <span className="text-sm text-muted-foreground">
              Full - Icon Button
            </span>
          </div>
        </div>
      </section>

      {/* Dark Theme Preview */}
      <section>
        <h2 className="mb-4 text-lg font-bold">Dark Theme (Timer Only)</h2>
        <div className="dark rounded-[20px] bg-[#0D1117] p-6">
          <p className="text-center text-5xl font-bold text-white">0:48</p>
          <p className="mt-2 text-center text-sm text-[#8B949E]">남은 시간</p>
          <div className="mt-4 h-2 w-full overflow-hidden rounded-full bg-[#21262D]">
            <div className="h-full w-[80%] rounded-full bg-primary" />
          </div>
          <p className="mt-6 text-center text-sm text-[#8B949E]">
            그게 <span className="font-bold text-primary">독서가의 시작</span>
            입니다.
          </p>
        </div>
      </section>
    </div>
  );
}

function ColorSwatch({
  color,
  label,
  hex,
  border,
}: {
  color: string;
  label: string;
  hex: string;
  border?: boolean;
}) {
  return (
    <div className="flex items-center gap-3">
      <div
        className={`size-12 rounded-[12px] ${color} ${border ? "border border-border" : ""}`}
      />
      <div>
        <p className="text-sm font-medium">{label}</p>
        <p className="text-xs text-muted-foreground">{hex}</p>
      </div>
    </div>
  );
}
