import SummaryApi from "../common";

const fetchCategoryProduct = async (category) => {
  const response = await fetch(SummaryApi.getCategoryProduct.url, {
    method: SummaryApi.getCategoryProduct.method,
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify({
      category: category,
    }),
  });

  const dataResponse = await response.json();

  return dataResponse;
};

export default fetchCategoryProduct;
