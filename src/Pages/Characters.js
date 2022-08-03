import { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import useFetchCharacters from "../hooks/useFetchCharacters";

import Loader from "../components/UI/Loader/Loader";

import Cards from "../components/Cards/Cards";
import Filters from "../components/Filters/CharacterFilter/CharacterFilter";
import Pagination from "../components/UI/Pagination/Pagination";
import Search from "../components/Search/Search";

import useScrollCache from "../hooks/useScrollCache";

const Characters = () => {
  const firstFetch = useRef(true);
  const { pagination, filter } = useSelector((state) => state);
  const [{ info, results, error }, getPageData, isLoader] =
    useFetchCharacters();
  const { currentScroll, unregister, register } = useScrollCache();

  useEffect(() => {
    (async () => {
      unregister();
      await getPageData({ ...filter, ...pagination });
      if (firstFetch) {
        setTimeout(() => {
          window.scrollTo({ top: currentScroll, behavior: "instant" });
        }, 5);
        firstFetch.current = false;
      }
      register();
    })();
  }, [
    pagination,
    filter,
    getPageData,
    unregister,
    register,
    firstFetch,
    currentScroll,
  ]);

  return (
    <div>
      <h1 className="text-center mb-3 ubuntu">Characters</h1>
      <Search />
      <div className="container">
        <div className="row">
          <Filters />
          <div className="col-lg-8 col-12">
            <div className="row">
              {isLoader && <Loader />}
              {!isLoader && <Cards charactersData={results} error={error} />}
            </div>
          </div>
        </div>
      </div>
      {!isLoader && <Pagination info={info} page={pagination.page} />}
    </div>
  );
};

export default Characters;
