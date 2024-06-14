import FooterCard from "./FooterCard";

export default function Footer() {
  return (
    <div className="h-[346px] ">
      <div className="h-[272px] flex justify-center items-center">
        <FooterCard
          heading="Company Info"
          l1="About Us"
          l2="Career"
          l3="We are hiring"
          l4="Blog"
        />
        <FooterCard
          heading="Features"
          l1="Business Marketing"
          l2="User Analytics"
          l3="Live Chat"
          l4="Unlimited Support"
        />
        <FooterCard
          heading="Resources"
          l1="IOS & Android"
          l2="Watch a Demo"
          l3="Customers"
          l4="API"
        />
        <div className="flex flex-col  mx-10">
          <p className="text-[16px] font-bold mb-[20px]">Get In Touch</p>
          <ul className="flex flex-col gap-y-[20px] text-[#737373] font-bold text-[14px]">
            <li className="flex items-center">
              <svg
                className="mr-2"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M18.8482 12.3517C18.7369 12.2402 18.6046 12.1517 18.459 12.0913C18.3135 12.031 18.1574 11.9999 17.9998 11.9999C17.8422 11.9999 17.6862 12.031 17.5406 12.0913C17.395 12.1517 17.2628 12.2402 17.1514 12.3517L15.2386 14.2645C14.3519 14.0005 12.6971 13.4005 11.6483 12.3517C10.5995 11.3029 9.9995 9.64814 9.7355 8.76135L11.6483 6.84857C11.7598 6.73723 11.8483 6.60498 11.9087 6.45941C11.969 6.31383 12.0001 6.15778 12.0001 6.00018C12.0001 5.84258 11.969 5.68653 11.9087 5.54095C11.8483 5.39538 11.7598 5.26313 11.6483 5.15179L6.84833 0.351838C6.73698 0.240304 6.60474 0.151819 6.45917 0.0914472C6.31359 0.031075 6.15754 0 5.99994 0C5.84234 0 5.68629 0.031075 5.54071 0.0914472C5.39513 0.151819 5.26289 0.240304 5.15155 0.351838L1.89718 3.60621C1.44118 4.0622 1.18439 4.68859 1.19399 5.32819C1.22159 7.03697 1.67398 12.9721 6.35153 17.6497C11.0291 22.3272 16.9642 22.7784 18.6742 22.8072H18.7078C19.3414 22.8072 19.9402 22.5576 20.3938 22.104L23.6482 18.8497C23.7597 18.7383 23.8482 18.6061 23.9086 18.4605C23.9689 18.3149 24 18.1589 24 18.0013C24 17.8437 23.9689 17.6876 23.9086 17.542C23.8482 17.3965 23.7597 17.2642 23.6482 17.1529L18.8482 12.3517ZM18.6958 20.406C17.1982 20.3808 12.0743 19.9788 8.04832 15.9517C4.00916 11.9125 3.61796 6.77057 3.59396 5.30299L5.99994 2.89701L9.10311 6.00018L7.55152 7.55177C7.41048 7.6927 7.30678 7.86657 7.24979 8.05764C7.1928 8.24872 7.18432 8.45098 7.22513 8.64615C7.25392 8.78415 7.95832 12.0565 9.9503 14.0485C11.9423 16.0405 15.2146 16.7449 15.3526 16.7737C15.5477 16.8156 15.7502 16.8078 15.9414 16.751C16.1327 16.6942 16.3065 16.5901 16.447 16.4485L17.9998 14.8969L21.103 18.0001L18.6958 20.406Z"
                  fill="#96BB7C"
                />
              </svg>
              <p>(480)555-0103</p>
            </li>
            <li className="flex items-center">
              <svg
                className="mr-2"
                width="20"
                height="20"
                viewBox="0 0 24 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_0_257)">
                  <path
                    d="M12 17.9999C15.3089 17.9999 17.9999 15.309 17.9999 12C17.9999 8.69105 15.3089 6.00008 12 6.00008C8.69101 6.00008 6.00004 8.69105 6.00004 12C6.00004 15.309 8.69101 17.9999 12 17.9999ZM12 9.00004C13.6545 9.00004 14.9999 10.3455 14.9999 12C14.9999 13.6545 13.6545 15 12 15C10.3455 15 9.00001 13.6545 9.00001 12C9.00001 10.3455 10.3455 9.00004 12 9.00004ZM11.13 29.7208C11.3839 29.9021 11.688 29.9996 12 29.9996C12.312 29.9996 12.6161 29.9021 12.87 29.7208C13.326 29.3983 24.0434 21.6599 23.9999 12C23.9999 5.38356 18.6164 0.00012207 12 0.00012207C5.38357 0.00012207 0.000132055 5.38356 0.000132055 11.9925C-0.0433675 21.6599 10.674 29.3983 11.13 29.7208ZM12 3.00009C16.9634 3.00009 20.9999 7.03655 20.9999 12.0075C21.0314 18.6644 14.418 24.6419 12 26.6023C9.58353 24.6404 2.9686 18.6614 3.0001 12C3.0001 7.03655 7.03655 3.00009 12 3.00009ZM12 17.9999C15.3089 17.9999 17.9999 15.309 17.9999 12C17.9999 8.69105 15.3089 6.00008 12 6.00008C8.69101 6.00008 6.00004 8.69105 6.00004 12C6.00004 15.309 8.69101 17.9999 12 17.9999ZM12 9.00004C13.6545 9.00004 14.9999 10.3455 14.9999 12C14.9999 13.6545 13.6545 15 12 15C10.3455 15 9.00001 13.6545 9.00001 12C9.00001 10.3455 10.3455 9.00004 12 9.00004ZM11.13 29.7208C11.3839 29.9021 11.688 29.9996 12 29.9996C12.312 29.9996 12.6161 29.9021 12.87 29.7208C13.326 29.3983 24.0434 21.6599 23.9999 12C23.9999 5.38356 18.6164 0.00012207 12 0.00012207C5.38357 0.00012207 0.000132055 5.38356 0.000132055 11.9925C-0.0433675 21.6599 10.674 29.3983 11.13 29.7208ZM12 3.00009C16.9634 3.00009 20.9999 7.03655 20.9999 12.0075C21.0314 18.6644 14.418 24.6419 12 26.6023C9.58353 24.6404 2.9686 18.6614 3.0001 12C3.0001 7.03655 7.03655 3.00009 12 3.00009Z"
                    fill="#96BB7C"
                  />
                  <path
                    d="M12 17.9999C15.3089 17.9999 17.9999 15.309 17.9999 12C17.9999 8.69105 15.3089 6.00008 12 6.00008C8.69101 6.00008 6.00004 8.69105 6.00004 12C6.00004 15.309 8.69101 17.9999 12 17.9999ZM12 9.00004C13.6545 9.00004 14.9999 10.3455 14.9999 12C14.9999 13.6545 13.6545 15 12 15C10.3455 15 9.00001 13.6545 9.00001 12C9.00001 10.3455 10.3455 9.00004 12 9.00004ZM11.13 29.7208C11.3839 29.9021 11.688 29.9996 12 29.9996C12.312 29.9996 12.6161 29.9021 12.87 29.7208C13.326 29.3983 24.0434 21.6599 23.9999 12C23.9999 5.38356 18.6164 0.00012207 12 0.00012207C5.38357 0.00012207 0.000132055 5.38356 0.000132055 11.9925C-0.0433675 21.6599 10.674 29.3983 11.13 29.7208ZM12 3.00009C16.9634 3.00009 20.9999 7.03655 20.9999 12.0075C21.0314 18.6644 14.418 24.6419 12 26.6023C9.58353 24.6404 2.9686 18.6614 3.0001 12C3.0001 7.03655 7.03655 3.00009 12 3.00009ZM12 17.9999C15.3089 17.9999 17.9999 15.309 17.9999 12C17.9999 8.69105 15.3089 6.00008 12 6.00008C8.69101 6.00008 6.00004 8.69105 6.00004 12C6.00004 15.309 8.69101 17.9999 12 17.9999ZM12 9.00004C13.6545 9.00004 14.9999 10.3455 14.9999 12C14.9999 13.6545 13.6545 15 12 15C10.3455 15 9.00001 13.6545 9.00001 12C9.00001 10.3455 10.3455 9.00004 12 9.00004ZM11.13 29.7208C11.3839 29.9021 11.688 29.9996 12 29.9996C12.312 29.9996 12.6161 29.9021 12.87 29.7208C13.326 29.3983 24.0434 21.6599 23.9999 12C23.9999 5.38356 18.6164 0.00012207 12 0.00012207C5.38357 0.00012207 0.000132055 5.38356 0.000132055 11.9925C-0.0433675 21.6599 10.674 29.3983 11.13 29.7208ZM12 3.00009C16.9634 3.00009 20.9999 7.03655 20.9999 12.0075C21.0314 18.6644 14.418 24.6419 12 26.6023C9.58353 24.6404 2.9686 18.6614 3.0001 12C3.0001 7.03655 7.03655 3.00009 12 3.00009Z"
                    fill="#96BB7C"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_0_257">
                    <rect width="24" height="29.9997" fill="white" />
                  </clipPath>
                </defs>
              </svg>
              <p>4517 Washington Ave. Manchester, Kentucky 39495</p>
            </li>
            <li className="flex items-center">
              <svg
                className="mr-2"
                width="20"
                height="20"
                viewBox="0 0 24 26"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_0_261)">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M-0.91875 5.71703C-0.75492 4.98077 -0.352185 4.32339 0.223498 3.85255C0.79918 3.38171 1.51369 3.12532 2.25 3.12537H21.75C22.4863 3.12532 23.2008 3.38171 23.7765 3.85255C24.3522 4.32339 24.7549 4.98077 24.9187 5.71703L12 13.8154L-0.91875 5.71703ZM-1 7.62037V19.4604L8.42988 13.5304L-1 7.62037ZM9.98663 14.5087L-0.689625 21.2204C-0.425844 21.7908 -0.00951922 22.2727 0.510895 22.61C1.03131 22.9472 1.63441 23.126 2.25 23.1254H21.75C22.3655 23.1255 22.9684 22.9464 23.4885 22.6088C24.0086 22.2713 24.4246 21.7892 24.688 21.2187L14.0118 14.507L12 15.7687L9.98663 14.507V14.5087ZM15.5701 13.532L25 19.4604V7.62037L15.5701 13.5304V13.532Z"
                    fill="#96BB7C"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_0_261">
                    <rect width="24" height="26" fill="white" />
                  </clipPath>
                </defs>
              </svg>
              <p>debra.holt@example.com</p>
            </li>
            <li className="flex items-center">
              <svg
                className="mr-2"
                width="20"
                height="20"
                viewBox="0 0 24 26"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_0_261)">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M-0.91875 5.71703C-0.75492 4.98077 -0.352185 4.32339 0.223498 3.85255C0.79918 3.38171 1.51369 3.12532 2.25 3.12537H21.75C22.4863 3.12532 23.2008 3.38171 23.7765 3.85255C24.3522 4.32339 24.7549 4.98077 24.9187 5.71703L12 13.8154L-0.91875 5.71703ZM-1 7.62037V19.4604L8.42988 13.5304L-1 7.62037ZM9.98663 14.5087L-0.689625 21.2204C-0.425844 21.7908 -0.00951922 22.2727 0.510895 22.61C1.03131 22.9472 1.63441 23.126 2.25 23.1254H21.75C22.3655 23.1255 22.9684 22.9464 23.4885 22.6088C24.0086 22.2713 24.4246 21.7892 24.688 21.2187L14.0118 14.507L12 15.7687L9.98663 14.507V14.5087ZM15.5701 13.532L25 19.4604V7.62037L15.5701 13.5304V13.532Z"
                    fill="#96BB7C"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_0_261">
                    <rect width="24" height="26" fill="white" />
                  </clipPath>
                </defs>
              </svg>
              <p>debra.holt@example.com</p>
            </li>
          </ul>
        </div>
      </div>
      <div className="h-[74px] flex justify-center bg-[#FAFAFA] items-center">
        <div className="flex items-center justify-between w-[70%]">
          <div className="w-[fit]">
            <p className="font-bold text-[#737373] text-[14px]">
              Made With Love By Figmaland All Right Reserved{" "}
            </p>
          </div>
          <div className="">
            <div className="flex my-3">
              <svg
                className="mx-2"
                width="25"
                height="24"
                viewBox="0 0 25 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_0_141)">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M24 11.5704C24 5.1801 18.8515 0 12.5014 0C6.14848 0.00143732 1 5.1801 1 11.5719C1 17.3456 5.2056 22.1319 10.7019 23V14.9151H7.78415V11.5719H10.7048V9.02062C10.7048 6.12155 12.4224 4.52037 15.0484 4.52037C16.3075 4.52037 17.6226 4.74603 17.6226 4.74603V7.59193H16.1724C14.7451 7.59193 14.2995 8.4845 14.2995 9.40008V11.5704H17.4875L16.9787 14.9136H14.2981V22.9986C19.7944 22.1304 24 17.3441 24 11.5704Z"
                    fill="#96BB7C"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_0_141">
                    <rect
                      width="24"
                      height="24"
                      fill="white"
                      transform="translate(0.5)"
                    />
                  </clipPath>
                </defs>
              </svg>
              <svg
                className="mx-2"
                width="22"
                height="22"
                viewBox="0 0 22 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11 0C8.01488 0 7.6395 0.01375 6.46663 0.066C5.29375 0.121 4.49487 0.30525 3.795 0.5775C3.06088 0.853626 2.39593 1.28676 1.84663 1.84663C1.2871 2.39621 0.854023 3.06108 0.5775 3.795C0.30525 4.4935 0.119625 5.29375 0.066 6.4625C0.01375 7.63812 0 8.01213 0 11.0014C0 13.9879 0.01375 14.3619 0.066 15.5347C0.121 16.7062 0.30525 17.5051 0.5775 18.205C0.859375 18.9282 1.23475 19.5415 1.84663 20.1534C2.45713 20.7652 3.07037 21.142 3.79363 21.4225C4.49487 21.6947 5.29238 21.8804 6.46388 21.934C7.63813 21.9862 8.01213 22 11 22C13.9879 22 14.3605 21.9862 15.5347 21.934C16.7049 21.879 17.5065 21.6947 18.2064 21.4225C18.94 21.1462 19.6045 20.7131 20.1534 20.1534C20.7652 19.5415 21.1406 18.9282 21.4225 18.205C21.6934 17.5051 21.879 16.7062 21.934 15.5347C21.9862 14.3619 22 13.9879 22 11C22 8.01213 21.9862 7.63813 21.934 6.46388C21.879 5.29375 21.6934 4.4935 21.4225 3.795C21.146 3.06106 20.7129 2.39618 20.1534 1.84663C19.6042 1.28655 18.9392 0.853387 18.205 0.5775C17.5037 0.30525 16.7035 0.119625 15.5334 0.066C14.3591 0.01375 13.9865 0 10.9973 0H11.0014H11ZM10.0141 1.98275H11.0014C13.9384 1.98275 14.2862 1.99238 15.4454 2.046C16.5179 2.09413 17.1009 2.27425 17.4886 2.42412C18.0015 2.6235 18.3686 2.86275 18.7536 3.24775C19.1386 3.63275 19.3765 3.9985 19.5759 4.51275C19.7271 4.89913 19.9059 5.48213 19.954 6.55463C20.0076 7.71375 20.0186 8.06163 20.0186 10.9973C20.0186 13.9329 20.0076 14.2821 19.954 15.4412C19.9059 16.5138 19.7258 17.0954 19.5759 17.4831C19.3995 17.9607 19.118 18.3926 18.7522 18.7467C18.3672 19.1318 18.0015 19.3696 17.4873 19.569C17.1023 19.7203 16.5192 19.899 15.4454 19.9485C14.2862 20.0007 13.9384 20.0131 11.0014 20.0131C8.06437 20.0131 7.71513 20.0007 6.556 19.9485C5.4835 19.899 4.90188 19.7203 4.51412 19.569C4.03631 19.3929 3.60405 19.1119 3.24913 18.7467C2.88303 18.392 2.60112 17.9598 2.42412 17.4818C2.27425 17.0954 2.09413 16.5124 2.046 15.4399C1.99375 14.2807 1.98275 13.9329 1.98275 10.9945C1.98275 8.0575 1.99375 7.711 2.046 6.55187C2.0955 5.47937 2.27425 4.89638 2.4255 4.50863C2.62488 3.99575 2.86413 3.62862 3.24913 3.24362C3.63412 2.85862 3.99987 2.62075 4.51412 2.42138C4.90188 2.27012 5.4835 2.09138 6.556 2.04188C7.57075 1.99513 7.964 1.98137 10.0141 1.98V1.98275ZM16.8726 3.80875C16.6993 3.80875 16.5276 3.84289 16.3675 3.90923C16.2073 3.97557 16.0618 4.0728 15.9392 4.19537C15.8167 4.31794 15.7194 4.46346 15.6531 4.62361C15.5868 4.78376 15.5526 4.9554 15.5526 5.12875C15.5526 5.30209 15.5868 5.47374 15.6531 5.63389C15.7194 5.79404 15.8167 5.93956 15.9392 6.06213C16.0618 6.1847 16.2073 6.28193 16.3675 6.34827C16.5276 6.41461 16.6993 6.44875 16.8726 6.44875C17.2227 6.44875 17.5585 6.30968 17.806 6.06213C18.0536 5.81458 18.1926 5.47884 18.1926 5.12875C18.1926 4.77866 18.0536 4.44292 17.806 4.19537C17.5585 3.94782 17.2227 3.80875 16.8726 3.80875ZM11.0014 5.3515C10.2521 5.33981 9.50798 5.47729 8.81234 5.75594C8.11671 6.0346 7.48346 6.44885 6.94946 6.97458C6.41546 7.50032 5.99138 8.12703 5.70191 8.81823C5.41244 9.50944 5.26336 10.2513 5.26336 11.0007C5.26336 11.7501 5.41244 12.4919 5.70191 13.1831C5.99138 13.8743 6.41546 14.5011 6.94946 15.0268C7.48346 15.5525 8.11671 15.9668 8.81234 16.2454C9.50798 16.5241 10.2521 16.6616 11.0014 16.6499C12.4844 16.6267 13.8988 16.0214 14.9393 14.9645C15.9799 13.9076 16.5631 12.4839 16.5631 11.0007C16.5631 9.51751 15.9799 8.09382 14.9393 7.03691C13.8988 5.97999 12.4844 5.37464 11.0014 5.3515ZM11.0014 7.33288C11.974 7.33288 12.9067 7.71923 13.5944 8.40695C14.2821 9.09467 14.6685 10.0274 14.6685 11C14.6685 11.9726 14.2821 12.9053 13.5944 13.593C12.9067 14.2808 11.974 14.6671 11.0014 14.6671C10.0288 14.6671 9.09605 14.2808 8.40833 13.593C7.72061 12.9053 7.33425 11.9726 7.33425 11C7.33425 10.0274 7.72061 9.09467 8.40833 8.40695C9.09605 7.71923 10.0288 7.33288 11.0014 7.33288Z"
                  fill="#96BB7C"
                />
              </svg>
              <svg
                className="mx-2"
                width="25"
                height="20"
                viewBox="0 0 25 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8.91075 19C17.213 19 21.7546 12.0731 21.7546 6.07669C21.7546 5.88285 21.7546 5.68625 21.7464 5.49241C22.6306 4.84789 23.3937 4.04993 24 3.13592C23.1741 3.50262 22.2988 3.7443 21.4026 3.85312C22.3466 3.28495 23.0536 2.391 23.3923 1.3374C22.5054 1.86647 21.5346 2.23787 20.5226 2.43534C19.8423 1.70572 18.9419 1.22237 17.9611 1.06016C16.9803 0.897946 15.9737 1.06592 15.0973 1.53807C14.2209 2.01023 13.5236 2.7602 13.1134 3.67182C12.7031 4.58345 12.6029 5.60585 12.8281 6.58066C11.0334 6.49005 9.27762 6.02057 7.67468 5.20269C6.07175 4.3848 4.65744 3.23678 3.5235 1.83307C2.94784 2.83421 2.77216 4.01843 3.03214 5.14526C3.29211 6.27209 3.96825 7.25705 4.92325 7.90013C4.20762 7.87565 3.50772 7.68215 2.88 7.33524V7.39754C2.88123 8.44631 3.24205 9.46247 3.90145 10.2743C4.56086 11.0861 5.4784 11.6438 6.499 11.853C6.11161 11.9605 5.71144 12.014 5.30963 12.0122C5.02635 12.0131 4.74365 11.9867 4.46537 11.9333C4.75383 12.8361 5.3155 13.6254 6.07171 14.1908C6.82793 14.7561 7.74081 15.0691 8.6825 15.0859C7.08276 16.3511 5.10668 17.0373 3.0725 17.034C2.71407 17.0355 2.35588 17.0147 2 16.9716C4.06458 18.297 6.46228 19.0008 8.91075 19Z"
                  fill="#96BB7C"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}