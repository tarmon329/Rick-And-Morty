import React, { useEffect } from "react";

import Loader from "../../components/UI/Loader/Loader";
import DropdownFilter from "../../components/Filters/DropdownFilter/DropdownFilter";

import useFetchMultiCharacters from "../../hooks/useFetchMultiCharacters";
import useFetchByParams from "../../hooks/useFetchByParams";
import createLocationCharacters from "../../utils/createLocationCharacters";

import createIdArr from "../../utils/createIdArr";

import { locationsOptions } from "../../constants/filterOptions";

import styles from "./Location.module.scss";
import useScrollCache from "../../hooks/useScrollCache";

const Location = () => {
  const [fetchedData, isLoader] = useFetchByParams("location");
  const [charactersData, getPageData] = useFetchMultiCharacters();
  useScrollCache("Location");

  useEffect(() => {
    if (
      fetchedData.length !== 0 &&
      !fetchedData.error &&
      fetchedData.residents.length !== 0
    ) {
      getPageData(createIdArr("location", fetchedData));
    }
  }, [getPageData, fetchedData]);

  const characterDisplay = createLocationCharacters(
    fetchedData,
    charactersData
  );

  return (
    <React.Fragment>
      {!(charactersData?.error || fetchedData?.error) && (
        <header>
          <h1 className="text-center mb-3 ubuntu">{fetchedData?.name}</h1>

          <h2 className="text-center mb-3 ubuntu">
            Dimention:{" "}
            <span className={styles.name}>
              {fetchedData?.dimension ? fetchedData.dimension : `unknown`}
            </span>
          </h2>

          <h3 className="text-center mb-3 ubuntu">
            Type: <span className={styles.name}>{fetchedData?.type}</span>
          </h3>
        </header>
      )}
      <div className="container">
        <div className="row ">
          <DropdownFilter type={"Location"} options={locationsOptions} />
          <div className="col-lg-8 col-12">
            <div className="row justify-content-start ">
              {isLoader && <Loader />}
              {!isLoader && characterDisplay}
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Location;
