import React, { ReactNode } from "react";
interface Ibutton {
  children: ReactNode;
  type?: "button" | "submit" | "reset";
  classname: string;
}
export default function ButtonAuth({ children, type = "button" }: Ibutton) {
  return (
    <button
      type={type}
      className="rounded-full text-[14px] font-semibold tracking-[0.28px]"
    >
      {children}
    </button>
  );
}
