"use client";

import ButtonAuth from "../ui/ButtonAuth";

export default function Auth() {
  return (
    <div className="flex flex-col gap-[16px] mt-[12px]">
      <ButtonAuth type="button" classname="bg-[#EDF3FF]">
        ავტორიზაცია
      </ButtonAuth>
      <button
        className="py-2 px-4 border border-blue-500 text-blue-500 rounded hover:bg-blue-50"
        onClick={() => {
          /* Add your registration function here */
        }}
      >
        Register
      </button>
    </div>
  );
}
