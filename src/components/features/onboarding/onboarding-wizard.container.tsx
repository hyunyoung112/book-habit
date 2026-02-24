"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useUIStore, useUserStore } from "@/stores";
import { OnboardingWizardView } from "./onboarding-wizard";
import { DeclarationContainer } from "./declaration.container";
import { PartnerSelectContainer } from "./partner-select.container";
import { FailurePreviewContainer } from "./failure-preview.container";

export function OnboardingWizardContainer() {
  const router = useRouter();
  const isOnboarded = useUserStore((s) => s.isOnboarded);
  const step = useUIStore((s) => s.onboardingStep);
  const resetOnboarding = useUIStore((s) => s.resetOnboarding);

  useEffect(() => {
    if (isOnboarded) {
      router.replace("/home");
    }
    return () => {
      resetOnboarding();
    };
  }, [isOnboarded, router, resetOnboarding]);

  if (isOnboarded) return null;

  return (
    <OnboardingWizardView step={step}>
      {{
        declaration: <DeclarationContainer />,
        partner: <PartnerSelectContainer />,
        "failure-preview": <FailurePreviewContainer />,
      }}
    </OnboardingWizardView>
  );
}
