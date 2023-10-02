import React from "react";
import styles from "./CityList.module.css";
import CityItem from "./CityItem.jsx";
import Message from "./Message.jsx";
import { useLocalCities } from "../../contexts/LocalCitiesContext.jsx";

function CityList() {
  const { cities } = useLocalCities();

  if (!cities.length)
    return (
      <Message message="Add your first city by clicking on a city on the map" />
    );

  return (
    <ul className={styles.cityList}>
      {cities.map((city) => (
        <CityItem city={city} key={city.id} />
      ))}
    </ul>
  );
}

export default CityList;
