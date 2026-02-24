import { Providers } from "../providers";
import { OnboardingWizardContainer } from "@/components/features/onboarding/onboarding-wizard.container";

export default function OnboardingPage() {
  return (
    <Providers>
      <OnboardingWizardContainer />
    </Providers>
  );
}
