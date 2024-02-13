import { useContext, useEffect, useState } from "react";
import { map as createMap, tileLayer, marker, icon } from "leaflet";
import { AppContext } from "@/context/app";
import locationIcon from "@/assets/icons/icon-location.svg";
import "./styles.css";

function MapSection() {
  const { currentAddress } = useContext(AppContext);
  const [map, setMap] = useState(null);

  useEffect(() => {
    if (!map) {
      setMap(createMap("map"));
      import("leaflet/dist/leaflet.css");
    } else {
      initMap();
    }
  }, [map]);

  useEffect(() => {
    if (currentAddress?.location) {
      map.setView(
        [currentAddress?.location?.lat, currentAddress?.location?.lng],
        13
      );
      addMarker();
    }
  }, [currentAddress]);

  const initMap = () => {
    tileLayer("https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png", {
      maxZoom: 19,
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Tiles style by <a href="https://www.hotosm.org/" target="_blank">Humanitarian OpenStreetMap Team</a> hosted by <a href="https://openstreetmap.fr/" target="_blank">OpenStreetMap France</a>',
    }).addTo(map);
  };

  const addMarker = () => {
    const myIcon = icon({
      iconUrl: locationIcon,
      iconSize: [30, 40],
      iconAnchor: [22, 94],
      popupAnchor: [-3, -76],
    });

    marker([currentAddress?.location?.lat, currentAddress?.location?.lng], {
      icon: myIcon,
    }).addTo(map);
  };

  return <section id="map"></section>;
}

export default MapSection;
