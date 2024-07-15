import Link from "next/link";

export default function Cart({ product, width, height }) {
  return (
    <div className="flex flex-col gap-4 relative group">
      {product.price.sale && (
        <p className="absolute top-2 right-2 bg-white p-2 z-10">On Sale.</p>
      )}
      <Link
        href={`/products/${product.id}`}
        className={`absolute inset-0 ${width} ${height} bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-opacity duration-300 flex items-center justify-center`}
      >
        <p className=" group-hover:block absolute hidden left-3 right-3 bottom-4 p-3 bg-white  text-black text-base text-center">
          EXPLORE MUG
        </p>
      </Link>
      <img src={product.image} className={`${width} ${height} object-cover `} />
      <p className="text-center text-[18px] font-bold text-gray-600 ">
        {product.title}
      </p>
      {product.price.sale ? (
        <div className="flex gap-2 justify-center items-center">
          <p className="text-[18px] text-red-600 ">${product.price.sale},00</p>
          <p className="line-through">${product.price.old},00</p>
        </div>
      ) : (
        <p className="text-center text-[18px]">${product.price.old},00</p>
      )}
    </div>
  );
}
