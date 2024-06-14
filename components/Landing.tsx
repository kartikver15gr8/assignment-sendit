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
          <div className="pb-10">
            <p className="text-[58px] font-bold">Best Learning</p>
            <p className="text-[58px] font-bold">Opportunities</p>
          </div>
          <div className="pb-5 text-[20px]">
            <p>Our goal is to make online</p>
            <p>education work for everyone</p>
          </div>
          <div className="flex">
            <Button className="bg-[#84A36C] mr-3">Join Us</Button>
            <Button className="bg-transparent text-[#84A36C] border-2 border-[#84A36C]">
              Learn More
            </Button>
          </div>
        </div>
      </div>
      <div className="w-[50%] flex justify-end">
        <Image
          className=""
          src={imgBanner}
          width={705}
          height={660}
          alt="Banner Image"
        />
      </div>
    </div>
  );
}
