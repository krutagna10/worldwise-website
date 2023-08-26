import styles from "./CityList.module.css";
import CityItem from "../CityItem/CityItem.jsx";
import Message from "../Message/Message.jsx";

function CityList({ cities }) {
  if (cities.length === 0) {
    return (
      <Message message="Add your first city by clicking on city on the map" />
    );
  }

  return (
    <ul className={styles.cityList}>
      {cities.map((city) => (
        <CityItem city={city} key={city.id} />
      ))}
    </ul>
  );
}

export default CityList;
