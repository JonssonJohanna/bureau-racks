import {
  GoogleMap,
  InfoWindow,
  Marker,
  useJsApiLoader,
} from "@react-google-maps/api";

import {
  MapContainerWrapper,
  MapContainerText,
  Label,
  Radio,
  BureauLink,
  FilterHeading,
} from "./styles.js";

import { getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import { colRef } from "../Firebase/firebase.js";

const FILTERS = [
  { label: "Webbyrå", id: "Webbyrå" },
  { label: "Produktbolag", id: "Produktbolag" },
  { label: "Reklambyrå", id: "Reklambyrå" },
  { label: "Visa alla", id: "All" },
];

// Container för karta
const MapContainer = () => {
  const mapContainer = {
    width: "65vw",
    height: "55vh",
  };

  // Koordinater för Göteborg
  const coordinatesGothenburg = { lat: 57.70887, lng: 11.97456 };

  // Sätter upp google maps API
  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: apiKey,
  });

  // Firebase realterat
  const [markers, setMarkers] = useState([]);
  const [selectedMarkers, setSelectedMarkers] = useState(null);
  const [selected, setSelected] = useState("All");

  const getMarkers = async () => {
    await getDocs(colRef).then((data) => {
      setMarkers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    });
  };
  useEffect(() => {
    if (!markers) return null;
    getMarkers();
  }, []);

  return (
    <MapContainerWrapper>
      {isLoaded && (
        <GoogleMap
          mapContainerStyle={mapContainer}
          zoom={12}
          center={coordinatesGothenburg}
        >
          {selected === "All"
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
                .filter((marker) => {
                  return selected.includes(marker.type);
                })
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
                <BureauLink> {selectedMarkers.website} </BureauLink>
              </div>
            </InfoWindow>
          ) : null}
        </GoogleMap>
      )}
      <MapContainerText>
        <FilterHeading>Filtrera val</FilterHeading>
        {FILTERS.map((filter) => (
          <>
            <Label>
              <Radio
                name={filter.id}
                type="checkbox"
                checked={selected.includes(filter.id)}
                onChange={(event) => {
                  if (filter.id === "All") {
                    setSelected(
                      FILTERS.filter((item) => item.id !== "All").map(
                        (filteredOption) => {
                          return filteredOption.id;
                        }
                      )
                    );
                  }
                  if (selected.includes(filter.id)) {
                    setSelected((items) =>
                      items.filter((item) => item !== filter.id)
                    );
                  } else {
                    setSelected((selected) => [...selected, filter.id]);
                  }
                }}
              />
              {filter.label}
            </Label>
          </>
        ))}
      </MapContainerText>
    </MapContainerWrapper>
  );
};

export default MapContainer;
