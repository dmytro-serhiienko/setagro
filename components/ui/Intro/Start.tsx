"use client";
import { useState } from "react";
import IntroLoader from "@/components/ui/Intro/Intro";

export default function IntroWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const [done, setDone] = useState(false);
  return (
    <>
      {!done && <IntroLoader onComplete={() => setDone(true)} />}
      {children}
    </>
  );
}
