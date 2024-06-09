import { Outlet } from "react-router-dom";
import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";
import { useEffect, useState } from "react";
import SummaryApi from "../common";
import Context from "../Context/Context";
import { useDispatch } from "react-redux";
import { setUserDetails } from "../Store/userSlice";

const MainLayout = () => {
  const [cartProductCount, setCartProductCount] = useState(0);
  const dispatch = useDispatch();
  const fetchUserDetails = async () => {
    const dataResponse = await fetch(SummaryApi.current_user.url, {
      method: SummaryApi.current_user.method,
      credentials: "include",
    });
    const dataApi = await dataResponse.json();

    if (dataApi.success) {
      dispatch(setUserDetails(dataApi.data));
    }
    console.log(dataApi);
  };

  const fetchUserAddToCart = async () => {
    const dataResponse = await fetch(SummaryApi.countAddToCartProduct.url, {
      method: SummaryApi.countAddToCartProduct.method,
      credentials: "include",
    });

    const dataApi = await dataResponse.json();

    setCartProductCount(dataApi?.data?.count);
  };

  useEffect(() => {
    /**user Details */
    fetchUserDetails();
    /**user Details cart product */
    fetchUserAddToCart();
  }, []);

  return (
    <>
      <Context.Provider
        value={{
          fetchUserDetails, //user details data fetch
          fetchUserAddToCart,
          cartProductCount,
        }}
      >
        <Header />
        <main className="min-h-[calc(100vh-140px)] bg-white pt-20 font-ubuntu">
          <Outlet />
        </main>
        <Footer className="font-ubuntu" />
      </Context.Provider>
    </>
  );
};

export default MainLayout;
