export const reducer = (state, action) => {
  if (action.type === "OPEN_SIDEBAR") {
    return {
      ...state,
      isSidebarOpen: true,
    };
  }
  if (action.type === "CLOSE_SIDEBAR") {
    return {
      ...state,
      isSidebarOpen: false,
    };
  }
  if (action.type === "GET_PRODUCTS_BEGIN") {
    return {
      ...state,
      isLoading: true,
    };
  }
  if (action.type === "GET_PRODUCTS_ERROR") {
    return {
      ...state,
      isError: true,
    };
  }
  if (action.type === "GET_PRODUCTS_SUCCESS") {
    const featured_products = action.payload.filter(
      (item) => item.featured === true
    );
    return {
      ...state,
      isLoading: false,
      products: action.payload,
      featured_products,
    };
  }
  throw new Error(`Such action ${action.type} was not handled in reducer`);
};
