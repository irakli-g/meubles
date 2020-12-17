import React, { useContext, useEffect, useReducer } from "react";
import { reducer } from "../reducers/products_reducer";
import { products_url } from "../utils/helpers";

const initialState = {
  isSidebarOpen: false,
  isLoading: false,
  products: [],
  featured_products: [],
  isErro: false,
  singleProduct: {},
  isSingleProduct_loading: false,
  isSingleProduct_error: false,
};

const ProductsContext = React.createContext();

export const ProductsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const openSidebar = () => {
    dispatch({ type: "OPEN_SIDEBAR" });
  };

  const closeSidebar = () => {
    dispatch({ type: "CLOSE_SIDEBAR" });
  };

  const fetchData = async (url) => {
    dispatch({ type: "GET_PRODUCTS_BEGIN" });
    try {
      const response = await fetch(url);
      const data = await response.json();
      dispatch({ type: "GET_PRODUCTS_SUCCESS", payload: data });
    } catch (e) {
      dispatch({ type: "GET_PRODUCTS_ERROR" });
    }
  };

  const fetchSingleProduct = async (url) => {
    dispatch({ type: "GET_SINGLE_PRODUCT_BEGIN" });
    try {
      const response = await fetch(url);
      const data = await response.json();
      dispatch({ type: "GET_SINGLE_PRODUCT_SUCCESS", payload: data });
    } catch (e) {
      dispatch({ type: "GET_SINGLE_PRODUCT_ERROR" });
    }
  };

  useEffect(() => {
    fetchData(products_url);
  }, []);

  return (
    <ProductsContext.Provider
      value={{
        ...state,
        openSidebar,
        closeSidebar,
        fetchSingleProduct,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
};

export const useProductsContext = () => {
  return useContext(ProductsContext);
};
