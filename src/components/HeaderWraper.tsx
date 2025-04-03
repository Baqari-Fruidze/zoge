// "use client";
// import React, { useState, useEffect } from "react";
// import dynamic from "next/dynamic";
// import Header from "./Header";

// // Import LargeHeader component with no SSR
// const LargeHeader = dynamic(() => import("./LargeHeader"), { ssr: false });

// function HeaderWraper() {
//   const [isExtraLargeDevice, setIsExtraLargeDevice] = useState(false);
//   const [isMounted, setIsMounted] = useState(false);
  
//   useEffect(() => {
//     setIsMounted(true);
    
//     const checkScreenSize = () => {
//       setIsExtraLargeDevice(window.innerWidth >= 1201);
//     };
    
//     // Initial check
//     checkScreenSize();
    
//     // Add event listener for resize
//     window.addEventListener("resize", checkScreenSize);
    
//     // Cleanup
//     return () => window.removeEventListener("resize", checkScreenSize);
//   }, []);
  
//   // Only render the responsive content after mounting on the client
//   if (!isMounted) {
//     return <Header />; // Default to mobile header during SSR
//   }
  
//   return isExtraLargeDevice ? <LargeHeader /> : <Header />;
// }

// // Export with no SSR to prevent hydration issues
// export default dynamic(() => Promise.resolve(HeaderWraper), { ssr: false });



"use client";
import { useMediaQuery } from "@uidotdev/usehooks";
import React from "react";
import LargeHeader from "./LargeHeader";
import Header from "./Header";

export default function HeaderWraper() {
  const isExtraLargeDevice = useMediaQuery(
    "only screen and (min-width : 1201px)"
  );
  return <>{isExtraLargeDevice ? <LargeHeader /> : <Header />}</>;}
