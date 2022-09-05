import { useState } from "react";
import PropTypes from "prop-types";

const Search = ({ cb }) => {
  const [value, setValue] = useState("");

  const handleKey = (e) => {
    if (e.key === "Enter") {
      handleSubmit();
    }
  };

  const handleSubmit = () => {
    cb(value);
  };
  return (
    <div className="row">
      <div className="input-field col s12">
        <input
          type="search"
          id="search-field"
          placeholder="search"
          onKeyDown={handleKey}
          onChange={(e) => setValue(e.target.value)}
          value={value}
        />
        <button className="btn btn-search" onClick={handleSubmit}>
          Search
        </button>
      </div>
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
