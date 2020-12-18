import React from "react";
import { GridView } from "./GridView";
import { ListView } from "./ListView";
import { useFilterContext } from "../context/filters_context";

export const ProductsList = () => {
  const { filtered_products: products, gridView } = useFilterContext();
  if (!gridView) {
    return (
      <div className="listView">
        <ListView products={products} />
      </div>
    );
  }
  return (
    <div className="gridView">
      <GridView products={products} />
    </div>
  );
};
