import Link from "next/link";
import SubHeadline from "./SubHeadline";

export default function Magazine() {
  return (
    <div className="flex flex-col justify-center items-center mt-[120px] ">
      <SubHeadline Children={"BUY 2 MUGS AND GET A COFFEE MAGAZINE FREE"} />
      <div className="w-[940px] flex mt-[120px] ">
        <div className=" flex flex-col gap-4">
          <p className="text-[16px] font-semibold  text-gray-500 mt-8 ">
            PREMIUM OFFER
          </p>
          <p className="text-[34px] font-bold text-gray-800  ">
            Get our Coffee Magazine
          </p>
          <p className="text-[16px] ">
            The most versatile furniture system ever created. Designed to fit
            your life.
          </p>
          <Link
            className="bg-gray-950 w-fit text-white p-4 text-[14px]"
            href="/products"
          >
            START SHOPPING
          </Link>
        </div>
        <div className="flex gap-4 ">
          <img
            className="h-[280px]"
            src="https://assets.website-files.com/5be96251aaba7a7b19ecdf69/5be96251aaba7a2f3decdfa9_Image.jpg"
          />
          <div className="flex flex-col gap-4">
            <img
              className=" h-[130px] w-[160px] "
              src="https://assets.website-files.com/5be96251aaba7a7b19ecdf69/5be96251aaba7aa6d0ecdfa7_Image%202.jpg"
            />
            <img
              className=" h-[130px] w-[160px] "
              src="https://assets.website-files.com/5be96251aaba7a7b19ecdf69/5be96251aaba7a528fecdfa6_Image.jpg"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
