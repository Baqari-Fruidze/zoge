import React from "react";
import FooterH3 from "../ui/FooterH3";
import FooterSpan from "../ui/FooterSpan";

export default function ContactUs() {
  return (
    <div className="flex flex-col gap-[16px]">
      <FooterH3>დაგვიკავშირდით</FooterH3>
      <div className="flex flex-col gap-[14px]">
        <FooterSpan> info@zoge.ge</FooterSpan>
        <a
          href="tel:+995555162280"
          className="font-sans text-[14px] font-normal leading-[150%] text-[#70777D]"
        >
          + 995 555 16 22 80
        </a>
        <FooterSpan>ძოძიაშვილის ქუჩა</FooterSpan>
      </div>
    </div>
  );
}
