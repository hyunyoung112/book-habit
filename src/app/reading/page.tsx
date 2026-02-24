import { Providers } from "../providers";
import { ReadingSessionContainer } from "@/components/features/reading/reading-session.container";

export default function ReadingPage() {
  return (
    <Providers>
      <ReadingSessionContainer />
    </Providers>
  );
}
