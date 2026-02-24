import type { OnboardingStep } from "@/types/reading";

interface OnboardingWizardViewProps {
  step: OnboardingStep;
  children: Record<OnboardingStep, React.ReactNode>;
}

export function OnboardingWizardView({
  step,
  children,
}: OnboardingWizardViewProps) {
  return (
    <div className="relative min-h-dvh overflow-hidden">
      {children[step]}
    </div>
  );
}
