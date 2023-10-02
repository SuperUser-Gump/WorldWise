import React from "react";
import styles from "./CountryList.module.css";
import Message from "./Message.jsx";
import CountryItem from "./CountryItem.jsx";
import { useLocalCities } from "../../contexts/LocalCitiesContext.jsx";

function CountryList() {
  const { cities } = useLocalCities();

  if (!cities.length)
    return (
      <Message message="Add your first city by clicking on a city on the map" />
    );

  const countries = cities.reduce((arr, city) => {
    if (!arr.map((el) => el.country).includes(city.country))
      return [...arr, { country: city.country, countryCode: city.countryCode }];
    else return arr;
  }, []);

  return (
    <ul className={styles.countryList}>
      {countries.map((country) => (
        <CountryItem country={country} key={country.country} />
      ))}
    </ul>
  );
}

export default CountryList;
