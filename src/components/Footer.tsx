import Image from "next/image";

import React from "react";
import Details from "./forFooter/Details";
import ContactUs from "./forFooter/ContactUs";
import SubscribeUs from "./forFooter/SubscribeUs";

export default function Footer() {
  return (
    <div className="main flex flex-col gap-[40px] px-[16px] py-[20px] xl:px-[90px] xl:py-[48px] bg-[#EDF3FF]">
      <div className="flex flex-col gap-[24px] xl:flex-row xl:justify-between">
        <Image src={"/logo.png"} width={50} height={50} alt="logo" />
        <div className="flex flex-col gap-[24px] xl:flex-row xl:gap-[80px]">
          <div className="flex justify-between xl:gap-[80px]">
            <Details />
            <ContactUs />
          </div>
          <SubscribeUs />
        </div>
      </div>
      <h3 className="">© Copyright </h3>
    </div>
  );
}
