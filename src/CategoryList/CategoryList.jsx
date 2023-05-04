import React from "react";
import PropTypes from "prop-types";
import { CategoryItem } from "../CategoryItem";
import cn from "./CategoryList.module.css";

const CategoryList = ({ catalog }) => {
  return (
    <>
      {catalog.length ? (
        <div className={cn.list}>
          {catalog.map((item) => (
            <CategoryItem key={item.idCategory} {...item} />
          ))}
        </div>
      ) : (
        <h1 className={cn["title-search"]}>
          Nothing was found for your query, change the query and in repeat the
          search again
        </h1>
      )}
    </>
  );
};

CategoryList.propTypes = {
  catalog: PropTypes.array,
};

CategoryList.defaultProps = {
  catalog: [],
};
export default CategoryList;
