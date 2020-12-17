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
  if (action.type === "GET_SINGLE_PRODUCT_BEGIN") {
    return {
      ...state,
      isSingleProduct_loading: true,
      isSingleProduct_error: false,
    };
  }
  if (action.type === "GET_SINGLE_PRODUCT_SUCCESS") {
    return {
      ...state,
      isSingleProduct_loading: false,
      isSingleProduct_error: false,
      singleProduct: action.payload,
    };
  }
  if (action.type === "GET_SINGLE_PRODUCT_ERROR") {
    return {
      isSingleProduct_error: true,
      isSingleProduct_loading: false,
    };
  }
  throw new Error(`Such action ${action.type} was not handled in reducer`);
};
