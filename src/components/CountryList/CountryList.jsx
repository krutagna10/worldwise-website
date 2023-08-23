import Spinner from "../Spinner/Spinner.jsx";
import Message from "../Message/Message.jsx";
import CountryItem from "../CountryItem/CountryItem.jsx";
import styles from "./CountryList.module.css";

function CountryList({ cities, isLoading }) {
  if (isLoading) {
    return <Spinner />;
  }

  if (cities.length === 0) {
    return (
      <Message message="Add your first city by clicking on city on the map" />
    );
  }

  const countries = cities.reduce((acc, city) => {
    const countries = acc.map((element) => element.country);
    if (!countries.includes(city.country)) {
      const obj = {
        id: city.id,
        country: city.country,
        emoji: city.emoji,
      };
      return [...acc, obj];
    }
    return acc;
  }, []);

  return (
    <ul className={styles.countryList}>
      {countries.map((country) => (
        <CountryItem key={country.id} country={country} />
      ))}
    </ul>
  );
}

export default CountryList;
