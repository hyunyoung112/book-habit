import type { Contact } from "@/types/contact";

export const TIMER_DURATION_SECONDS = 60;

export const DEFAULT_CONTACTS: Contact[] = [
  { id: "1", name: "엄마", phone: "010-1234-5678" },
  { id: "2", name: "베프 지영", phone: "010-2345-6789" },
  { id: "3", name: "동생", phone: "010-3456-7890" },
  { id: "4", name: "회사 동료 민수", phone: "010-4567-8901" },
  { id: "5", name: "대학 친구 서연", phone: "010-5678-9012" },
];

export const ENCOURAGEMENT_MESSAGES = [
  "글이 안 읽힌다구요?\n생각만 해도 괜찮습니다.\n그게 독서가의 시작입니다.",
  "한 줄만 읽어도 충분합니다.\n어제의 당신보다 성장한 거예요.",
  "지금 이 순간,\n당신은 독서가입니다.",
  "페이지를 넘기지 않아도 괜찮아요.\n책을 펼친 것만으로 대단합니다.",
] as const;

export const TOTAL_DAYS = 30;
