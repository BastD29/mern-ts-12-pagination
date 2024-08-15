import { FC } from "react";
import style from "./Filter.module.scss";

const Filter: FC = () => {
  const handleFilter = () => {};

  return (
    <div className={style["filter"]}>
      <div className={style["filter__filter"]}>
        <label htmlFor="name">Name</label>
        <input
          type="search"
          name="name"
          placeholder="Name"
          onChange={handleFilter}
          //   value={filters.name || ""}
        />
      </div>
      <div className={style["filter__filter"]}>
        <label htmlFor="inStock">In stock</label>
        <input
          type="checkbox"
          name="inStock"
          onChange={handleFilter}
          //   checked={filters.inStock === "true"}
        />
      </div>
      <div className={style["filter__filter"]}>
        <label htmlFor="price">Price</label>
        <input
          type="range"
          name="price"
          min="0"
          max="1200"
          onChange={handleFilter}
          //   value={filters.price || ""}
        />
        {/* <span>{filters.price || ""}</span> */}
      </div>
      <div className={style["filter__filter"]}>
        <label htmlFor="category">Category</label>
        <select
          name="category"
          onChange={handleFilter}
          //   value={filters.category || ""}
        >
          <option value="">All Categories</option>
          <option value="Electronics">Electronics</option>
          <option value="Literature">Literature</option>
          <option value="Transportation">Transportation</option>
          <option value="Accessories">Accessories</option>
          <option value="Kitchenware">Kitchenware</option>
        </select>
      </div>
    </div>
  );
};

export default Filter;
