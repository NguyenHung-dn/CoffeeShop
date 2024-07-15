// pages/product/[id].js
import products from "../../assets/data";
import Header from "@/components/Header";
const Product = ({ product }) => {
  const getRandomProducts = (productList, count) => {
    // const shuffled = productList.sort(() => 0.5 - Math.random());

    return productList.slice(1, count);
  };
  return (
    <section className="mb-[110px]">
      <section className="w-[940px] m-auto">
        <section className="flex gap-10 w-[940px] m-auto mt-[100px] ">
          <div className="relative">
            <img className="h-[460px] w-[460px] " src={product.image} />
            {product.price.sale && (
              <div className="absolute top-2 right-2 bg-white p-2">
                On Sale.
              </div>
            )}
          </div>
          <div className="w-[400px] mt-12 ml-8">
            <p className="text-[32px]">{product.title}</p>
            <p className=" text-[16px] text-gray-500 leading-[2.5] ">
              {product.disc}
            </p>
            {product.price.sale ? (
              <p> ${product.price.sale},00 </p>
            ) : (
              <p>${product.price.old},00</p>
            )}
            <p>QUANTITY</p>
            <div className="flex gap-4  ">
              <input className="w-[100px] h-[53px] border-[1px] p-3  " />
              <button className="bg-[#1D1F2E] text-white p-4 px-6 text-[12px] font-bold">
                ADD TO CART
              </button>
            </div>
          </div>
        </section>
        <section className="mt-[100px] flex">
          <div className="flex gap-4 flex-col w-[460px]">
            <p>DETAILS</p>
            <p>{product.detail}</p>
          </div>
          <div className="ml-[50px] flex flex-col gap-3 ">
            <p>DIMENSIONS</p>
            <ul className="flex flex-col gap-1">
              <li>
                <span>Lenght (in): </span>
                {product.dimensions.lenght},0
              </li>
              <li>
                <span>Height (in): </span> {product.dimensions.height},0
              </li>
              <li>
                <span>Width (in): </span> {product.dimensions.width},0
              </li>
              <li>
                <span>Weight (oz):</span>
                {product.dimensions.weight},0
              </li>
            </ul>
          </div>
        </section>
      </section>
      <section className="w-full flex mt-[110px]">
        <img
          className="h-[460px] w-[50%] object-cover "
          src="https://assets.website-files.com/5be96251aaba7a7b19ecdf69/5be96251aaba7a4a1aecdfab_Section%20Image.jpg"
        />
        <div className="bg-[#1d1f2e] h-[460px] w-[50%] text-white ">
          <div className="  pl-[70px] pt-[40px] w-[400px]">
            <p className="text-[24px] mb-3 ">Handmade by CoffeeStyle.</p>
            <p>
              The most versatile furniture system ever created. Designed to fit
              your life.
            </p>
            <p className="pt-5 pb-3">Premium Quality</p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in.
            </p>
            <p className="pt-5 pb-3">Gentle to the Environment</p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in.
            </p>
          </div>
        </div>
      </section>
    </section>
  );
};

export async function getServerSideProps(context) {
  const { params } = context;
  console.log(params);
  const productId = params.id;

  // Lấy dữ liệu sản phẩm từ tệp dữ liệu
  const product = products.find(
    (product) => product.id.toString() === productId
  );

  // Nếu không tìm thấy sản phẩm, trả về 404
  if (!product) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      product,
    },
  };
}

export default Product;
