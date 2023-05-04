import React, { useState, useEffect } from "react";
import { getAllCategories } from "../../api";
import { Preloader } from "../../Preloader";
import { CategoryList } from "../../CategoryList";

import debounce from "lodash.debounce";
import { Search } from "../../Search";

const Home = () => {
  const [catalog, setCatalog] = useState([]);
  const [filteredCatalog, setFilteredCatalog] = useState([]);
  const [search, setSearch] = useState("");

  const handleSearch = debounce((str) => {
    setSearch(str);
    setFilteredCatalog(
      filteredCatalog.filter((item) =>
        item.strCategory.toLowerCase().includes(str.toLowerCase())
      )
    );
  }, 500);

  useEffect(() => {
    getAllCategories().then((data) => {
      setCatalog(data.categories);
      setFilteredCatalog(
        search
          ? data.categories.filter((item) =>
              item.strCategory.toLowerCase().startsWith(search.toLowerCase())
            )
          : data.categories
      );
    });
  }, [search]);

  return (
    <>
      <Search handleSearch={handleSearch} />
      {!catalog.length ? (
        <Preloader />
      ) : (
        <CategoryList catalog={filteredCatalog} />
      )}
    </>
  );
};

export default Home;
