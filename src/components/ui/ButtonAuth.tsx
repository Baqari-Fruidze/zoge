import React, { ReactNode } from "react";
interface Ibutton {
  children: ReactNode;
  type?: "button" | "submit" | "reset";
  className: string;
}
export default function ButtonAuth({
  children,
  type = "button",
  className = "",
}: Ibutton) {
  return (
    <button
      type={type}
      className={`rounded-full text-[14px] font-semibold font-sans tracking-[0.28px] py-[12px] xl:px-[22px] ${className}`}
    >
      {children}
    </button>
  );
}
