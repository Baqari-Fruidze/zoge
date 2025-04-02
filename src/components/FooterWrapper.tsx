"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Footer from "./Footer";

export default function FooterWrapper() {
  const pathname = usePathname();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const isAuthRoute =
    pathname?.includes("/register") || pathname?.includes("/signIn");

  if (!isMounted) {
    return null;
  }

  if (isAuthRoute) {
    return null;
  }

  return <Footer />;
}
