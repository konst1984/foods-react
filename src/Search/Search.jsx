import { useState } from "react";
import PropTypes from "prop-types";

import cn from "./Search.module.css";

const Search = ({ handleSearch }) => {
  const [value, setValue] = useState("");

  const handleChange = (e) => {
    setValue(e.target.value);
    handleSearch(e.target.value);
  };

  return (
    <div className={cn.row}>
      <input
        type="text"
        className={cn["input-field"]}
        placeholder="search category"
        value={value}
        onChange={handleChange}
      />
    </div>
  );
};

Search.propTypes = {
  cb: PropTypes.func,
};

Search.defaultProps = {
  cb: () => {},
};

export default Search;
