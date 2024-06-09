import { useContext, useEffect, useState } from "react";
import SummaryApi from "../common";
import Context from "../Context/Context";
import { MdDelete } from "react-icons/md";
import PaymentForm from "../Components/CardForm/PaymentForm";
import { useSelector } from "react-redux";
const Cart = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const loadingCart = new Array(4).fill(null);
  const context = useContext(Context);
  const user = useSelector((state) => state.user?.user);

  /***cart data fetching***/
  const fetchData = async () => {
    const response = await fetch(SummaryApi.addToCartView.url, {
      method: SummaryApi.addToCartView.method,
      credentials: "include",
      headers: {
        "content-type": "application/json",
      },
    });

    const responseData = await response.json();

    if (responseData.success) {
      setData(responseData.data);
    }
  };

  const handleLoading = async () => {
    await fetchData();
  };

  useEffect(() => {
    setLoading(true);
    handleLoading();
    setLoading(false);
  }, []);

  /***cart increase func***/
  const increaseQty = async (id, qty) => {
    const response = await fetch(SummaryApi.updateQty.url, {
      method: SummaryApi.updateQty.method,
      credentials: "include",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        _id: id,
        quantity: qty + 1,
      }),
    });

    const responseData = await response.json();

    if (responseData.success) {
      fetchData();
    }
  };

  /***cart decrease func***/
  const decreaseQty = async (id, qty) => {
    if (qty >= 2) {
      const response = await fetch(SummaryApi.updateQty.url, {
        method: SummaryApi.updateQty.method,
        credentials: "include",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({
          _id: id,
          quantity: qty - 1,
        }),
      });

      const responseData = await response.json();

      if (responseData.success) {
        fetchData();
      }
    }
  };

  /***cart delete func***/
  const deleteCartProduct = async (id) => {
    const response = await fetch(SummaryApi.deleteCartProduct.url, {
      method: SummaryApi.deleteCartProduct.method,
      credentials: "include",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        _id: id,
      }),
    });

    const responseData = await response.json();

    if (responseData.success) {
      fetchData();
      context.fetchUserAddToCart();
    }
  };

  /***Summary cart: total qty, total amount func***/
  const totalQty = data.reduce(
    (previousValue, currentValue) => previousValue + currentValue.quantity,
    0
  );
  const totalPrice = data.reduce(
    (prev, curr) => prev + curr.quantity * curr?.productId?.price,
    0
  );
  return (
    <div className="container mx-auto h-auto">
      <div className="text-center text-lg my-3">
        {data.length === 0 && !loading && (
          <p className="bg-white py-5">No Data</p>
        )}
      </div>

      <div className="flex flex-col lg:flex-row gap-10 lg:justify-between p-4 shadow-xl h-auto md:h-[600px]">
        {/***view product */}
        <div className="w-full max-w-3xl">
          {loading
            ? loadingCart?.map((el, index) => {
                return (
                  <div
                    key={el + "Add To Cart Loading" + index}
                    className="w-full bg-slate-200 h-32 my-2 border border-slate-300 animate-pulse rounded"
                  ></div>
                );
              })
            : data.map((product, index) => {
                return (
                  <div
                    key={product?._id + "Add To Cart Loading"}
                    className="w-full bg-white h-40 my-2 border border-slate-300 shadow-xl rounded-md grid grid-cols-[128px,1fr]"
                  >
                    <div className="w-32 h-40 bg-slate-200">
                      <img
                        src={product?.productId?.productImage[0]}
                        className="w-full h-full object-scale-down mix-blend-multiply"
                      />
                    </div>
                    <div className="px-4 py-2 relative">
                      {/**delete product */}
                      <div
                        className="absolute right-0 text-red-600 rounded-full p-2 hover:bg-red-900 hover:text-white cursor-pointer"
                        onClick={() => deleteCartProduct(product?._id)}
                      >
                        <MdDelete className="text-xl" />
                      </div>

                      <h2 className="text-lg lg:text-xl text-ellipsis line-clamp-1 my-3">
                        {product?.productId?.productName}
                      </h2>
                      <p className="capitalize text-slate-500 my-3">
                        {product?.productId.category}
                      </p>
                      <div className="flex items-center justify-between">
                        <p className="text-slate-900 font-medium text-lg">
                          ${product?.productId?.price}
                        </p>
                        <p className="text-slate-600 font-semibold text-lg">
                          {product?.productId?.price * product?.quantity}
                        </p>
                      </div>
                      <div className="flex items-center gap-3 mt-1">
                        <button
                          className="border border-slate-900 text-slate-900 hover:bg-slate-900 hover:text-white w-6 h-6 flex justify-center items-center rounded "
                          onClick={() =>
                            decreaseQty(product?._id, product?.quantity)
                          }
                        >
                          -
                        </button>
                        <span>{product?.quantity}</span>
                        <button
                          className="border border-slate-900 text-slate-900 hover:bg-slate-500 hover:text-white w-6 h-6 flex justify-center items-center rounded "
                          onClick={() =>
                            increaseQty(product?._id, product?.quantity)
                          }
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
        </div>

        {/***summary  */}
        {user && (
          <div className="mt-5 lg:mt-0 w-full max-w-sm h-auto">
            {/* delivery method */}

            <div>
              <p className="mt-8 text-lg font-medium">Shipping Methods</p>
              <form className="mt-5 grid gap-6">
                <div className="relative">
                  <input
                    className="peer hidden"
                    id="radio_1"
                    type="radio"
                    name="radio"
                    checked
                  />
                  <span className="peer-checked:border-gray-700 absolute right-4 top-1/2 box-content block h-3 w-3 -translate-y-1/2 rounded-full border-8 border-gray-300 bg-white"></span>
                  <label
                    className="peer-checked:border-2 peer-checked:border-gray-700 peer-checked:bg-gray-50 flex cursor-pointer select-none rounded-lg border border-gray-300 p-4"
                    for="radio_1"
                  >
                    <img
                      className="w-14 object-contain"
                      src="https://i.ibb.co/YpTZL1G/hidden-arrow-fedex-logo.jpg"
                      alt=""
                    />
                    <div className="ml-5">
                      <span className="mt-2 font-semibold">Fedex Delivery</span>
                      <p className="text-slate-500 text-sm leading-6">
                        Delivery: 2-4 Days
                      </p>
                    </div>
                  </label>
                </div>
                <div className="relative">
                  <input
                    className="peer hidden"
                    id="radio_2"
                    type="radio"
                    name="radio"
                    checked
                  />
                  <span className="peer-checked:border-gray-700 absolute right-4 top-1/2 box-content block h-3 w-3 -translate-y-1/2 rounded-full border-8 border-gray-300 bg-white"></span>
                  <label
                    className="peer-checked:border-2 peer-checked:border-gray-700 peer-checked:bg-gray-50 flex cursor-pointer select-none rounded-lg border border-gray-300 p-4"
                    for="radio_2"
                  >
                    <img
                      className="w-14 object-contain"
                      src="https://i.ibb.co/0ZQfW0N/images.png"
                      alt=""
                    />
                    <div className="ml-5">
                      <span className="mt-2 font-semibold">DHL Delivery</span>
                      <p className="text-slate-500 text-sm leading-6">
                        Delivery: 2-4 Days
                      </p>
                    </div>
                  </label>
                </div>
              </form>
            </div>

            {loading ? (
              <div className="h-36 bg-slate-200 border border-slate-300 animate-pulse"></div>
            ) : (
              <div className="h-36 bg-white mt-10">
                <h2 className="text-white bg-slate-900 px-4 py-2">Summary</h2>
                <div className="flex items-center justify-between px-4 py-5 gap-2 font-medium text-lg text-slate-600">
                  <p className="">Quantity</p>
                  <p>{totalQty}</p>
                </div>

                <div className="flex items-center justify-between px-4 gap-2 font-medium text-lg text-slate-600">
                  <p>Total Price</p>
                  <p>{totalPrice}</p>
                </div>

                <label
                  htmlFor="my_modal_7"
                  className="btn bg-blue-600 p-2 py-3 text-white w-full mt-2"
                >
                  Checkout for Payment
                </label>
                {/* payment modal */}
                <input
                  type="checkbox"
                  id="my_modal_7"
                  className="modal-toggle"
                />
                <div className="modal" role="dialog">
                  <div className="modal-box">
                    {/* payment summary order  */}
                    <PaymentForm />
                  </div>
                  <label className="modal-backdrop" htmlFor="my_modal_7">
                    Close
                  </label>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
