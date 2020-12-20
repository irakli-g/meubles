import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import { About } from "./pages/About";
import { Home } from "./pages/Home";
import { Products } from "./pages/Products";
import { SingleProduct } from "./pages/SingleProduct";
import { Cart } from "./pages/Cart";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { Error } from "./pages/Error";
import { Sidebar } from "./components/Sidebar";

function App() {
  return (
    <>
      <Sidebar />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/about" exact element={<About />} />
          <Route path="/products" exact element={<Products />} />
          <Route path="/products/:id" exact element={<SingleProduct />} />
          <Route path="/cart" exact element={<Cart />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
