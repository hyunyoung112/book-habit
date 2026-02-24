"use server";

export async function sendDeclaration(userName: string) {
  // TODO: GA4 이벤트 트래킹 또는 API 연동 시 교체
  console.log("🎯 정체성 선언 완료:", userName);
  return { success: true };
}

export async function confirmPartner(partnerName: string) {
  // TODO: GA4 이벤트 트래킹 또는 API 연동 시 교체
  console.log("📱 실패 알림 파트너 확정:", partnerName);
  return { success: true };
}
