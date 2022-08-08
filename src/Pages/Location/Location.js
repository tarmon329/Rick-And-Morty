import React, { useEffect } from "react";

import Loader from "../../components/UI/Loader/Loader";
import DropdownFilter from "../../components/Filters/DropdownFilter/DropdownFilter";

import useFetchByParams from "../../hooks/useFetchByParams";
import createLocationCharacters from "../../utils/createLocationCharacters";

import createIdArr from "../../utils/createIdArr";

import styles from "./Location.module.scss";
import useScrollCache from "../../hooks/useScrollCache";
import fetchAllLocations from "../../api/fetchAllLocations";
import useFetchWithFunc from "../../hooks/useFetchWithFunc";
import upperFirstLetter from "../../utils/upperFirstLetter";

import { LOCATION, LOCATIONLOWER } from "../../constants/constants";
import useFetchCharacters from "../../hooks/useFetchCharacters";

const Location = () => {
  const [locationData, isLoader] = useFetchByParams(LOCATIONLOWER);
  const [charactersData, getPageData] = useFetchCharacters();
  const locationsOptions = useFetchWithFunc(fetchAllLocations);
  useScrollCache(LOCATION);

  useEffect(() => {
    if (
      locationData.length !== 0 &&
      !locationData.error &&
      locationData.residents.length !== 0
    ) {
      getPageData(createIdArr(LOCATIONLOWER, locationData));
    }
  }, [getPageData, locationData]);

  const characterDisplay = createLocationCharacters(
    locationData,
    charactersData
  );

  return (
    <React.Fragment>
      {!(charactersData?.error || locationData?.error) && (
        <header>
          <h1 className="text-center mb-3 ubuntu">{locationData?.name}</h1>

          <h2 className="text-center mb-3 ubuntu">
            Dimention:{" "}
            <span className={styles.name}>
              {locationData?.dimension
                ? upperFirstLetter(locationData.dimension)
                : `Unknown`}
            </span>
          </h2>

          <h3 className="text-center mb-3 ubuntu">
            Type: <span className={styles.name}>{locationData?.type}</span>
          </h3>
        </header>
      )}
      <div className="container">
        <div className="row ">
          <DropdownFilter type={LOCATION} options={locationsOptions} />
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
