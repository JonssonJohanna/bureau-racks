import {
  GoogleMap,
  InfoWindow,
  Marker,
  useJsApiLoader,
} from "@react-google-maps/api";
import { MapContainerWrapper, MapContainerText, Button } from "./styles.js";
import {
  getDocs,
  DocumentData,
  query,
  collection,
  doc,
  firestore,
  onSnapshot,
  where,
} from "firebase/firestore";
import { useEffect, useState } from "react";
import { queryList, colRef } from "../Firebase/firebase.js";

const FILTERS = {
  WEBB: "Webbbyrå",
  PRODUKT: "Produktbolag",
  REKLAM: "Reklambyrå",
};

const filterData = (docs, filterType) =>
  docs
    .filter((doc) => doc.data().type === filterType)
    .map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

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

  // filterData(docs, FILTERS.PRODUKT);

  // Firebase realterat
  const [markers, setMarkers] = useState([]);
  const [selectedMarkers, setSelectedMarkers] = useState(null);
  /*   const [singleBureau, setSingleBureau] = useState({});
   */ const [selectedType, setSelectedType] = useState("All");

  const getMarkers = async () => {
    await getDocs(colRef).then((data) => {
      setMarkers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    });
  };
  useEffect(() => {
    if (!markers) return null;
    getMarkers();
  }, []);

  console.log(markers);

  return (
    <MapContainerWrapper>
      {isLoaded && (
        <GoogleMap
          mapContainerStyle={mapContainerStyle}
          zoom={12}
          center={center}
        >
          {selectedType === "All"
            ? markers.map((marker) => {
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
                    />
                  </div>
                );
              })
            : markers
                .filter((marker) => marker.type === selectedType)
                .map((marker) => {
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
                      />
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

      <MapContainerText>
        Filtrera: {selectedType}
        <Button onClick={() => setSelectedType("Produktbolag")}>
          Produktbolag
        </Button>
        <Button onClick={() => setSelectedType("Webbyrå")}>Webbbyrå</Button>
        <Button onClick={() => setSelectedType("Reklambyrå")}>
          Reklambyrå
        </Button>
        <Button onClick={() => setSelectedType("All")}>Rensa</Button>
      </MapContainerText>
    </MapContainerWrapper>
  );
};

export default MapContainer;
