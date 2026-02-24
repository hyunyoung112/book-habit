"use server";

export async function subscribeEmail(email: string) {
  // TODO: GA4 이벤트 트래킹 또는 API 연동 시 교체
  console.log("📧 이메일 구독 시도됨:", email);
  return { success: true };
}
