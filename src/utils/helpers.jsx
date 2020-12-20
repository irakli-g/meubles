export const products_url = "https://course-api.com/react-store-products";
export const single_product_url = `https://course-api.com/react-store-single-product?id=`;
export const countries_url = "https://restcountries.eu/rest/v2/all";

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

const chars = "123SDWQ45SFWJTNMGM2454NKJSJFH08902HWNQW243REUIDHUISCXGDF12";
const char1 = chars.charAt(Math.floor(Math.random() * chars.length));
const char2 = chars.charAt(Math.floor(Math.random() * chars.length));
const char3 = chars.charAt(Math.floor(Math.random() * chars.length));
const char4 = chars.charAt(Math.floor(Math.random() * chars.length));
const char5 = chars.charAt(Math.floor(Math.random() * chars.length));
const char6 = chars.charAt(Math.floor(Math.random() * chars.length));
const char7 = chars.charAt(Math.floor(Math.random() * chars.length));
const char8 = chars.charAt(Math.floor(Math.random() * chars.length));
const char9 = chars.charAt(Math.floor(Math.random() * chars.length));

export const order_id = `${char1}${char2}${char3}${char4}${char5}${char6}${char7}${char8}${char9}`;
