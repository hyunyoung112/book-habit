"use client";

import { useRouter } from "next/navigation";
import { useUserStore, useReadingStore } from "@/stores";
import { DashboardView } from "./dashboard";

export function DashboardContainer() {
  const router = useRouter();
  const name = useUserStore((s) => s.name);
  const isOnboarded = useUserStore((s) => s.isOnboarded);
  const getCurrentDay = useReadingStore((s) => s.getCurrentDay);

  if (!isOnboarded) {
    router.replace("/");
    return null;
  }

  const displayName = name || "현영";

  return (
    <DashboardView
      userName={displayName}
      currentDay={getCurrentDay()}
      onStartReading={() => router.push("/reading")}
      onViewJourney={() => router.push("/journey")}
    />
  );
}
