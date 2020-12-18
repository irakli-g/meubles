import React from "react";
import { ProductsList } from "../components/ProductsList";
import { Filters } from "../components/Filters";
import { Sort } from "../components/Sort";
import { useFilterContext } from "../context/filters_context";
import { PageHero } from "../components/PageHero";

export const Products = () => {
  const {
    filtered_products: products,
    gridView,
    setGrid,
    setList,
    sortProducts,
    sort,
  } = useFilterContext();

  return (
    <>
      <PageHero title={"Products"} />
      <section id="productsList">
        <Filters />
        <div className="productsListContent">
          <Sort
            gridView={gridView}
            setGrid={setGrid}
            setList={setList}
            sortProducts={sortProducts}
            sort={sort}
          />
          <ProductsList {...products} gridView={gridView} />
        </div>
      </section>
    </>
  );
};
