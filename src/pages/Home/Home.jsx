import React, { useState, useEffect } from "react";
import { getAllCategories } from "../../api";
import { Preloader } from "../../Preloader";
import { CategoryList } from "../../CategoryList";

import debounce from "lodash.debounce";
import { Search } from "../../Search";
import { ErrorWrapper } from "../../ErrorWrapper";

const Home = () => {
  const [catalog, setCatalog] = useState([]);
  const [filteredCatalog, setFilteredCatalog] = useState([]);
  const [search, setSearch] = useState("");
  const [error, setError] = useState(false);

  const handleSearch = debounce((str) => {
    setSearch(str);
    setFilteredCatalog(
      filteredCatalog.filter((item) =>
        item.strCategory.toLowerCase().includes(str.toLowerCase())
      )
    );
  }, 500);

  useEffect(() => {
    getAllCategories()
      .then((data) => {
        setCatalog(data.categories);
        setFilteredCatalog(
          search
            ? data.categories.filter((item) =>
                item.strCategory.toLowerCase().startsWith(search.toLowerCase())
              )
            : data.categories
        );
      })
      .catch(() => setError(true));
  }, [search]);

  return (
    <ErrorWrapper error={error}>
      <Search handleSearch={handleSearch} />
      {!catalog.length ? (
        <Preloader />
      ) : (
        <CategoryList catalog={filteredCatalog} />
      )}
    </ErrorWrapper>
  );
};

export default Home;
