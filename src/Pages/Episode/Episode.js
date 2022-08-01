import React, { useEffect } from "react";

import Cards from "../../components/Cards/Cards";
import DropdownFilter from "../../components/Filters/DropdownFilter/DropdownFilter";
import Loader from "../../components/UI/Loader/Loader";
import { episodesOptions } from "../../data/filterOptions";

import useFetchMultiCharacters from "../../hooks/useFetchMultiCharacters";
import useFetchByParams from "../../hooks/useFetchByParams";
import createIdArr from "../../utils/createIdArr";

import styles from "./Episode.module.scss";

const Episode = () => {
  const [fetchedData, isLoader] = useFetchByParams("episode");
  const [charactersData, getPageData] = useFetchMultiCharacters();

  useEffect(() => {
    if (fetchedData.length !== 0 && !fetchedData.error) {
      getPageData(createIdArr("episode", fetchedData));
    }
  }, [getPageData, fetchedData]);

  return (
    <div>
      {!(charactersData?.error || fetchedData?.error) && (
        <React.Fragment>
          <h1 className="text-center mb-3 ubuntu">
            {fetchedData?.episode}:{" "}
            <span className={styles.name}>{fetchedData?.name}</span>
          </h1>
          <h1 className="text-center mb-3 ubuntu">
            Aired on: {fetchedData?.air_date}
          </h1>
        </React.Fragment>
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
    </div>
  );
};

export default Episode;
