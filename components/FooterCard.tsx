export default function FooterCard({
  heading,
  l1,
  l2,
  l3,
  l4,
}: {
  heading: string;
  l1?: string;
  l2?: string;
  l3?: string;
  l4?: string;
}) {
  return (
    <div className="flex flex-col gap-y-[10px] sm:gap-y-[10px] md:gap-y-[20px] lg:gap-y-[20px] xl:gap-y-[20px] 2xl:gap-y-[20px] mx-1 sm:mx-2 md:mx-5 lg:mx-10 xl:mx-10 2xl:mx-10">
      <p className="text-[12px] sm:text-[12px] md:text-[14px] lg:text-[16px] xl:text-[16px] 2xl:text-[16px] font-bold">
        {heading}
      </p>
      <ul className="flex flex-col gap-y-[10px]  sm:gap-y-[10px] md:gap-y-[20px] lg:gap-y-[20px] xl:gap-y-[20px] 2xl:gap-y-[20px] text-[#737373] font-bold text-[10px] sm:text-[10px] md:text-[12px] lg:text-[14px] xl:text-[14px] 2xl:text-[14px]">
        <li>{l1}</li>
        <li>{l2}</li>
        <li>{l3}</li>
        <li>{l4}</li>
      </ul>
    </div>
  );
}
