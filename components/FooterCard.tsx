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
    <div className="flex flex-col gap-y-[20px] mx-10">
      <p className="text-[16px] font-bold">{heading}</p>
      <ul className="flex flex-col gap-y-[20px] text-[#737373] font-bold text-[14px]">
        <li>{l1}</li>
        <li>{l2}</li>
        <li>{l3}</li>
        <li>{l4}</li>
      </ul>
    </div>
  );
}
