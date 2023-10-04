import React, { useEffect, useState } from "react";
import styles from "./Map.module.css";
import { useNavigate } from "react-router-dom";
import {
  MapContainer,
  Marker,
  Popup,
  TileLayer,
  useMap,
  useMapEvents,
  ZoomControl,
} from "react-leaflet";
import { useGeolocation } from "../../hooks/useGeolocation.js";
import Button from "./Button.jsx";
import { useUrlPosition } from "../../hooks/useUrlPosition.js";
import { useLocalCities } from "../../contexts/LocalCitiesContext.jsx";
import Sidebar from "./Sidebar.jsx";

function Map() {
  const navigate = useNavigate();
  const { cities } = useLocalCities();
  const [mapPosition, setMapPosition] = useState([0, 0]);
  const { position: geolocationPosition, getPosition } = useGeolocation();

  const [mapLat, mapLng] = useUrlPosition();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(
    function () {
      if (mapLat && mapLng) {
        setMapPosition([mapLat, mapLng]);
      }
    },
    [mapLat, mapLng]
  );

  useEffect(
    function () {
      if (geolocationPosition) {
        setMapPosition([geolocationPosition.lat, geolocationPosition.lng]);
      }
    },
    [geolocationPosition]
  );

  return (
    <>
      <Sidebar
        isSidebarOpen={isSidebarOpen}
        setIsSidebarOpen={setIsSidebarOpen}
      />
      <div className={styles.mapContainer}>
        <Button type="position" onClick={getPosition}>
          Use your position
        </Button>
        <MapContainer
          center={[mapLat, mapLng]}
          zoom={6}
          zoomControl={false}
          scrollWheelZoom={true}
          className={styles.map}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png"
          />
          <ZoomControl position="bottomright" />
          {cities.map((city) => (
            <Marker
              position={[city.position.lat, city.position.lng]}
              key={city.id}
            >
              <Popup>
                <span>{city.emoji}</span> <span>{city.cityName}</span>
              </Popup>
            </Marker>
          ))}
          <ChangeCenter position={mapPosition} />
          <DetectClick />
          <ToggleSideBar
            isSidebarOpen={isSidebarOpen}
            setIsSidebarOpen={setIsSidebarOpen}
          />
        </MapContainer>
        ))
      </div>
    </>
  );
}

function ChangeCenter({ position }) {
  const map = useMap();
  map.setView(position);
  return null;
}

function DetectClick() {
  const navigate = useNavigate();

  useMapEvents({
    click: (e) => {
      navigate(`form?lat=${e.latlng.lat}&lng=${e.latlng.lng}`);
    },
  });
}

function ToggleSideBar({ isSidebarOpen, setIsSidebarOpen }) {
  const handleClick = () => setIsSidebarOpen(true);

  useMapEvents({
    click: handleClick,
  });

  return null;
}

export default Map;
