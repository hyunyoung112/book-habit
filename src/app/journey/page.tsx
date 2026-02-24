import { Providers } from "../providers";
import { JourneyMapContainer } from "@/components/features/journey/journey-map.container";

export default function JourneyPage() {
  return (
    <Providers>
      <JourneyMapContainer />
    </Providers>
  );
}
