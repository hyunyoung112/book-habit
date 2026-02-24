import { Button } from "@/components/ui/button";
import type { Contact } from "@/types/contact";

interface PartnerSelectViewProps {
  contacts: Contact[];
  selectedId: string | null;
  editingId: string | null;
  editingName: string;
  onSelect: (id: string) => void;
  onEditStart: (contact: Contact) => void;
  onEditChange: (name: string) => void;
  onEditSave: () => void;
  onConfirm: () => void;
}

export function PartnerSelectView({
  contacts,
  selectedId,
  editingId,
  editingName,
  onSelect,
  onEditStart,
  onEditChange,
  onEditSave,
  onConfirm,
}: PartnerSelectViewProps) {
  return (
    <div className="flex min-h-dvh flex-col justify-between px-6 pb-8 pt-12">
      <div>
        <h1 className="text-[28px] font-bold leading-tight text-foreground">
          나의 정체성을 지켜줄
        </h1>
        <p className="mt-1 text-base text-muted-foreground">
          단 한 명을 선택해 주세요.
        </p>

        <div className="mt-8 flex flex-col gap-3">
          {contacts.map((contact) => (
            <button
              key={contact.id}
              onClick={() => onSelect(contact.id)}
              className={`flex w-full items-center gap-4 rounded-[16px] p-4 text-left transition-all ${
                selectedId === contact.id
                  ? "bg-toss-blue-light ring-2 ring-primary"
                  : "bg-surface"
              }`}
            >
              {/* Avatar */}
              <div className="flex size-10 shrink-0 items-center justify-center rounded-full bg-muted">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  className="text-muted-foreground"
                >
                  <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
                  <circle cx="12" cy="7" r="4" />
                </svg>
              </div>

              {/* Info */}
              <div className="flex-1">
                {editingId === contact.id ? (
                  <input
                    type="text"
                    value={editingName}
                    onChange={(e) => onEditChange(e.target.value)}
                    onBlur={onEditSave}
                    onKeyDown={(e) => e.key === "Enter" && onEditSave()}
                    autoFocus
                    className="w-full rounded-[8px] bg-background px-2 py-1 text-base font-semibold outline-none ring-2 ring-primary"
                  />
                ) : (
                  <p className="text-base font-semibold text-foreground">
                    {contact.name}
                  </p>
                )}
                <p className="text-sm text-muted-foreground">{contact.phone}</p>
              </div>

              {/* Edit button */}
              {editingId !== contact.id && (
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    onEditStart(contact);
                  }}
                  className="p-1 text-muted-foreground hover:text-foreground"
                  aria-label="이름 편집"
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z" />
                  </svg>
                </button>
              )}
            </button>
          ))}
        </div>
      </div>

      <Button
        className="w-full"
        onClick={onConfirm}
        disabled={!selectedId}
      >
        선택 완료
      </Button>
    </div>
  );
}
