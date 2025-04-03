"use client";

import React from "react";

export default function Info() {
  return (
    <div className="flex flex-col gap-[14px] xl:flex-row xl:gap-[32px]">
      <a
        href=""
        className="font-georgian text-[14px] text-[#2D3142] font-semibold cursor-pointer"
      >
        მთავარი
      </a>
      <a
        href=""
        className="font-georgian text-[14px] text-[#2D3142] font-semibold cursor-pointer"
      >
        ჩვენს შესახებ
      </a>
      <a
        href=""
        className="font-georgian text-[14px] text-[#2D3142] font-semibold cursor-pointer"
      >
        კონტაქტი
      </a>
    </div>
  );
}
