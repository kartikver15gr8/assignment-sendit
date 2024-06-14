import Image from "next/image";
import { Button } from "./ui/button";
import React from "react";
import imgBanner from "@/public/imgBanner.png";

export default function Landing() {
  return (
    <div className="flex bg-[#FFF3F3]">
      <div className="w-[50%] p-5 flex justify-center items-center">
        <div>
          <p className="text-[#84A36C] text-lg font-bold pb-16">Welcome</p>
          <div className="pb-10 text-[24px] sm:text-[24px] md:text-[32px] lg:text-[54px] xl:text-[54px] 2xl:text-[54px] ">
            <p className=" font-bold">Best Learning</p>
            <p className=" font-bold">Opportunities</p>
          </div>
          <div className="pb-5 text-[10px] sm:text-[10px] md:text-[14px] lg:text-[20px] xl:text-[20px] 2xl:text-[20px]">
            <p>Our goal is to make online</p>
            <p>education work for everyone</p>
          </div>
          <div className="flex">
            <Button className="bg-[#84A36C] mr-3 w-16 sm:w-16 md:w-20 lg:w-32 xl:w-32 2xl:w-32 text-[10px] sm:text-[10px] md:text-[14px] lg:text-[14px] xl:text-[14px] 2xl:text-[14px] h-8 sm:h-8 md:h-10 lg:h-10 xl:h-10 2xl:h-12">
              Join Us
            </Button>
            <Button className="bg-transparent text-[#84A36C] border-2 border-[#84A36C] w-16 sm:w-16 md:w-20 lg:w-32 xl:w-32 2xl:w-32 text-[10px] sm:text-[10px] md:text-[14px] lg:text-[14px] xl:text-[14px] 2xl:text-[14px] h-8 sm:h-8 md:h-10 lg:h-10 xl:h-10 2xl:h-12">
              Learn More
            </Button>
          </div>
        </div>
      </div>
      <div className="w-[50%] xs:hidden hidden sm:flex  md:flex lg:flex xl:flex 2xl:flex justify-end">
        <Image
          className="w-[95%] h-[100%] "
          src={imgBanner}
          alt="Banner Image"
        />
      </div>
    </div>
  );
}
