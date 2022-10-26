import {
  GoogleMap,
  InfoWindow,
  Marker,
  useJsApiLoader,
} from "@react-google-maps/api";
import { MapContainerWrapper, MapContainerText } from "./styles.js";
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore";
import { db } from "/components/Firebase/firebase.js";
import { useEffect, useState } from "react";
import { colRef } from "../Firebase/firebase.js";

const MapContainer = () => {
  // Sätter upp google maps API
  const mapContainerStyle = {
    width: "50vw",
    height: "50vh",
  };
  const center = { lat: 57.70887, lng: 11.97456 };

  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;

  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: apiKey,
  });

  // Firebase realterat
  const [markers, setMarkers] = useState([]);
  const [selectedMarkers, setSelectedMarkers] = useState(null);

  useEffect(() => {
    const getMarkers = async () => {
      const data = await getDocs(colRef);
      setMarkers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getMarkers();
  }, []);
  return (
    <MapContainerWrapper>
      {isLoaded && (
        <GoogleMap
          mapContainerStyle={mapContainerStyle}
          zoom={14}
          center={center}
        >
{markers.map((marker) => {
            console.log(marker);
            return (
              <div key={marker.id}>
                <Marker
                  position={{
                    lat: marker.geoPoint._lat,
                    lng: marker.geoPoint._long,
                  }}

                  icon = {{
                    url: "/dawg.svg",
                    scaledSize: new window.google.maps.Size(30,30),
                  }}

                  onClick={() => {
                    setSelectedMarkers(marker);
                  }}
                ></Marker>
              </div>
            );
          })}
          {selectedMarkers ? (
            <InfoWindow
              position={{
                lat: selectedMarkers.geoPoint._lat,
                lng: selectedMarkers.geoPoint._long,
              }}
            >
              <div>
                <h3>Hej</h3>
              </div>
            </InfoWindow>
          ) : null}
        </GoogleMap>
      )}

      <MapContainerText>Filtrera</MapContainerText>
    </MapContainerWrapper>
  );
};

export default MapContainer;
