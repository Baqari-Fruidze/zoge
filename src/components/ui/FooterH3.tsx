import React, { ReactNode } from "react";
interface IH3 {
  className?: string;
  children: ReactNode;
}

export default function FooterH3({ children, className = "" }: IH3) {
  return (
    <h3
      className={`text-[16px] font-medium text-[#2D3142] font-sans ${className}`}
    >
      {children}
    </h3>
  );
}
