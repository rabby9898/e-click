import { useState } from "react";
import productCategory from "../../Api/productCategories";
import UploadProduct from "../../Api/UploadProduct";
import { MdDelete } from "react-icons/md";
import DisplayImage from "../../Components/DisplayImage/DisplayImage";
import toast from "react-hot-toast";
import SummaryApi from "../../common";

const AddProducts = () => {
  const [products, setProducts] = useState({
    productName: "",
    brandName: "",
    category: "",
    productImage: [],
    description: "",
    price: "",
    sellingPrice: "",
  });
  const [openFullScreenImage, setOpenFullScreenImage] = useState(false);
  const [fullScreenImage, setFullScreenImage] = useState("");

  const handleUploadProduct = async (e) => {
    const file = e.target.files[0];

    const uploadImgCloudinary = await UploadProduct(file);
    setProducts((prev) => {
      return {
        ...prev,
        productImage: [...prev.productImage, uploadImgCloudinary.url],
      };
    });
    console.log("upload img info---->", uploadImgCloudinary);
  };
  const handleDeleteProductImage = async (index) => {
    const newProductImg = [...products.productImage];
    newProductImg.splice(index, 1);

    setProducts((prev) => {
      return {
        ...prev,
        productImage: [...newProductImg],
      };
    });
  };

  const handleOnChange = (e) => {
    const { name, value } = e.target;

    setProducts((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  // product to database
  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch(SummaryApi.uploadProduct.url, {
      method: SummaryApi.uploadProduct.method,
      credentials: "include",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(products),
    });

    const responseData = await response.json();

    if (responseData.success) {
      toast.success(responseData?.message);
      e.target.reset();
    }

    if (responseData.error) {
      toast.error(responseData?.message);
    }
  };
  return (
    <div className="grid bg-white rounded-lg shadow-xl w-11/12 md:w-9/12 lg:w-4/5 mx-auto my-8">
      <div className="flex justify-center">
        <div className="flex">
          <h1 className="text-gray-600 font-bold md:text-2xl text-xl">
            <span className="border-l-4 border-slate-900 pl-2">
              Upload Your Product
            </span>
          </h1>
        </div>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 mt-5 mx-7">
          <label className="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold">
            Product Name
          </label>
          <input
            className="py-2 px-3 rounded-lg border-2 border-slate-300 mt-1 focus:outline-none focus:ring-2 focus:border-transparent"
            type="text"
            placeholder="Name"
            name="productName"
            value={products.productName}
            onChange={handleOnChange}
            required
          />
        </div>
        <div className="grid grid-cols-1 mt-5 mx-7">
          <label className="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold">
            Brand Name
          </label>
          <input
            className="py-2 px-3 rounded-lg border-2 border-slate-300 mt-1 focus:outline-none focus:ring-2  focus:border-transparent"
            type="text"
            placeholder="Name"
            name="brandName"
            value={products.brandName}
            onChange={handleOnChange}
            required
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-8 mt-5 mx-7">
          <div className="grid grid-cols-1">
            <label className="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold">
              Price
            </label>
            <input
              className="py-2 px-3 rounded-lg border-2 border-slate-300 mt-1 focus:outline-none focus:ring-2  focus:border-transparent"
              type="number"
              placeholder="$"
              name="price"
              value={products.price}
              onChange={handleOnChange}
              required
            />
          </div>
          <div className="grid grid-cols-1">
            <label className="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold">
              Selling Price
            </label>
            <input
              className="py-2 px-3 rounded-lg border-2 border-slate-300 mt-1 focus:outline-none focus:ring-2  focus:border-transparent"
              type="number"
              placeholder="$"
              name="sellingPrice"
              value={products.sellingPrice}
              onChange={handleOnChange}
              required
            />
          </div>
        </div>

        <div className="grid grid-cols-1 mt-5 mx-7">
          <label htmlFor="category" className="mt-3">
            Category :
          </label>
          <select
            required
            name="category"
            className="p-2 bg-slate-100 border rounded"
            value={products.category}
            onChange={handleOnChange}
          >
            <option value={""} required>
              Select Category
            </option>
            {productCategory.map((el, index) => {
              return (
                <option value={el.value} key={el.value + index}>
                  {el.label}
                </option>
              );
            })}
          </select>
        </div>

        <div className="grid grid-cols-1 mt-5 mx-7">
          <label className="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold">
            Description
          </label>
          <textarea
            className="py-2 px-3 rounded-lg border-2 border-slate-300 mt-1 focus:outline-none focus:ring-2  focus:border-transparent"
            type="text"
            placeholder=""
            name="description"
            value={products.description}
            onChange={handleOnChange}
            required
          />
        </div>

        <div className="grid grid-cols-1 mt-5 mx-7">
          <label className="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold mb-1">
            Product Image
          </label>
          <div className="flex items-center justify-center w-full">
            <label className="flex flex-col border-4 border-dashed w-full h-32 hover:bg-gray-100 hover:border-slate-300 group">
              <div className="flex flex-col items-center justify-center pt-7">
                <svg
                  className="w-10 h-10 text-blue-400 group-hover:text-blue-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                  ></path>
                </svg>
                <p className="lowercase text-sm text-gray-400 group-hover:text-blue-600 pt-1 tracking-wider">
                  Select a photo
                </p>
              </div>
              <input
                type="file"
                className="hidden"
                onChange={handleUploadProduct}
                required
              />
            </label>
          </div>
          <div>
            {products?.productImage[0] ? (
              <div className="flex items-center gap-2">
                {products.productImage.map((el, index) => {
                  return (
                    // eslint-disable-next-line react/jsx-key
                    <div className="relative group">
                      <img
                        src={el}
                        alt={el}
                        width={80}
                        height={80}
                        className="bg-slate-100 border cursor-pointer"
                        onClick={() => {
                          setOpenFullScreenImage(true);
                          setFullScreenImage(el);
                        }}
                      />

                      <div
                        className="absolute bottom-0 right-0 p-1 text-white bg-red-600 rounded-full hidden group-hover:block cursor-pointer"
                        onClick={() => handleDeleteProductImage(index)}
                      >
                        <MdDelete />
                      </div>
                    </div>
                  );
                })}
              </div>
            ) : (
              <p className="text-red-600 text-xs">
                *Please upload product image
              </p>
            )}
          </div>
        </div>

        <div className="flex items-center justify-center  md:gap-8 gap-4 pt-5 pb-5">
          <button
            type="submit"
            className="w-full bg-slate-900 hover:bg-slate-700 rounded-lg shadow-xl font-medium text-white px-10 py-3"
          >
            Upload
          </button>
        </div>
      </form>
      {/***display image full screen */}
      {openFullScreenImage && (
        <DisplayImage
          onClose={() => setOpenFullScreenImage(false)}
          imgUrl={fullScreenImage}
        />
      )}
    </div>
  );
};

export default AddProducts;
