"use client";

import { useState } from "react";
import { Button } from "./ui/button";
import React from "react";

export default function Navbar() {
  const [dropdown, setDropdown] = useState(false);
  const showDropdown = () => {
    setDropdown(!dropdown);
  };

  return (
    <>
      <div className="flex justify-between items-center h-[91px] bg-[#FFF3F3]">
        <div className="text-[20px] sm:text-[20px] md:text-[24px] lg:text-[24px] xl:text-[24px] 2xl:text-[24px]  font-extrabold ml-5 sm:ml-5 md:ml-10 lg:ml-20 xl:ml-32 2xl:ml-32">
          Brandname
        </div>
        <div className="hidden sm:hidden md:hidden lg:flex xl:flex 2xl:flex">
          <ul className="flex text-[#737373] font-bold">
            <li className="mx-5">Home</li>
            <li className="mx-5">Product</li>
            <li className="mx-5">Pricing</li>
            <li className="mx-5">Contact</li>
          </ul>
        </div>
        <div className="mr-32 hidden sm:hidden md:hidden lg:flex xl:flex 2xl:flex items-center">
          <p className="text-[14px] text-[#84A36C] mr-[45px] font-bold">
            Join us
          </p>
          <Button className="bg-[#84A36C]">
            <p className="text-[14px] font-bold">JOIN US</p>

            <svg
              className="w-4 mx-2"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 256 256"
            >
              <path
                fill="white"
                d="m220.24 132.24l-72 72a6 6 0 0 1-8.48-8.48L201.51 134H40a6 6 0 0 1 0-12h161.51l-61.75-61.76a6 6 0 0 1 8.48-8.48l72 72a6 6 0 0 1 0 8.48"
              />
            </svg>
          </Button>
        </div>
        {dropdown ? (
          <div
            onClick={showDropdown}
            className="lg:hidden text-[22px] mr-16 cursor-pointer text-black"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1.2em"
              height="1.2em"
              viewBox="0 0 15 15"
            >
              <path
                fill="black"
                d="M3.64 2.27L7.5 6.13l3.84-3.84A.92.92 0 0 1 12 2a1 1 0 0 1 1 1a.9.9 0 0 1-.27.66L8.84 7.5l3.89 3.89A.9.9 0 0 1 13 12a1 1 0 0 1-1 1a.92.92 0 0 1-.69-.27L7.5 8.87l-3.85 3.85A.92.92 0 0 1 3 13a1 1 0 0 1-1-1a.9.9 0 0 1 .27-.66L6.16 7.5L2.27 3.61A.9.9 0 0 1 2 3a1 1 0 0 1 1-1c.24.003.47.1.64.27"
              />
            </svg>
          </div>
        ) : (
          <div
            onClick={showDropdown}
            className="lg:hidden text-[22px] mr-16 cursor-pointer text-black"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1.2em"
              height="1.2em"
              viewBox="0 0 24 24"
            >
              <path
                fill="black"
                fillRule="evenodd"
                d="M20 4H4a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1M4 2a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h16a3 3 0 0 0 3-3V5a3 3 0 0 0-3-3zm2 5h2v2H6zm5 0a1 1 0 1 0 0 2h6a1 1 0 1 0 0-2zm-3 4H6v2h2zm2 1a1 1 0 0 1 1-1h6a1 1 0 1 1 0 2h-6a1 1 0 0 1-1-1m-2 3H6v2h2zm2 1a1 1 0 0 1 1-1h6a1 1 0 1 1 0 2h-6a1 1 0 0 1-1-1"
                clipRule="evenodd"
              />
            </svg>
          </div>
        )}
      </div>
      {dropdown ? (
        <div className="flex justify-center">
          <div
            onClick={showDropdown}
            className="lg:hidden shadow-inner shadow-slate-400 rounded-xl w-96 h-[400px] fixed top-24 ease-in-out duration-100 transition-all  backdrop-blur-lg bg-slate-100"
          >
            <div className="w-full h-[320px] flex flex-col items-baseline pt-8 gap-4">
              <div className="text-center p-0 flex flex-col justify-center w-full gap-y-6">
                <p className="leading-normal text-black font-bold text-xl hover:cursor-pointer hover:text-[#84A36C] hover:scale-110 transition-all duration-200">
                  Home
                </p>
                <p className="leading-normal text-black font-bold text-xl hover:cursor-pointer hover:text-[#84A36C] hover:scale-110 transition-all duration-200">
                  Product
                </p>
                <p className="leading-normal text-black font-bold text-xl hover:cursor-pointer hover:text-[#84A36C] hover:scale-110 transition-all duration-200">
                  Pricing
                </p>
                <p className="leading-normal text-black font-bold text-xl hover:cursor-pointer hover:text-[#84A36C] hover:scale-110 transition-all duration-200">
                  Contact
                </p>
              </div>
              <div className="flex flex-col justify-center items-center w-full gap-y-8 mt-4">
                <div className="flex items-center">
                  <Button className="bg-[#84A36C]">
                    <p className="text-[14px] font-bold">JOIN US</p>

                    <svg
                      className="w-4 mx-2"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 256 256"
                    >
                      <path
                        fill="white"
                        d="m220.24 132.24l-72 72a6 6 0 0 1-8.48-8.48L201.51 134H40a6 6 0 0 1 0-12h161.51l-61.75-61.76a6 6 0 0 1 8.48-8.48l72 72a6 6 0 0 1 0 8.48"
                      />
                    </svg>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
