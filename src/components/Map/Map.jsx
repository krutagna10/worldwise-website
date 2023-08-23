import styles from "./Map.module.css";
import { useNavigate, useSearchParams } from "react-router-dom";

function Map() {
  const [searchParam, setSearchParam] = useSearchParams();
  const navigate = useNavigate();

  const lat = searchParam.get("lat");
  const lng = searchParam.get("lng");

  return (
    <div
      className={styles.mapContainer}
      onClick={() => {
        navigate("form");
      }}
    >
      <h1>Map</h1>
      <h2>
        Position: {lat} {lng}
      </h2>
      <button
        onClick={() => {
          setSearchParam({ lat: "20", lng: "20" });
        }}
      >
        Change location
      </button>
    </div>
  );
}

export default Map;
