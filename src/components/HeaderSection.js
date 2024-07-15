import Image from "next/image";
import Link from "next/link";
import headerPic from "../assets/header_pic.jpg";

export default function HeaderSection() {
  return (
    <div className=" w-full bg-bg-shop  m-auto bg-[#050827] relative mb-[100px]">
      <Image
        className=" w-[940px] h-[530px] flex object-center  m-auto items-stretch opacity-60  "
        src={headerPic}
      ></Image>
      {/* HeaderContent */}
      <div className=" w-[802px] m-auto position: absolute top-[160px] left-1/2 transform -translate-x-1/2 text-white flex flex-col gap-4 items-center ">
        <p className="text-lg">BEST PLACE TO BUY DESIGN</p>
        <p className="text-6xl">Coffee Mugs</p>
        <p className=" text-lg">
          The most versatile furniture system ever created. Designed to fit your
          life, made to move and grow.
        </p>
        <button className="leading-[17px] h-[54px] w-[253px] bg-white text-black mt-8 ">
          <Link href="/products">EXPLORE OUR PRODUCTS</Link>
        </button>
      </div>
    </div>
  );
}
