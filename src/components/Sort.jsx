import React from "react";
import { BsGrid } from "react-icons/bs";
import { VscListFlat } from "react-icons/vsc";

export const Sort = (props) => {
  const { gridView, setGrid, setList, sortProducts, sort } = props;
  return (
    <div className="sort">
      <div className="views">
        <BsGrid
          className={gridView ? `reactIcon active` : `reactIcon`}
          onClick={() => {
            setGrid();
          }}
        />
        <VscListFlat
          className={!gridView ? `reactIcon active` : `reactIcon`}
          onClick={() => {
            setList();
          }}
        />
      </div>
      <select
        name="sort"
        id="sort"
        value={sort}
        onChange={(e) => {
          sortProducts(e);
        }}
      >
        <option value="price-lowest">Price (Lowest)</option>
        <option value="price-highest">Price (Highest)</option>
        <option value="name-a">Name (A-Z)</option>
        <option value="name-z">Name (Z-A)</option>
      </select>
    </div>
  );
};
