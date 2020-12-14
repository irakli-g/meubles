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
  throw new Error(`Such action ${action.type} was not handled in reducer`);
};
