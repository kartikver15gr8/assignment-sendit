import React from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

export default function NewsLetter() {
  return (
    <div className="flex justify-center h-[594px] bg-[#FFF3F3] items-center ">
      <div className="flex-col  items-center   ">
        <div className="flex flex-col items-center ">
          <p className="text-[#95BB7C] font-bold text-[16px]">Newsletter</p>
          <p className="text-[24px] font-bold mt-[10px]">Watch our Courses</p>
          <p className="text-[14px] mt-[10px]">
            Problems trying to resolve the conflict between{" "}
          </p>
          <p className="text-[14px] ">
            the two major realms of Classical physics: Newtonian mechanics{" "}
          </p>
        </div>
        <div className="mt-[80px] flex">
          <Input className="w-[688px] h-[58px] " placeholder="Your Email" />
          <Button className="h-[58px] w-[117px] rounded-l-none bg-[#95BB7C] font-bold">
            Subscribe
          </Button>
        </div>
      </div>
    </div>
  );
}
