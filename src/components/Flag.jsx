import React from "react";

function Flag({ countryCode }) {
  countryCode = countryCode.toLowerCase();
  const BASE_URL = `https://flagcdn.com/${countryCode}.svg`;

  return (
    <img
      src={BASE_URL}
      alt={`Flag of ${countryCode}`}
      style={{ height: "100%" }}
    />
  );
}

export default Flag;
