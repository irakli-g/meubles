export const filter_reducer = (state, action) => {
  if (action.type === "LOAD_PRODUCTS") {
    let maxPrice = action.payload.map((item) => {
      return item.price;
    });
    maxPrice = Math.max(...maxPrice);
    return {
      ...state,
      unfiltered_products: [...action.payload],
      filtered_products: [...action.payload],
      filters: {
        ...state.filters,
        max_price: maxPrice,
        price: maxPrice,
      },
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
  if (action.type === "UPDATE_SORT") {
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
  if (action.type === "UPDATE_FILTER") {
    const { name, value } = action.payload;
    return {
      ...state,
      filters: {
        ...state.filters,
        [name]: value,
      },
    };
  }
  if (action.type === "FILTER_PRODUCTS") {
    const { text, category, shipping, company, price, color } = state.filters;
    let tempProducts = state.unfiltered_products;
    if (text) {
      tempProducts = tempProducts.filter((item) => {
        return item.name.toLowerCase().startsWith(text);
      });
    }
    if (category !== "all") {
      tempProducts = tempProducts.filter((item) => {
        return item.category.toLowerCase() === category.toLowerCase();
      });
    }
    if (company !== "all") {
      tempProducts = tempProducts.filter((item) => {
        return item.company.toLowerCase() === company.toLowerCase();
      });
    }
    if (color !== "all") {
      tempProducts = tempProducts.filter((item) => {
        return item.colors.find((c) => c === color);
      });
    }
    if (price) {
      tempProducts = tempProducts.filter((item) => {
        return Number(item.price) <= Number(price);
      });
    }
    if (shipping) {
      tempProducts = tempProducts.filter((item) => {
        return item.shipping === shipping;
      });
    }

    return {
      ...state,
      filtered_products: tempProducts,
    };
  }
  if (action.type === "CLEAR_FILTER") {
    return {
      ...state,
      filters: {
        ...state.filters,
        text: "",
        category: "all",
        company: "all",
        color: "all",
        price: state.filters.max_price,
        shipping: false,
      },
    };
  }
  throw new Error(`Such action ${action.type} was not handled in reducer`);
};
