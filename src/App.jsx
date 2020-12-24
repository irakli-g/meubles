import React, { lazy, Suspense } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { Checkout } from "./pages/Checkout";
import { Message } from "./components/Message";
import { Loading } from "./components/Loading";
const Products = lazy(() => import("./pages/Products"));
const About = lazy(() => import("./pages/About"));
const Home = lazy(() => import("./pages/Home"));
const Cart = lazy(() => import("./pages/Cart"));
const Error = lazy(() => import("./pages/Error"));
const SingleProduct = lazy(() => import("./pages/SingleProduct"));
const Sidebar = lazy(() => import("./components/Sidebar"));

function App() {
  return (
    <>
      <Message />
      <Suspense fallback={<Loading />}>
        <Sidebar />
      </Suspense>
      <Navbar />
      <main>
        <Suspense fallback={<Loading />}>
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/products" exact element={<Products />} />
            <Route path="/about" exact element={<About />} />
            <Route path="/products/:id" exact element={<SingleProduct />} />
            <Route path="/cart" exact element={<Cart />} />
            <Route path="/checkout" exact element={<Checkout />} />
            <Route path="*" element={<Error />} />
          </Routes>
        </Suspense>
      </main>
      <Footer />
    </>
  );
}

export default App;
