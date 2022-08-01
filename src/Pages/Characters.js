import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import useFetchCharacters from "../hooks/useFetchCharacters";

import Loader from "../components/UI/Loader/Loader";

import Cards from "../components/Cards/Cards";
import Filters from "../components/Filters/CharacterFilter/CharacterFilter";
import Pagination from "../components/UI/Pagination/Pagination";
import Search from "../components/Search/Search";

const Characters = () => {
  const [isLoader, setIsLoader] = useState(true);
  const { pagination, filter } = useSelector((state) => state);
  const [{ info, results, error }, getPageData] = useFetchCharacters();

  useEffect(() => {
    (async () => {
      setIsLoader(true);
      await getPageData({ ...filter, ...pagination });
      setIsLoader(false);
    })();
  }, [pagination, filter, getPageData]);

  // useEffect(() => {
  //   console.log(results);
  // }, [results]);

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
