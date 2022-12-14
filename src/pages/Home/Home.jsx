import React, { useState, useEffect } from "react";
import { getAllCategories } from "../../api";
import { Preloader } from "../../Preloader";
import { CategoryList } from "../../CategoryList";
import Search from "../../Search/Search";
import { useLocation, useNavigate } from "react-router-dom";

const Home = () => {
  const [catalog, setCatalog] = useState([]);
  const [filteredCatalog, setFilteredCatalog] = useState([]);
  const { pathname, search } = useLocation();
  const navigate = useNavigate();
  const handleSearch = (str) => {
    setFilteredCatalog(
      catalog.filter((item) =>
        item.strCategory.toLowerCase().includes(str.toLowerCase())
      )
    );
    navigate(
      {
        pathname,
        search: `?search=${str}`,
      },
      // `${pathname}?search=${str}`,
      { replace: true }
    );
  };

  useEffect(() => {
    getAllCategories().then((data) => {
      setCatalog(data.categories);
      setFilteredCatalog(
        search
          ? data.categories.filter((item) =>
              item.strCategory
                .toLowerCase()
                .includes(search.split("=")[1].toLowerCase())
            )
          : data.categories
      );
    });
  }, [search]);
  return (
    <>
      <Search cb={handleSearch} />
      {!catalog.length ? (
        <Preloader />
      ) : (
        <CategoryList catalog={filteredCatalog} />
      )}
    </>
  );
};

export default Home;
