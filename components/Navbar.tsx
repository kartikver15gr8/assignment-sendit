import { Button } from "./ui/button";

export default function Navbar() {
  return (
    <div className="flex justify-between items-center h-[91px] bg-[#FFF3F3]">
      <div className="text-[24px] font-extrabold ml-32">Brandname</div>
      <div className="flex">
        <ul className="flex text-[#737373] font-bold">
          <li className="mx-5">Home</li>
          <li className="mx-5">Product</li>
          <li className="mx-5">Pricing</li>
          <li className="mx-5">Contact</li>
        </ul>
      </div>
      <div className="mr-32 flex items-center">
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
    </div>
  );
}
