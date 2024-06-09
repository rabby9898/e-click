/* eslint-disable react/jsx-key */
import { useContext, useEffect, useRef, useState } from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";
import { Link } from "react-router-dom";
import fetchCategoryProduct from "../../Api/fetchCategoryProduct";
import addToCart from "../../Api/addToCart";
import Context from "../../Context/Context";
import { FaShoppingCart } from "react-icons/fa";
import scrollTop from "../../Api/ScrollTop";
const VerticalCardProduct = ({ category, heading }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const loadingList = new Array(13).fill(null);

  const scrollElement = useRef();

  const { fetchUserAddToCart } = useContext(Context);

  const handleAddToCart = async (e, id) => {
    await addToCart(e, id);
    fetchUserAddToCart();
  };

  const fetchData = async () => {
    setLoading(true);
    const categoryProduct = await fetchCategoryProduct(category);
    setLoading(false);

    console.log("horizontal data", categoryProduct.data);
    setData(categoryProduct?.data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const scrollRight = () => {
    scrollElement.current.scrollLeft += 300;
  };
  const scrollLeft = () => {
    scrollElement.current.scrollLeft -= 300;
  };

  return (
    <div className="container mx-auto px-4 my-10 relative">
      <h2 className="text-2xl font-semibold py-4">{heading}</h2>

      <div
        className="flex items-center gap-4 md:gap-6 overflow-x-scroll scrollbar-none transition-all"
        ref={scrollElement}
      >
        <button
          className="bg-white shadow-md rounded-full p-1 absolute left-0 text-lg hidden md:block"
          onClick={scrollLeft}
        >
          <FaAngleLeft />
        </button>
        <button
          className="bg-white shadow-md rounded-full p-1 absolute right-0 text-lg hidden md:block"
          onClick={scrollRight}
        >
          <FaAngleRight />
        </button>

        {loading
          ? loadingList.map(() => {
              return (
                <div className="w-full min-w-[280px]  md:min-w-[320px] max-w-[280px] md:max-w-[320px]  bg-white rounded-sm shadow ">
                  <div className="bg-slate-200 h-48 p-4 min-w-[280px] md:min-w-[145px] flex justify-center items-center animate-pulse"></div>
                  <div className="p-4 grid gap-3">
                    <h2 className="font-medium text-base md:text-lg text-ellipsis line-clamp-1 text-black p-1 py-2 animate-pulse rounded-full bg-slate-200"></h2>
                    <p className="capitalize text-slate-500 p-1 animate-pulse rounded-full bg-slate-200  py-2"></p>
                    <div className="flex gap-3">
                      <p className="text-red-600 font-medium p-1 animate-pulse rounded-full bg-slate-200 w-full  py-2"></p>
                      <p className="text-slate-500 line-through p-1 animate-pulse rounded-full bg-slate-200 w-full  py-2"></p>
                    </div>
                    <button className="text-sm  text-white px-3  rounded-full bg-slate-200  py-2 animate-pulse"></button>
                  </div>
                </div>
              );
            })
          : data.map((product) => {
              return (
                <Link
                  to={"product/" + product?._id}
                  className="w-full min-w-[280px] md:min-w-[320px] max-w-[280px] md:max-w-[320px]  bg-white rounded-xl shadow-xl my-6 border border-gray-200 hover:bg-gray-100 px-0 md:px-4"
                  onClick={scrollTop}
                >
                  <div className="bg-slate-200 h-48 mt-0 md:mt-4 min-w-[280px] md:min-w-[145px] flex justify-center items-center rounded-t-xl md:rounded-xl">
                    <img
                      src={product.productImage[0]}
                      className="object-scale-down h-full  hover:scale-110 transition-all mix-blend-multiply "
                    />
                  </div>
                  <div className="p-4 grid gap-3 py-8">
                    <h2 className="font-medium text-base md:text-xl text-ellipsis line-clamp-1 text-slate-900">
                      {product?.productName}
                    </h2>

                    <h4 className="flex justify-between items-center font-medium text-base md:text-base text-ellipsis line-clamp-1 text-gray-400 my-1">
                      <span className="bg-slate-500 text-white px-3 rounded-full inline-block w-fit my-2">
                        {product?.category}
                      </span>
                      {product?.brandName}
                    </h4>
                    <p className="my-4">
                      <span className="text-3xl font-bold text-slate-900">
                        ${product?.price}
                      </span>
                      <span className="text-sm text-slate-900 line-through">
                        {" "}
                        ${product?.sellingPrice}
                      </span>
                    </p>

                    <button
                      className="flex items-center justify-center rounded-md bg-slate-900 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-blue-300"
                      onClick={(e) => handleAddToCart(e, product?._id)}
                    >
                      <span className="flex justify-center items-center gap-2">
                        <FaShoppingCart /> Add to Cart
                      </span>
                    </button>
                  </div>
                </Link>
              );
            })}
      </div>
    </div>
  );
};

export default VerticalCardProduct;
