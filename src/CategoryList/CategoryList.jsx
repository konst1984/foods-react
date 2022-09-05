import React from "react";
import PropTypes from "prop-types";
import { CategoryItem } from "../CategoryItem";

const CategoryList = ({ catalog }) => {
  return (
    <div className="list">
      {catalog.map((item) => (
        <CategoryItem key={item.idCategory} {...item} />
      ))}
    </div>
  );
};

CategoryList.propTypes = {
  catalog: PropTypes.array,
};

CategoryList.defaultProps = {
  catalog: [],
};
export default CategoryList;
