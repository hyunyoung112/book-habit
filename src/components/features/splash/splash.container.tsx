"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { useUserStore } from "@/stores";
import { subscribeEmail } from "./splash.action";
import { SplashView } from "./splash";

export function SplashContainer() {
  const router = useRouter();
  const isOnboarded = useUserStore((s) => s.isOnboarded);
  const [email, setEmail] = useState("");

  // Already onboarded → go to home
  if (isOnboarded) {
    router.replace("/home");
    return null;
  }

  const handleSubscribe = async () => {
    if (!email.trim()) {
      toast.error("이메일을 입력해주세요.");
      return;
    }
    console.log("📧 이메일 구독 시도됨:", email);
    await subscribeEmail(email);
    toast.success("소식 구독이 완료되었어요!");
    setEmail("");
  };

  const handleStart = () => {
    router.push("/onboarding");
  };

  return (
    <SplashView
      email={email}
      onEmailChange={setEmail}
      onSubscribe={handleSubscribe}
      onStart={handleStart}
    />
  );
}
