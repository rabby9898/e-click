// const url = `https://api.cloudinary.com/v1_1/${
//   import.meta.env.VITE_UPLOAD_IMG_CLOUDINARY
// }/image/upload`;
// dz8xyc0wo

const url = `https://api.cloudinary.com/v1_1/dz8xyc0wo/image/upload`;

const UploadProduct = async (image) => {
  const formData = new FormData();
  formData.append("file", image);
  formData.append("upload_preset", "eclick-product");

  const dataResponse = await fetch(url, {
    method: "post",
    body: formData,
  });
  return dataResponse.json();
};

export default UploadProduct;
