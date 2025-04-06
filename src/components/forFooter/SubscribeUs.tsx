import React from "react";
import FooterH3 from "../ui/FooterH3";
import FooterSpan from "../ui/FooterSpan";

export default function SubscribeUs() {
  return (
    <div className="flex flex-col gap-[16px]">
      <FooterH3>გამოგვიწერეთ</FooterH3>
      <div className="flex flex-col gap-[14px]">
        <FooterSpan>არ გამოტოვოთ სიახლეები</FooterSpan>
        <div className="relative inline w-[240px]">
          <input
            type="text"
            placeholder="ელ-ფოსტა"
            className={`py-[14px] rounded-[4px] border border-[#1E88E5] w-[240px] pl-[18px] pr-[35px] text-[14px] font-medium font-sans text-[#70777D] outline-none`}
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="26"
            viewBox="0 0 24 26"
            fill="none"
            className="absolute top-3 right-[18px] "
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M15.2045 5.4263C15.6438 4.97704 16.3562 4.97704 16.7955 5.4263L23.5455 12.3287C23.9848 12.7779 23.9848 13.5063 23.5455 13.9556L16.7955 20.8579C16.3562 21.3072 15.6438 21.3072 15.2045 20.8579C14.7652 20.4087 14.7652 19.6803 15.2045 19.231L21.159 13.1421L15.2045 7.0532C14.7652 6.60395 14.7652 5.87556 15.2045 5.4263Z"
              fill="#1E88E5"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M7 13.1423C7 12.507 7.50368 11.9919 8.125 11.9919H21.8125C22.4338 11.9919 22.9375 12.507 22.9375 13.1423C22.9375 13.7777 22.4338 14.2927 21.8125 14.2927H8.125C7.50368 14.2927 7 13.7777 7 13.1423Z"
              fill="#1E88E5"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}
