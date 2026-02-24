"use server";

export async function saveReadingLog(data: {
  bookTitle: string;
  lastPage: number;
}) {
  // TODO: GA4 이벤트 트래킹 또는 API 연동 시 교체
  console.log("📖 독서 기록 저장:", data);
  return { success: true };
}

export async function sendFailureNotification(partnerName: string) {
  // TODO: 실제 SMS/카카오톡 API 연동 시 교체
  console.log("⚠️ 실패 알림 발송 시도됨:", partnerName);
  return { success: true };
}
