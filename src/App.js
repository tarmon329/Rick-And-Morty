import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";

import { useEffect, useState } from "react";
import { flushSync } from "react-dom";

// import NavBar from "./components/NavBar/NavBar";
import Cards from "./components/Cards/Cards";
import DarkMode from "./components/UI/DarkMode/DarkMode";
import Filters from "./components/Filters/Filters";
import Loader from "./components/UI/Loader/Loader";
import Pagination from "./components/Pagination/Pagination";
import Search from "./components/Search/Search";
import useFetchCharacters from "./hooks/useFetchCharacters";

function App() {
  const [pageNumber, setPageNumber] = useState(1);
  const [nameFilter, setNameFilter] = useState("");
  const [isLoader, setIsLoader] = useState(true);
  const [{ info, results, error }, getPageData] = useFetchCharacters();

  const searchHandler = async (name) => {
    flushSync(() => {
      setIsLoader(true);
    });
    setPageNumber(1);
    await getPageData({ page: 1, name });
    setIsLoader(false);
  };

  const pageChangeHandler = async (data) => {
    flushSync(() => {
      setIsLoader(true);
    });
    const page = data.selected + 1;
    setPageNumber(page);
    await getPageData({ page, name: nameFilter });
    setIsLoader(false);
  };

  useEffect(() => {
    getPageData();
    setIsLoader(false);
  }, [getPageData]);

  // DELETE
  useEffect(() => {
    console.log(results);
  }, [results]);

  return (
    <div className="App">
      <h1 className="text-center ubuntu my-4">
        Rick & Morty <span className="text-primary">WiKi</span>
      </h1>

      <Search onSearch={searchHandler} setName={setNameFilter} />

      <div className="container">
        <div className="row">
          <Filters />
          <div className="col-8">
            <div className="row">
              {isLoader && <Loader />}
              {!isLoader && <Cards charactersData={results} error={error} />}
            </div>
          </div>
        </div>
      </div>
      <Pagination
        info={info}
        page={pageNumber}
        onPageChange={pageChangeHandler}
      />
      <DarkMode />
    </div>
  );
}

export default App;
