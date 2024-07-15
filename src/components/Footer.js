import Link from "next/link";
import SubHeadline from "./SubHeadline";

export default function Footer() {
  return (
    //
    <div>
      <section className="w-[1440px] h-[327px] flex flex-col  m-auto items-center bg-[#1D1F2E]  ">
        <div className=" mb-[70px] "></div>
        <SubHeadline Children={"SIGN UP AND GET FREE COFFEE BAGS"} />
        <div className="w-[940px] flex flex-col justify-center text-center mt-[30px]">
          <p className="leading-[35px] text-[35px] text-white mb-[10px] ">
            Coffee Updates
          </p>
          <div className="flex justify-center gap-2 mt-[30px]">
            <input
              className="px-4 w-[350px] h-[53px] "
              placeholder="CUSTOMER@COFFEESTYLE.IO"
            />
            <button className="bg-white p-3  h-[53px]">SUBSCRIBE</button>
          </div>
        </div>
      </section>
      <section className="mt-[100px] w-[940px] m-auto text-[14px] text-[#9B9CA2] mb-[100px]">
        <div className="flex gap-4 justify-between h-[100px]">
          <img
            className="w-[112px] h-[24px] "
            src={
              "https://assets.website-files.com/5be96251aaba7a7b19ecdf69/5be96251aaba7a4ae4ecdfb2_CoffeeStyle%20Logo.png"
            }
          />
          <p className="  w-[146px]">
            Delivering the best coffee life since 1996. From coffee geeks to the
            real ones.
          </p>
          <div>CoffeeStyle Inc. © 1996</div>
          <div>MENU</div>
        </div>
        <div className="flex  h-[160px] justify-between ">
          <div className="flex flex-col ">
            <Link href="/">Home</Link>
            <Link href="/products">Our Products</Link>
            <Link href="/about">About</Link>
            <Link href="/contact">Contact</Link>
            <Link href="/styleguide">Styleguide</Link>
          </div>
          <p>FOLLOW US</p>
          <div className="flex flex-col ">
            <a href="https://www.facebook.com/" target="_blank">
              Facebook
            </a>
            <a href="https://www.instagram.com/" target="_blank">
              Instagram
            </a>
            <a href="https://www.pinterest.com/" target="_blank">
              Pinterest
            </a>
            <a href="https://x.com/" target="_blank">
              Twitter
            </a>
          </div>
          <p>CONTACT US</p>
        </div>
        <div className="flex justify-start gap-24 ">
          <div className="flex flex-col">
            <p className="mb-4">We’re Always Happy to Help</p>
            <p className="text-black text-[18px] ">us@coffeestyle.io</p>
          </div>
          <a
            className="place-self-end"
            href="https://webflow.com/"
            target="_blank"
          >
            Powered by Webflow
          </a>
        </div>
      </section>
    </div>
  );
}
