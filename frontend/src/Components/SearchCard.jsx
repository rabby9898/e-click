import { useContext } from "react";
import Context from "../Context/Context";
import addToCart from "../Api/addToCart";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import scrollTop from "../Api/ScrollTop";

const SearchCard = ({ loading, data = [] }) => {
  const loadingList = new Array(13).fill(null);
  const { fetchUserAddToCart } = useContext(Context);

  const handleAddToCart = async (e, id) => {
    await addToCart(e, id);
    fetchUserAddToCart();
  };
  return (
    <div className="w-full grid grid-cols-[repeat(auto-fit,minmax(250px,300px))] justify-center md:justify-evenly md:gap-4 overflow-x-scroll scrollbar-none transition-all">
      {loading
        ? loadingList.map((product, index) => {
            return (
              <div
                key={index}
                className="w-full min-w-[280px]  md:min-w-[320px] max-w-[280px] md:max-w-[320px]  bg-white rounded-sm shadow "
              >
                <div className="bg-slate-200 h-48 p-4 min-w-[280px] md:min-w-[145px] flex justify-center items-center animate-pulse"></div>
                <div className="p-0 md:p-4 grid gap-3">
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
        : data.map((product, index) => {
            return (
              <Link
                key={index}
                to={"/product/" + product?._id}
                className="w-full min-w-[230px] md:min-w-[320px] max-w-[280px] md:max-w-[320px]  bg-white rounded-xl shadow-xl my-6 border border-gray-200 hover:bg-gray-100 p-2 md:p-4"
                onClick={scrollTop}
              >
                <div className="bg-slate-200 h-48 min-w-[230px] md:min-w-[145px] flex justify-center items-center rounded-t-xl md:rounded-xl">
                  <img
                    src={product.productImage[0]}
                    className="w-full object-scale-down h-full hover:scale-110 transition-all mix-blend-multiply"
                  />
                </div>
                <div className="p-2 md:p-4 grid gap-3 py-8">
                  <h2 className="font-medium text-base md:text-xl text-ellipsis line-clamp-1 text-slate-900">
                    {product?.productName}
                  </h2>

                  <h4 className="flex justify-between items-center font-medium text-base md:text-base text-ellipsis line-clamp-1 text-gray-400 my-1">
                    <span className="bg-slate-900 text-white px-3 rounded-full inline-block w-fit my-2">
                      {product?.category}
                    </span>
                    {product?.brandName}
                  </h4>
                  <p className="my-4">
                    <span className="text-lg md:text-3xl font-bold text-slate-900">
                      ${product?.price}
                    </span>
                    <span className="text-sm text-slate-900 line-through">
                      {" "}
                      ${product?.sellingPrice}
                    </span>
                  </p>

                  <button
                    className="flex items-center justify-center rounded-md bg-slate-900 px-0 md:px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-blue-300"
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
  );
};

export default SearchCard;
