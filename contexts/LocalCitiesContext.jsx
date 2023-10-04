import React, { createContext, useContext, useState } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage.js";

const LocalCitiesContext = createContext();

function LocalCitiesProvider({ children }) {
  const [cities, setCities] = useLocalStorage([], "cities");
  const [currentCity, setCurrentCity] = useState({});

  function getCity(id) {
    setCurrentCity(cities.find((city) => city.id === id));
  }

  function createCity(newCity) {
    newCity.id = crypto.randomUUID();
    setCurrentCity(newCity);
    setCities((city) => [...city, newCity]);
  }

  function deleteCity(id) {
    setCities((city) => city.filter((city) => city.id !== id));
  }

  function updateCity(id, updatedData) {
    setCities((city) =>
      city.map((cityItem) => {
        if (cityItem.id === id) {
          return { ...cityItem, ...updatedData };
        }
        return cityItem;
      })
    );
  }

  return (
    <LocalCitiesContext.Provider
      value={{
        cities,
        currentCity,
        getCity,
        createCity,
        deleteCity,
        updateCity,
      }}
    >
      {children}
    </LocalCitiesContext.Provider>
  );
}

function useLocalCities() {
  const context = useContext(LocalCitiesContext);
  if (context === undefined)
    throw new Error("CitiesContext was used outside the CitiesProvider");
  return context;
}

export { LocalCitiesProvider, useLocalCities };
