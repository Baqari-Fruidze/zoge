"use client";

import { usePathname } from "next/navigation";
import Footer from "./Footer";
export default function FooterWrapper() {
  const pathname = usePathname();
  const isAuthRoute = pathname?.includes('/register') || pathname?.includes('/signIn');
  if (isAuthRoute) {
    return null;
  }
  return <Footer />;
}
