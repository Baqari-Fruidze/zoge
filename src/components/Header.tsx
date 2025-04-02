"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import BurgerList from "./forHeader/BurgerList";

export default function Header() {
  const [burgerClicked, setBurgerClicked] = useState<boolean>(false);
  const [isMounted, setIsMounted] = useState<boolean>(false);
  
  useEffect(() => {
    setIsMounted(true);
  }, []);
  
  const burgerHandleClicker = () => setBurgerClicked(!burgerClicked);
  
  return (
    <div
      className={`px-[20px] py-[10px] flex justify-between items-center ${
        !burgerClicked ? "border-b" : null
      } ${burgerClicked ? "border-b-gray-200" : null} `}
    >
      <Image src={"/logo.png"} width={40} height={40} alt={"logo"} />

      <svg
        width="45px"
        height="35px"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        onClick={burgerHandleClicker}
      >
        <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
        <g
          id="SVGRepo_tracerCarrier"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></g>
        <g id="SVGRepo_iconCarrier">
          <path
            d="M4 18L20 18"
            stroke="#000000"
            strokeWidth="2"
            strokeLinecap="round"
          ></path>
          <path
            d="M4 12L20 12"
            stroke="#000000"
            strokeWidth="2"
            strokeLinecap="round"
          ></path>
          <path
            d="M4 6L20 6"
            stroke="#000000"
            strokeWidth="2"
            strokeLinecap="round"
          ></path>
        </g>
      </svg>

      {isMounted && burgerClicked ? (
        <BurgerList burgerHandleClicker={burgerHandleClicker} />
      ) : null}
    </div>
  );
}
