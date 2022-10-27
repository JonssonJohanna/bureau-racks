import {
  GoogleMap,
  InfoWindow,
  Marker,
  useJsApiLoader,
} from "@react-google-maps/api";
import { MapContainerWrapper, MapContainerText } from "./styles.js";
import { getDocs, collection, query, where } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../Firebase/firebase.js";

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
      const colRef = collection(db, "markers");
      const query = query(colRef, where("type", "==", "Webbyrå"));
      console.log(query);
      await getDocs(query).then((data) => {
        setMarkers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      });
    };
    getMarkers();
  }, []);

  // const getMarkers = () => {
  //   const colRef = collection(db, "markers");
  //   const q = query(colRef, where("name", "==", "Aino"));
  //   console.log(q);
  //   getDocs(q).then((data) => {
  //     setMarkers(
  //       data.docs.map((doc) => {
  //         return { ...doc.data(), id: doc.id };
  //       })
  //     );
  //   });
  // };
  // useEffect(() => {
  //   const thedata = getMarkers();
  // }, []);

  return (
    <MapContainerWrapper>
      {isLoaded && (
        <GoogleMap
          mapContainerStyle={mapContainerStyle}
          zoom={14}
          center={center}
        >
          {markers.map((marker) => {
            return (
              <div key={marker.id}>
                <Marker
                  position={{
                    lat: marker.geoPoint._lat,
                    lng: marker.geoPoint._long,
                  }}
                  icon={{
                    url: "/dawg.svg",
                    scaledSize: new window.google.maps.Size(30, 30),
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
              onCloseClick={() => {
                setSelectedMarkers(null);
              }}
            >
              <div>
                <h3> {selectedMarkers.name}</h3>
                <p> {selectedMarkers.type} </p>
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
