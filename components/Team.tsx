import React from "react";
import Image from "next/image";
import mone from "@/public/mone.png";
import mtwo from "@/public/mtwo.png";
import mthree from "@/public/mthree.png";
import mfour from "@/public/mfour.png";
import TeamCard from "./TeamCard";

export default function Team() {
  return (
    <div className="h-[100vh] flex flex-col items-center ">
      <div>
        <div className="flex flex-col mt-[112px] gap-y-[10px]">
          <p className="text-[#84A36C] font-bold">Team</p>
          <p className="text-[24px] font-bold">Get Quality Education</p>
          <p className="flex flex-wrap text-[14px] w-[469px]">
            Problems trying to resolve the conflict between the two major realms
            of Classical physics: Newtonian mechanics.
          </p>
        </div>
        <div className="flex mt-20 flex-wrap">
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
