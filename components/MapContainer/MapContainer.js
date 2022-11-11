import {
  GoogleMap,
  InfoWindow,
  Marker,
  useJsApiLoader,
} from "@react-google-maps/api";
import {
  MapContainerWrapper,
  MapContainerText,
  Button,
  Label,
  Radio,
} from "./styles.js";
import { getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import { queryList, colRef } from "../Firebase/firebase.js";
import { useRef } from "react";

const FILTERS = [
  { label: "Webbyrå", id: "Webbyrå" },
  { label: "Produktbolag", id: "Produktbolag" },
  { label: "Reklambyrå", id: "Reklambyrå" },
  { label: "Visa alla", id: "All" },
];

const filterData = (docs, filterType) =>
  docs
    .filter((doc) => doc.data().type === filterType)
    .map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

// Container för karta
const MapContainer = () => {
  const mapContainerStyle = {
    width: "65vw",
    height: "55vh",
  };
  const checkboxRef = useRef([]);
  const center = { lat: 57.70887, lng: 11.97456 };

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
          mapContainerStyle={mapContainerStyle}
          zoom={12}
          center={center}
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
              </div>
            </InfoWindow>
          ) : null}
        </GoogleMap>
      )}

      <MapContainerText>
        Filtrera val {/* :  {selectedType} */}
        {FILTERS.map((filter) => (
          <>
            <Label>
              <Radio
                name={filter.id}
                type="checkbox"
                checked={selected.includes(filter.label)}
                onChange={(event) => {
                  if (filter.label === "All") {
                    setSelected(
                      FILTERS.filter((item) => item.label !== "All").map(
                        (filteredOption) => {
                          return filteredOption.label;
                        }
                      )
                    );
                  }
                  if (selected.includes(filter.label)) {
                    setSelected((items) =>
                      items.filter((item) => item !== filter.label)
                    );
                  } else {
                    setSelected((selected) => [...selected, filter.label]);
                  }

                  // event.target.checked
                  //   ? setSelected(filter.id)
                  //   : setSelected("All");
                }}
              />
              {filter.label}
            </Label>
          </>
        ))}
        {/*  <Button onClick={() => setSelectedType("Webbyrå")}>Webbbyrå</Button>
        <Button onClick={() => setSelectedType("Reklambyrå")}>
          Reklambyrå
        </Button>
        <Button onClick={() => setSelectedType("All")}>Visa alla</Button> */}
      </MapContainerText>
    </MapContainerWrapper>
  );
};

export default MapContainer;
