import { useEffect, useState } from "react";
import SummaryApi from "../../common";
import AdminProductCard from "../../Components/AdminProductCard/AdminProductCard";

const AllProducts = () => {
  const [allProduct, setAllProduct] = useState([]);

  const fetchAllProduct = async () => {
    const response = await fetch(SummaryApi.allProducts.url);
    const dataResponse = await response.json();

    console.log("product data", dataResponse);

    setAllProduct(dataResponse?.data || []);
  };

  useEffect(() => {
    fetchAllProduct();
  }, []);
  return (
    <div>
      <div className="flex flex-wrap my-10 gap-5 py-4 h-[calc(100vh-190px)] overflow-y-scroll">
        {allProduct.map((product, index) => {
          return (
            // eslint-disable-next-line react/jsx-key
            <AdminProductCard
              data={product}
              key={index + "allProduct"}
              fetchdata={fetchAllProduct}
            />
          );
        })}
      </div>
    </div>
  );
};

export default AllProducts;
