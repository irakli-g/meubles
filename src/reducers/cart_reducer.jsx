export const reducer = (state, action) => {
  if (action.type === "ADD_TO_CART") {
    const { id, color, amount, product } = action.payload;
    let tempProduct = state.cart.find((item) => item.id === id + color);
    if (tempProduct) {
      const tempCart = state.cart.map((item) => {
        if (item.id === id + color) {
          let newAmount = item.amount + amount;
          if (newAmount > item.max) {
            newAmount = item.max;
          }
          return {
            ...item,
            amount: newAmount,
          };
        } else {
          return item;
        }
      });
      return {
        ...state,
        cart: tempCart,
      };
    } else {
      const newItem = {
        id: id + color,
        name: product.name,
        color,
        amount,
        image: product.images[0].url,
        price: product.price,
        max: product.stock,
      };
      return {
        ...state,
        cart: [...state.cart, newItem],
      };
    }
  }
  if (action.type === "REMOVE_FROM_CART") {
    let tempCart = state.cart.filter((item) => {
      return item.id !== action.payload;
    });
    if (tempCart) {
      return {
        ...state,
        cart: tempCart,
      };
    } else {
      return {
        ...state,
      };
    }
  }
  if (action.type === "UPDATE_CART_AMOUNT") {
    const { id, update } = action.payload;
    let tempCart = state.cart.map((item) => {
      if (item.id === id) {
        if (update === "increase") {
          let newAmount = item.amount + 1;
          if (newAmount > item.max) {
            newAmount = item.max;
          }
          return {
            ...item,
            amount: newAmount,
          };
        } else if (update === "decrease") {
          let newAmount = item.amount - 1;
          if (newAmount < 1) {
            newAmount = 1;
          }
          return {
            ...item,
            amount: newAmount,
          };
        }
      }
      return item;
    });
    return {
      ...state,
      cart: tempCart,
    };
  }
  if (action.type === "UPDATE_CART_TOTALS") {
    const { total_amount, total_items } = state.cart.reduce(
      (total, current) => {
        const { amount, price } = current;
        total.total_items += amount;
        total.total_amount += price * amount;
        return total;
      },
      {
        total_items: 0,
        total_amount: 0,
      }
    );
    return {
      ...state,
      total_items,
      total_amount,
    };
  }
  if (action.type === "CLEAR_CART") {
    return {
      ...state,
      cart: [],
    };
  }
  throw new Error(`Such action ${action.type} was not handled in reducer`);
};
