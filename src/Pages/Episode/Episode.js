import React, { useEffect } from "react";

import Cards from "../../components/Cards/Cards";
import DropdownFilter from "../../components/Filters/DropdownFilter/DropdownFilter";
import Loader from "../../components/UI/Loader/Loader";
// import { EPISODESOPTIONS } from "../../constants/constants";

import useFetchByParams from "../../hooks/useFetchByParams";
import useScrollCache from "../../hooks/useScrollCache";

import createIdArr from "../../utils/createIdArr";

import styles from "./Episode.module.scss";

import { EPISODE, EPISODELOWER } from "../../constants/constants";
import useFetchCharacters from "../../hooks/useFetchCharacters";
import useFetch from "../../hooks/useFetch";
import fetchAllEpisodes from "../../api/fetchAllEpisodes";

const Episode = () => {
  const [fetchedData, isLoader] = useFetchByParams(EPISODELOWER);
  const [charactersData, getPageData] = useFetchCharacters();
  const setAllowCache = useScrollCache(EPISODE);

  const episodesOptions = useFetch(fetchAllEpisodes);

  useEffect(() => {
    (async () => {
      if (fetchedData.length !== 0 && !fetchedData.error) {
        await getPageData(createIdArr(EPISODELOWER, fetchedData));
        setAllowCache(true);
      }
    })();
  }, [getPageData, fetchedData, setAllowCache]);

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
          <DropdownFilter type={EPISODE} options={episodesOptions} />
          <div className={`${styles.row} col-lg-8 col-12`}>
            <div className="row justify-content-start">
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
