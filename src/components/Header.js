import Image from "next/image";
import coffeePic from "../assets/coffeeStyle.png";
import cartIcon from "../assets/cartIcon.png";
import Link from "next/link";
import Navbar from "./Navbar";
export default function Header() {
  const nav = [
    {
      name: "HOME",
      link: "/",
    },
    {
      name: "OUR PRODUCTS",
      link: "/products",
    },
    {
      name: "BLOG",
      link: "/blog",
    },
    {
      name: "ABOUT",
      link: "/about",
    },
    {
      name: "CONTACT",
      link: "/contact",
    },
    {
      name: "STYLEGUIDE",
      link: "/styleguide",
    },
  ];
  return (
    <div className="flex justify-between py-7 w-[940px] m-auto">
      <Link href="/">
        <Image className="h-[24px] w-[112px]" src={coffeePic} />
      </Link>
      <div className="flex gap-6 text-[14px] text-gray-500 font-[500] ">
        <Navbar />
      </div>
      <div className="flex">
        <Image className="h-[20px] w-[16px]" src={cartIcon} />
        <p className="rounded-full flex  h-fit bg-gray-600 w-fit items-center ml-2 p-1 "></p>
      </div>
    </div>
  );
}
