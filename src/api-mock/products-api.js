//import products from "./products.json";

export const fetchProducts = async (data) => {
  // Simulate an API call by returning the products with a delay
  try {
    const resp = await fetch("https://fakestoreapi.com/products");
    const data = await resp.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};
