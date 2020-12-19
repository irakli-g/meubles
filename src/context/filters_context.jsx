import React, { useContext, useEffect, useReducer } from "react";
import { filter_reducer as reducer } from "../reducers/filters_reducer";
import { useProductsContext } from "./products_context";

const initialState = {
  unfiltered_products: [],
  filtered_products: [],
  gridView: false,
  sort: "price-lowest",
  filters: {
    text: "",
    category: "all",
    company: "all",
    color: "all",
    min_price: 0,
    max_price: 0,
    price: 0,
    shipping: false,
  },
};

const FilterContext = React.createContext();

export const FilterContextProvider = ({ children }) => {
  const { products } = useProductsContext();
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    dispatch({ type: "LOAD_PRODUCTS", payload: products });
  }, [products]);

  useEffect(() => {
    dispatch({ type: "FILTER_PRODUCTS" });
    dispatch({ type: "SORT_PRODUCTS" });
  }, [products, state.sort, state.filters]);

  const setGrid = () => {
    dispatch({ type: "SET_GRIDVIEW" });
  };
  const setList = () => {
    dispatch({ type: "SET_LISTVIEW" });
  };

  const sortProducts = (e) => {
    const value = e.target.value;
    dispatch({ type: "UPDATE_SORT", payload: value });
  };

  const filterProducts = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    if (name === "category") {
      value = e.target.textContent;
    }
    if (name === "color") {
      value = e.target.dataset.color;
    }
    if (name === "price") {
      value = Number(e.target.value);
    }
    if (name === "shipping") {
      value = e.target.checked;
      // if (value === false) {
      //   value = true;
      // } else {
      //   value = false;
      // }
    }
    dispatch({ type: "UPDATE_FILTER", payload: { name, value } });
  };

  const clearFilters = () => {
    dispatch({ type: "CLEAR_FILTER" });
  };

  return (
    <FilterContext.Provider
      value={{
        ...state,
        setGrid,
        setList,
        sortProducts,
        filterProducts,
        clearFilters,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
};

export const useFilterContext = () => {
  return useContext(FilterContext);
};
