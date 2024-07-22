"use client";

import { useRouter } from "next/router";
import { useEffect } from "react";

type Props = {};

export default function Shop({}: Props) {
  const router = useRouter();

  useEffect(() => {
    router.push("https://rysanovshop.com/");
  }, []);

  return <div className="min-h-screen">Redirecting...</div>;
}
