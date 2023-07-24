import Image from "next/image";
import React from "react";

import SigninBg from "@/public/src/svgs/signin-bg.svg";
import Laptop from "@/public/src/svgs/laptop.svg";

export default function AuthSlideShow() {
  return (
    <div className="hidden flex-1 flex-col items-center justify-center bg-bu-purple lg:flex">
      <div className="relative flex justify-center">
        <Image src={SigninBg} alt="" className="" />
        <Image src={Laptop} alt="laptop" className="absolute bottom-0" />
      </div>
      <div className="mt-9">
        <span className="text-4xl font-bold text-white">
          Watch Videos Offline
        </span>
      </div>
      <div className="mt-3 max-w-[385px] text-center">
        <span className=" text-xl text-white">
          You can also feel free watching videos when your internet offline
        </span>
      </div>
    </div>
  );
}
