"use client";

import Auth from "./Auth";
import CategoryList from "./CategoryList";
import Info from "./Info";
import { motion } from "framer-motion";

export default function BurgerList({
  burgerHandleClicker,
}: {
  burgerHandleClicker: () => void;
}) {
  return (
    <div className="fixed inset-0 top-0 z-4">
      <motion.div 
        className="absolute inset-0 bg-[rgba(0,0,0,0.4)]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        onClick={burgerHandleClicker}
      />
      <motion.div 
        className="pt-[17px] relative z-50 ml-auto flex flex-col gap-[16px] bg-white w-[85%] h-screen items-center"
        initial={{ x: "100%" }}
        animate={{ x: 0 }}
        exit={{ x: "100%" }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
      >
        <div className="flex flex-col gap-[16px] px-[30px] w-full ">
          <motion.svg
            width="25px"
            height="25px"
            viewBox="-0.5 0 25 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            onClick={burgerHandleClicker}
            className="ml-auto cursor-pointer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              <path
                d="M3 21.32L21 3.32001"
                stroke="#000000"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
              <path
                d="M3 3.32001L21 21.32"
                stroke="#000000"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
            </g>
          </motion.svg>
          <CategoryList />
          <Info />
          <Auth />
        </div>
      </motion.div>
    </div>
  );
}
