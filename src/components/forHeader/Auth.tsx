"use client";
import ButtonAuth from "../ui/ButtonAuth";
export default function Auth() {
  return (
    <div className="flex flex-col gap-[16px] mt-[12px] xl:flex-row xl:items-center">
      <ButtonAuth
        type="button"
        className={`bg-[#EDF3FF] border border-[#1E88E5] `}
      >
        ავტორიზაცია
      </ButtonAuth>
      <ButtonAuth type="button" className={`bg-[#1E88E5] text-white`}>
        რეგისტრაცია
      </ButtonAuth>
    </div>
  );
}
