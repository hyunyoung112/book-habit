"use client";

import { useUIStore } from "@/stores";
import { sendDeclaration } from "./onboarding.action";
import { DeclarationView } from "./declaration";

export function DeclarationContainer() {
  const setOnboardingStep = useUIStore((s) => s.setOnboardingStep);

  const handleDeclare = async () => {
    console.log("🎯 정체성 선언 완료");
    await sendDeclaration("user");
    setOnboardingStep("partner");
  };

  return <DeclarationView onDeclare={handleDeclare} />;
}
