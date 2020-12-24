import React, { lazy, Suspense } from "react";
import { useFilterContext } from "../context/filters_context";
import { Loading } from "./Loading";
const ListView = lazy(() => import("./ListView"));
const GridView = lazy(() => import("./GridView"));

export const ProductsList = () => {
  const { filtered_products: products, gridView } = useFilterContext();
  if (!gridView) {
    return (
      <div className="listView">
        <Suspense fallback={<Loading />}>
          <ListView products={products} />
        </Suspense>
      </div>
    );
  }
  return (
    <div className="gridView">
      <Suspense fallback={<Loading />}>
        <GridView products={products} />
      </Suspense>
    </div>
  );
};
