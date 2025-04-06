import React from "react";
import FooterSpan from "../ui/FooterSpan";
import FooterH3 from "../ui/FooterH3";

export default function Details() {
  return (
    <div className="flex flex-col gap-[16px]">
      <FooterH3>დეტალები</FooterH3>
      <div className="flex flex-col gap-[14px]">
        <FooterSpan>ჩვენს შესახებ</FooterSpan>
        <FooterSpan>წესები და პირობები</FooterSpan>
        <FooterSpan>პარტნიორები</FooterSpan>
      </div>
    </div>
  );
}
