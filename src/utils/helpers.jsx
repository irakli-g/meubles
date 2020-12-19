export const products_url = "https://course-api.com/react-store-products";
export const single_product_url = `https://course-api.com/react-store-single-product?id=`;

export const getUniqueValues = (arr, name) => {
  let data = arr.map((item) => {
    return item[name];
  });
  if (name === "colors") {
    data = data.flat();
  }
  data = ["all", ...new Set(data)];
  return data;
};
