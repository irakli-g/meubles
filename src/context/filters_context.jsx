import React, { useContext, useEffect, useReducer } from "react";
import { filter_reducer as reducer } from "../reducers/filters_reducer";
import { useProductsContext } from "./products_context";

const initialState = {
  unfiltered_products: [],
  filtered_products: [],
  gridView: false,
  sort: "price-lowest",
};

const FilterContext = React.createContext();

export const FilterContextProvider = ({ children }) => {
  const { products } = useProductsContext();
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    dispatch({ type: "LOAD_PRODUCTS", payload: products });
  }, [products]);

  useEffect(() => {
    dispatch({ type: "SORT_PRODUCTS" });
  }, [products, state.sort]);

  const setGrid = () => {
    dispatch({ type: "SET_GRIDVIEW" });
  };
  const setList = () => {
    dispatch({ type: "SET_LISTVIEW" });
  };

  const sortProducts = (e) => {
    const value = e.target.value;
    dispatch({ type: "UPDATE_PRODUCTS", payload: value });
  };

  return (
    <FilterContext.Provider
      value={{ ...state, setGrid, setList, sortProducts }}
    >
      {children}
    </FilterContext.Provider>
  );
};

export const useFilterContext = () => {
  return useContext(FilterContext);
};
