import Image from "next/image";
import SubHeadline from "./SubHeadline";
import products from "@/assets/data";
import Link from "next/link";
import Cart from "./Cart";
export default function MoreProducts() {
  return (
    <div className="flex flex-col items-center justify-center mt-[120px] ">
      <SubHeadline Children={"MORE PRODUCTS"} />
      <div className="flex flex-wrap items-center justify-center w-[940px]  gap-4 mt-[120px] ">
        {products.slice(4, 13).map((product) => {
          return (
            <Cart product={product} width={"w-[300px]"} height={"h-[380px]"} />
          );
        })}
      </div>
    </div>
  );
}
