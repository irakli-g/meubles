import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App.jsx";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { ProductsProvider } from "./context/products_context";
import { FilterContextProvider } from "./context/filters_context";
import { CartContextProvider } from "./context/cart_context";
import { FormContextProvider } from "./context/form_context";

ReactDOM.render(
  <BrowserRouter>
    <ProductsProvider>
      <FilterContextProvider>
        <CartContextProvider>
          <FormContextProvider>
            <App />
          </FormContextProvider>
        </CartContextProvider>
      </FilterContextProvider>
    </ProductsProvider>
  </BrowserRouter>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
