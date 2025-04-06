import React, { ReactNode } from "react";

interface Ispan {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
}
export default function FooterSpan({
  children,
  className = "",
  onClick,
}: Ispan) {
  return (
    <span
      className={`font-sans text-[14px] font-normal leading-[150%] text-[#70777D] cursor-pointer ${className}`}
      onClick={onClick}
    >
      {children}
    </span>
  );
}
