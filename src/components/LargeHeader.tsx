import React from "react";
import Image from "next/image";
import Info from "./forHeader/Info";
import Auth from "./forHeader/Auth";

export default function LargeHeader() {
  return (
    <div className={`px-[90px] py-[22px] flex justify-between items-center`}>
      <div className={`flex gap-[100px] items-center`}>
        <Image src={"/logo.png"} width={50} height={50} alt="logo" />
        <Info />
      </div>
      <Auth />
    </div>
  );
}
