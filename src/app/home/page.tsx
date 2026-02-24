import { Providers } from "../providers";
import { DashboardContainer } from "@/components/features/home/dashboard.container";

export default function HomePage() {
  return (
    <Providers>
      <DashboardContainer />
    </Providers>
  );
}
