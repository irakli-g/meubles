export const filter_reducer = (state, action) => {
  if (action.type === "LOAD_PRODUCTS") {
    return {
      ...state,
      unfiltered_products: [...action.payload],
      filtered_products: [...action.payload],
    };
  }
  if (action.type === "SET_GRIDVIEW") {
    return {
      ...state,
      gridView: true,
    };
  }
  if (action.type === "SET_LISTVIEW") {
    return {
      ...state,
      gridView: false,
    };
  }
  if (action.type === "UPDATE_PRODUCTS") {
    return {
      ...state,
      sort: action.payload,
    };
  }
  if (action.type === "SORT_PRODUCTS") {
    let temporaryProducts = [...state.filtered_products];
    if (state.sort === "price-lowest") {
      temporaryProducts.sort((x, y) => x.price - y.price);
      return {
        ...state,
        filtered_products: temporaryProducts,
      };
    }
    if (state.sort === "price-highest") {
      temporaryProducts.sort((x, y) => y.price - x.price);
      return {
        ...state,
        filtered_products: temporaryProducts,
      };
    }
    if (state.sort === "name-a") {
      temporaryProducts.sort((x, y) => {
        return x.name.localeCompare(y.name);
      });
      return {
        ...state,
        filtered_products: temporaryProducts,
      };
    }
    if (state.sort === "name-z") {
      temporaryProducts.sort((x, y) => {
        return y.name.localeCompare(x.name);
      });
      return {
        ...state,
        filtered_products: temporaryProducts,
      };
    }
  }
  throw new Error(`Such action ${action.type} was not handled in reducer`);
};
