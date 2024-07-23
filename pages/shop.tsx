"use client";

import { useRouter } from "next/router";
import { useEffect } from "react";

type Props = {};

export default function Shop({}: Props) {
  const router = useRouter();

  useEffect(() => {
    router.push("https://rysanovshop.com/");
  }, []);

  return (
    <div className="h-screen w-screen bg-white absolute top-0 left-0 z-50"></div>
  );
}
