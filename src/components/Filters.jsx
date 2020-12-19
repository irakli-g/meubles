import React from "react";
import { useFilterContext } from "../context/filters_context";
import { getUniqueValues } from "../utils/helpers";
import { AiOutlineCheck } from "react-icons/ai";

export const Filters = () => {
  const {
    filters: {
      text,
      category,
      company,
      color,
      max_price,
      min_price,
      price,
      shipping,
    },
    filterProducts,
    clearFilters,
    unfiltered_products,
  } = useFilterContext();

  const companies = getUniqueValues(unfiltered_products, "company");
  const categories = getUniqueValues(unfiltered_products, "category");
  const colors = getUniqueValues(unfiltered_products, "colors");

  return (
    <div className="filters">
      <form onSubmit={(e) => e.preventDefault()}>
        <div className="form-control">
          <input
            type="text"
            placeholder="search"
            name="text"
            value={text}
            onChange={(e) => filterProducts(e)}
          />
        </div>
        <div className="form-control">
          <h4>Categories</h4>
          {categories.map((item, index) => {
            return (
              <button
                name="category"
                className={item === category ? `btn active` : `btn`}
                key={index}
                onClick={(e) => {
                  filterProducts(e);
                }}
              >
                {item}
              </button>
            );
          })}
        </div>
        <div className="form-control">
          <h4>Companies</h4>
          <select
            name="company"
            className="form-control"
            value={company}
            onChange={(e) => {
              filterProducts(e);
            }}
          >
            {companies.map((item, index) => {
              return (
                <option key={index} value={item}>
                  {item}
                </option>
              );
            })}
          </select>
        </div>
        <div className="form-control">
          <h4>Colors</h4>
          <div className="btn-container">
            {colors.map((item, index) => {
              if (item === "all") {
                return (
                  <button
                    className={item === color ? "btn all active" : "btn all"}
                    data-color={item}
                    key={index}
                    name="color"
                    value={color}
                    onClick={(e) => {
                      filterProducts(e);
                    }}
                  >
                    {item}
                  </button>
                );
              }
              return (
                <button
                  className={item === color ? "btn active" : "btn"}
                  value={color}
                  onClick={(e) => {
                    filterProducts(e);
                  }}
                  data-color={item}
                  name="color"
                  style={{ backgroundColor: item }}
                  key={index}
                >
                  {item === color ? (
                    <AiOutlineCheck className="reactIcon check" />
                  ) : null}
                </button>
              );
            })}
          </div>
        </div>
        <div className="form-control">
          <label htmlFor="price">Price ${price / 100}</label>
          <input
            type="range"
            name="price"
            value={price}
            min={min_price}
            max={max_price}
            onChange={(e) => {
              filterProducts(e);
            }}
          />
        </div>
        <div className="form-control">
          <label htmlFor="shipping">Free Shipping</label>
          <input
            type="checkbox"
            name="shipping"
            checked={shipping}
            onChange={(e) => filterProducts(e)}
          />
        </div>
        <button className="btn clear" onClick={() => clearFilters()}>
          Clear Filters
        </button>
      </form>
    </div>
  );
};
