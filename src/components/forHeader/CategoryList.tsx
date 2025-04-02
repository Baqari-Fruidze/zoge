"use client";

import React from "react";

export default function CategoryList() {
  return (
    <div className="categoryList flex flex-col gap-[18px] items-start py-[22px] border-y-[1px] ">
      <div className="flex items-center gap-[10px]">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M11.9051 22.249L11.75 22.218L11.5949 22.249C9.08985 22.7486 6.72487 22.4708 4.99722 21.0925C3.27869 19.7215 2 17.1085 2 12.511C2 7.80926 3.0624 5.89911 4.46165 5.20146C5.19354 4.83654 6.14002 4.73034 7.34435 4.86891C8.54725 5.00732 9.93524 5.38107 11.5 5.9012L11.7748 5.99251L12.0436 5.88527C14.6594 4.84184 17.0107 4.44214 18.6623 5.21073C20.211 5.93143 21.5 7.87907 21.5 12.511C21.5 17.1085 20.2213 19.7215 18.5028 21.0925C16.7751 22.4708 14.4101 22.7486 11.9051 22.249Z"
            stroke="#2D3142"
            strokeWidth="1.5"
          />
          <path
            d="M11.7501 5.67884C11.7501 3.0511 10.696 2 8.58789 2"
            stroke="#2D3142"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <a
          href=""
          className="font-georgian text-[14px] text-[#2D3142] font-semibold cursor-pointer"
        >
          სურსათი
        </a>
      </div>
      <div className="flex items-center gap-[10px]">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M14.495 18.8H10.505C10.157 18.8 9.87495 18.518 9.87495 18.17V15.755C9.87495 15.407 9.59289 15.125 9.24495 15.125H6.82995C6.48201 15.125 6.19995 14.843 6.19995 14.495V10.505C6.19995 10.1571 6.48201 9.875 6.82995 9.875H9.24495C9.59289 9.875 9.87495 9.59294 9.87495 9.245V6.83C9.87495 6.48206 10.157 6.2 10.505 6.2H14.495C14.8429 6.2 15.125 6.48206 15.125 6.83V9.245C15.125 9.59294 15.407 9.875 15.755 9.875H18.17C18.5179 9.875 18.8 10.1571 18.8 10.505V14.495C18.8 14.843 18.5179 15.125 18.17 15.125H15.755C15.407 15.125 15.125 15.407 15.125 15.755V18.17C15.125 18.518 14.8429 18.8 14.495 18.8Z"
            stroke="#2D3142"
            strokeWidth="1.5"
          />
          <path
            d="M12.5 23C18.2989 23 23 18.2989 23 12.5C23 6.70101 18.2989 2 12.5 2C6.70101 2 2 6.70101 2 12.5C2 18.2989 6.70101 23 12.5 23Z"
            stroke="#2D3142"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <a
          href=""
          className="font-georgian text-[14px] text-[#2D3142] font-semibold cursor-pointer"
        >
          ფარმაცია
        </a>
      </div>
      <div className="flex items-center gap-[10px]">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M5.75 20.5H17.75M10.25 17.5V20.5M13.25 17.5V20.5M3.125 17.5H20.375C20.996 17.5 21.5 16.996 21.5 16.375V5.125C21.5 4.504 20.996 4 20.375 4H3.125C2.504 4 2 4.504 2 5.125V16.375C2 16.996 2.504 17.5 3.125 17.5Z"
            stroke="#2D3142"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <a
          href=""
          className="font-georgian text-[14px] text-[#2D3142] font-semibold cursor-pointer"
        >
          ტექნიკა
        </a>
      </div>
    </div>
  );
}
