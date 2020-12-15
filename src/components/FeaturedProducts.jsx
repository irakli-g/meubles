import React from "react";
import { Loading } from "./Loading";
import { useProductsContext } from "../context/products_context";
import { Link } from "react-router-dom";
import { FeaturedProduct } from "./FeaturedProduct";

export const FeaturedProducts = () => {
  const {
    isLoading,
    isError,
    featured_products: products,
  } = useProductsContext();

  if (isLoading) {
    return <Loading />;
  }
  if (isError) {
    return <h2 className="error-heading">There was an error...</h2>;
  }
  return (
    <section id="featuredProducts">
      <h2 className="featuredProductsHeading">Featured Products</h2>
      <div className="underline"></div>
      <div className="featuredProductsBox">
        {products.slice(0, 3).map((item) => {
          return <FeaturedProduct key={item.id} {...item} />;
        })}
      </div>
      <button className="btn">
        <Link to="/products">All Products</Link>
      </button>
    </section>
  );
};
