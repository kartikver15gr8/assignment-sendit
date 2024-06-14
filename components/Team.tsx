import React from "react";
import Image from "next/image";
import mone from "@/public/mone.png";
import mtwo from "@/public/mtwo.png";
import mthree from "@/public/mthree.png";
import mfour from "@/public/mfour.png";
import TeamCard from "./TeamCard";

export default function Team() {
  return (
    <div className="flex pb-40 flex-col items-center mt-32 lg:h-[100vh] xl:h-[100vh] 2xl:h-[100vh] sm:mt-32 md:mt-0 lg:mt-0 xl:mt-0 2xl:mt-0 ">
      <div>
        <div className="flex flex-col mt-[112px] gap-y-[10px] ml-10 sm:ml-10 md:ml-10 lg:ml-0 xl:ml-0 2xl:ml-0">
          <p className="text-[#84A36C] font-bold">Team</p>
          <p className="text-[24px] font-bold">Get Quality Education</p>
          <p className="flex flex-wrap text-[12px] sm:text-[12px] md:text-[14px] lg:text-[14px] xl:text-[14px] 2xl:text-[14px] w-[400px] sm:w-[400px] md:w-[496px] lg:w-[496px] xl:w-[495px] 2xl:w-[495px]">
            Problems trying to resolve the conflict between the two major realms
            of Classical physics: Newtonian mechanics.
          </p>
        </div>
        <div className="flex mt-20 flex-wrap ml-10 sm:ml-10 md:ml-10 lg:ml-0 xl:ml-0 2xl:ml-0 ">
          <TeamCard
            img={mone}
            memberName="Julian Jameson"
            profession="Profession"
          />
          <TeamCard
            img={mtwo}
            memberName="Julian Jameson"
            profession="Profession"
          />
          <TeamCard
            img={mthree}
            memberName="Julian Jameson"
            profession="Profession"
          />
          <TeamCard
            img={mfour}
            memberName="Julian Jameson"
            profession="Profession"
          />
        </div>
      </div>
    </div>
  );
}
