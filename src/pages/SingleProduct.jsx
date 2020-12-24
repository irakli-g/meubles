import React, { useEffect, lazy, Suspense } from "react";
import { useProductsContext } from "../context/products_context";
import { single_product_url } from "../utils/helpers";
import { useParams } from "react-router-dom";
import { ProductImamges } from "../components/SingleProductImages";
import { AddToCart } from "../components/AddToCart";
import { Loading } from "../components/Loading";
import { Reviews } from "../components/Reviews";
import { PageHero } from "../components/PageHero";
const Error = lazy(() => import("../pages/Error"));

const SingleProduct = () => {
  const {
    singleProduct: product,
    isSingleProduct_loading: loading,
    isSingleProduct_error: error,
    fetchSingleProduct,
  } = useProductsContext();

  const { id } = useParams();

  useEffect(() => {
    fetchSingleProduct(`${single_product_url}${id}`);
  }, [id]);

  if (loading) {
    return <Loading />;
  }
  if (error) {
    return <Error />;
  }

  const {
    company,
    description,
    name,
    price,
    reviews,
    stars,
    stock,
    images,
    id: sku,
  } = product;

  return (
    <>
      <PageHero title={name} product={product} />
      <section id="singleProduct">
        <ProductImamges images={images} />
        <div className="singleProductContent">
          <h1 className="heading">{name}</h1>
          <div id="singleProductDetails">
            <Reviews stars={stars} reviews={reviews} />
            <h3 className="price">${price / 100}</h3>
          </div>
          <p className="description">{description}</p>
          <div className="singleProductInfo">
            <p className="info">
              <span>Availability :</span>
              {stock > 0 ? `In Stock` : `Out of Stock`}
            </p>
            <p className="info">
              <span>Brand :</span>
              {company}
            </p>
            <p className="info">
              <span>SKU :</span>
              {sku}
            </p>
          </div>
          {stock > 0 && <AddToCart product={product} />}
        </div>
      </section>
    </>
  );
};

export default SingleProduct;
