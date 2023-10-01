import styles from "./CountryItem.module.css";
import Flag from "./Flag.jsx";

function CountryItem({ country }) {
  return (
    <li className={styles.countryItem}>
      <span className={styles.flag}>
        <Flag countryCode={country.countryCode} />
      </span>
      <span>{country.country}</span>
    </li>
  );
}

export default CountryItem;
