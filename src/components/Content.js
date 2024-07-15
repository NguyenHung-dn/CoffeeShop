import SubHeadline from "./SubHeadline";
import data from "@/assets/data";
import Image from "next/image";
import Link from "next/link";
import Cart from "./Cart";
export default function Content() {
  const getRandomProducts = (productList, count) => {
    // const shuffled = productList.sort(() => 0.5 - Math.random());

    return productList.slice(1, count);
  };
  const randomProducts2 = getRandomProducts(data, 3);

  return (
    <div className=" w-full flex flex-col items-center ">
      {/* content */}
      <div className=" w-[940px] m-auto flex flex-col items-center justify-center text-[20px] mb-[100px] ">
        <div className="w-[658px] text-center">
          <p className=" text-center text-[28px] font-medium mb-3">
            Even the all-powerful Pointing has no control about the blind texts.
          </p>
          <p className="text-[18px] text-gray-400 leading-[2] mb-6">
            It is a paradisematic country, in which roasted parts of sentences
            fly into your mouth. Even the all-powerful Pointing has no control
            about the blind texts it is an almost unorthographic life One day
            however a small line of blind text by the name of Lorem Ipsum
            decided to leave for the far World of Grammar.
          </p>
        </div>
        <button className="w-fit bg-white border-red-400 border-b-2 text-red-800 ">
          Read the full Story
        </button>
      </div>
      <SubHeadline Children={"FEATURED MUGS"} />
      {/* random 2 products */}
      <div className="flex gap-2 mt-[100px]">
        {randomProducts2.map((product) => {
          return (
            <Cart product={product} width={"w-[430px]"} height={"h-[525px]"} />
          );
        })}
      </div>
    </div>
  );
}
