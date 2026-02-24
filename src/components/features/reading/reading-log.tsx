import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface ReadingLogViewProps {
  bookTitle: string;
  lastPage: string;
  errors: { bookTitle?: string; lastPage?: string };
  onBookTitleChange: (value: string) => void;
  onLastPageChange: (value: string) => void;
  onSubmit: () => void;
}

export function ReadingLogView({
  bookTitle,
  lastPage,
  errors,
  onBookTitleChange,
  onLastPageChange,
  onSubmit,
}: ReadingLogViewProps) {
  return (
    <div className="flex min-h-dvh flex-col justify-between px-6 pb-8 pt-12">
      <div>
        <h1 className="text-[28px] font-bold text-foreground">
          오늘의 독서 흔적
        </h1>
        <p className="mt-1 text-base text-muted-foreground">
          읽은 책과 페이지를 기록해주세요.
        </p>

        <div className="mt-8 flex flex-col gap-5">
          {/* Book Title */}
          <div>
            <label className="mb-1.5 block text-sm font-medium text-foreground">
              책 제목
            </label>
            <Input
              placeholder="어떤 책을 읽으셨나요?"
              value={bookTitle}
              onChange={(e) => onBookTitleChange(e.target.value)}
            />
            {errors.bookTitle && (
              <p className="mt-1 text-xs text-destructive">
                {errors.bookTitle}
              </p>
            )}
          </div>

          {/* Last Page */}
          <div>
            <label className="mb-1.5 block text-sm font-medium text-foreground">
              마지막으로 읽은 페이지
            </label>
            <Input
              type="number"
              placeholder="페이지 번호"
              value={lastPage}
              onChange={(e) => onLastPageChange(e.target.value)}
            />
            {errors.lastPage && (
              <p className="mt-1 text-xs text-destructive">
                {errors.lastPage}
              </p>
            )}
          </div>
        </div>
      </div>

      <Button className="w-full" onClick={onSubmit}>
        오늘의 독서 흔적 남기기
      </Button>
    </div>
  );
}
