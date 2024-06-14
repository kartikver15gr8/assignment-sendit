import React from "react";
import { Button } from "./ui/button";

export default function Aprodable() {
  return (
    <div className="h-[100vh] flex justify-center items-center">
      <div className="flex flex-wrap">
        <div className="mt-40 ml-10 sm:mt-20 sm:ml-10 md:mt-20 md:ml-10 lg:mt-20 xl:mt-20 2xl:mt-20">
          <div className="w-[50px] h-[4px] sm:h-[5px] md:h-[5px] lg:h-[7px] xl:h-[7px] 2xl:h-[7px]  bg-red-600 sm:w-[60px] md:w-[80px] lg:w-[94px] xl:w-[94px] 2xl:w-[94px]"></div>
          <div>
            <p className="text-[20px] sm:text-[20px] md:text-[24px] lg:text-[30px] xl:text-[40px] 2xl:text-[40px] font-bold mt-10  ">
              Approdable Packages
            </p>
            <p className="flex-wrap flex w-[400px] text-[14px] mt-10">
              Problems trying to resolve the conflict between the two major
              realms of Classical physics: Newtonian mechanics
            </p>
          </div>
          <div className="flex w-fit bg-transparent mt-12 justify-center items-center">
            <p className="text-[#96BB7C] hover:scale-105 transition-all duration-300">
              Learn More
            </p>
            <svg
              className="mx-2 w-4"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 15 15"
            >
              <path
                fill="none"
                stroke="#95BB7C"
                strokeLinecap="square"
                d="m5 14l7-6.5L5 1"
              />
            </svg>
          </div>
        </div>
        <div className=" mt-20 flex flex-wrap ml-10 md:ml-10 lg:ml-20 xl:ml-20 2xl:ml-20 lg:mt-10 xl:mt-10">
          <div className="w-[239px] rounded-lg h-[292px] shadow-lg mr-[24px] px-[24px] flex justify-center flex-col hover:scale-105 transition-all duration-300 my-2 sm:my-2 md:my-2 lg:my-0 xl:my-0 2xl:my-0">
            <div className="bg-[#95BB7C] w-[70px] h-[76px] rounded-xl flex justify-center items-center">
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_0_104)">
                  <g clipPath="url(#clip1_0_104)">
                    <path
                      d="M1.71429 20C1.71429 20.3156 1.97015 20.5714 2.28572 20.5714H29.7143C30.0299 20.5714 30.2857 20.3156 30.2857 20V2.28572H1.71429V20Z"
                      fill="white"
                    />
                    <path
                      d="M31.4286 0H0.571429C0.255859 0 0 0.255859 0 0.571429C0 0.886998 0.255859 1.14286 0.571429 1.14286H31.4286C31.7441 1.14286 32 0.886998 32 0.571429C32 0.255859 31.7441 0 31.4286 0Z"
                      fill="white"
                    />
                    <path
                      d="M20.5714 29.7143H16.5714V22.8571H17.1429C17.4584 22.8571 17.7143 22.6013 17.7143 22.2857V21.7143H14.2857V22.2857C14.2857 22.6013 14.5416 22.8571 14.8572 22.8571H15.4286V29.7143H11.4286C10.4819 29.7143 9.71429 30.4819 9.71429 31.4286V32H22.2857V31.4286C22.2857 30.4819 21.5181 29.7143 20.5714 29.7143Z"
                      fill="white"
                    />
                  </g>
                </g>
                <defs>
                  <clipPath id="clip0_0_104">
                    <rect width="32" height="32" fill="white" />
                  </clipPath>
                  <clipPath id="clip1_0_104">
                    <rect width="32" height="32" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </div>
            <p className="text-[16px] font-bold my-5">Certified Teacher</p>
            <div className="h-[2px] w-[50px] bg-red-500 mb-5"></div>
            <p className="flex flex-wrap text-[14px]">
              The gradual accumulation of information about.
            </p>
          </div>
          <div className="w-[239px] rounded-lg h-[292px] shadow-lg mr-[24px] px-[24px] flex justify-center flex-col hover:scale-105 transition-all duration-300 my-2 sm:my-2 md:my-2 lg:my-0 xl:my-0 2xl:my-0">
            <div className="bg-[#95BB7C] w-[70px] h-[76px] rounded-xl flex justify-center items-center">
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_0_115)">
                  <g clipPath="url(#clip1_0_115)">
                    <path
                      d="M13.5948 12.4945C13.6324 12.4649 13.6717 12.4383 13.7107 12.4103C13.8097 12.3389 13.9132 12.2744 14.0208 12.217C14.0631 12.194 14.104 12.1709 14.1473 12.1506C15.1516 11.6629 16.3508 11.8273 17.1868 12.567C17.231 12.6054 17.2669 12.6491 17.3086 12.6897C17.3926 12.7706 17.4717 12.8566 17.5452 12.9471C17.5869 12.9993 17.6218 13.0555 17.6578 13.1107C17.7176 13.1974 17.7728 13.2875 17.8224 13.3805C17.8546 13.4412 17.8826 13.5029 17.91 13.5661C17.9512 13.6602 17.9868 13.7568 18.0173 13.8548C18.0376 13.9207 18.0568 13.9854 18.0736 14.0521C18.0966 14.1545 18.1139 14.2577 18.1255 14.362C18.1331 14.4271 18.1427 14.4913 18.146 14.5569C18.1502 14.6713 18.1471 14.7858 18.1373 14.9C18.1331 14.956 18.1337 15.0122 18.1266 15.0685C18.1038 15.2326 18.0659 15.3945 18.014 15.5518C18.014 15.5603 18.0113 15.5683 18.0085 15.5765L19.5178 16.448L22.3284 11.5756L6.75402 2.58189L3.94348 7.45368L13.2419 12.8211C13.3497 12.7023 13.468 12.5931 13.5948 12.4945Z"
                      fill="white"
                    />
                    <path
                      d="M1.15436 7.78827L5.65122 0L6.62421 0.561834L2.12734 8.3501L1.15436 7.78827Z"
                      fill="white"
                    />
                    <path
                      d="M26.4882 17.8722L27.0506 16.8981L30.9447 19.1465L30.3824 20.1206L26.4882 17.8722Z"
                      fill="white"
                    />
                    <path
                      d="M21.0584 16.0341L22.7447 13.114L26.6389 15.3627L24.9525 18.2828L21.0584 16.0341Z"
                      fill="white"
                    />
                    <path
                      d="M16.67 15.9646C16.6442 15.9172 16.6115 15.8738 16.5728 15.8359C16.6615 15.744 16.7391 15.6419 16.8039 15.5318C17.268 14.7249 16.9938 13.6948 16.1899 13.2255C16.0744 13.1607 15.9514 13.1099 15.8241 13.0737C15.7865 13.0624 15.7478 13.0556 15.7118 13.0471C15.6193 13.027 15.5252 13.0147 15.4308 13.01C15.3901 13.01 15.3503 13.0051 15.3097 13.0062C15.1755 13.0092 15.0421 13.0281 14.9123 13.0624C14.3395 13.2131 13.8885 13.6553 13.7269 14.2254C13.5652 14.7954 13.7167 15.4083 14.1254 15.8376C14.087 15.8749 14.0546 15.9177 14.0288 15.9646L6.41205 31.1863C6.27344 31.4643 6.38625 31.8019 6.66401 31.9408C6.94177 32.0794 7.27964 31.9669 7.41824 31.6889L14.7847 16.9505V31.4377C14.7847 31.7481 15.0363 31.9998 15.3468 31.9998C15.6572 31.9998 15.9089 31.7481 15.9089 31.4377V16.9549L23.2725 31.6889C23.4114 31.9669 23.749 32.0794 24.0271 31.9408C24.3048 31.8019 24.4176 31.4643 24.2787 31.1863L16.67 15.9646Z"
                      fill="white"
                    />
                  </g>
                </g>
                <defs>
                  <clipPath id="clip0_0_115">
                    <rect width="32" height="32" fill="white" />
                  </clipPath>
                  <clipPath id="clip1_0_115">
                    <rect width="32" height="32" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </div>
            <p className="text-[16px] font-bold my-5">Expert Instruction.</p>
            <div className="h-[2px] w-[50px] bg-red-500 mb-5"></div>
            <p className="flex flex-wrap text-[14px]">
              The gradual accumulation of information about
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
