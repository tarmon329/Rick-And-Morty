import React, { useEffect } from "react";

import Cards from "../../components/Cards/Cards";
import DropdownFilter from "../../components/Filters/DropdownFilter/DropdownFilter";
import Loader from "../../components/UI/Loader/Loader";
import { episodesOptions } from "../../data/filterOptions";

import useFetchMultiCharacters from "../../hooks/useFetchMultiCharacters";
import useFetchByParams from "../../hooks/useFetchByParams";
import createIdArr from "../../utils/createIdArr";

import styles from "./Episode.module.scss";
import useScrollCache from "../../hooks/useScrollCache";

const Episode = () => {
  const [fetchedData, isLoader] = useFetchByParams("episode");
  const [charactersData, getPageData] = useFetchMultiCharacters();
  useScrollCache("Episode");

  useEffect(() => {
    if (fetchedData.length !== 0 && !fetchedData.error) {
      getPageData(createIdArr("episode", fetchedData));
    }
  }, [getPageData, fetchedData]);

  return (
    <React.Fragment>
      {!(charactersData?.error || fetchedData?.error) && (
        <header>
          <h1 className="text-center mb-3 ubuntu">
            {fetchedData?.episode}:{" "}
            <span className={styles.name}>{fetchedData?.name}</span>
          </h1>
          <h1 className="text-center mb-3 ubuntu">
            Aired on:{" "}
            <span className={styles.date}>{fetchedData?.air_date}</span>
          </h1>
        </header>
      )}
      <div className="container">
        <div className="row">
          <DropdownFilter type={"Episode"} options={episodesOptions} />
          <div className="col-lg-8 col-12">
            <div className="row">
              {isLoader && <Loader />}
              {!isLoader && (
                <Cards
                  charactersData={charactersData}
                  error={charactersData?.error || fetchedData?.error}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Episode;
