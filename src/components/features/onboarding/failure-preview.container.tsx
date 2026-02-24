"use client";

import { useRouter } from "next/navigation";
import { useUserStore, useReadingStore } from "@/stores";
import { confirmPartner } from "./onboarding.action";
import { FailurePreviewView } from "./failure-preview";

export function FailurePreviewContainer() {
  const router = useRouter();
  const completeOnboarding = useUserStore((s) => s.completeOnboarding);
  const getSelectedPartner = useReadingStore((s) => s.getSelectedPartner);
  const startJourney = useReadingStore((s) => s.startJourney);

  const partner = getSelectedPartner();
  const partnerName = partner?.name ?? "파트너";

  const handleConfirm = async () => {
    console.log("📱 실패 알림 파트너 확정:", partnerName);
    await confirmPartner(partnerName);
    completeOnboarding();
    startJourney();
    router.replace("/home");
  };

  return <FailurePreviewView partnerName={partnerName} onConfirm={handleConfirm} />;
}
