export default function SubHeadline({ Children }) {
  return (
    <div className="flex gap-3 items-center ">
      <div className="h-[1px] w-[36px] bg-[rgb(58,58,63)]"></div>
      <div className="text-[#c0c1cc] font-bold">{Children}</div>
      <div className="h-[1px] w-[36px] bg-[rgb(58,58,63)]"></div>
    </div>
  );
}
