import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import { MapContainerWrapper, MapContainerText } from "./styles.js";

const MapContainer = () => {
  const mapContainerStyle = {
    width: "50vw",
    height: "50vh",
  };
  const center = { lat: 57.70887, lng: 11.97456 };

  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;

  return (
    <MapContainerWrapper>
      <LoadScript googleMapsApiKey={apiKey}>
        <GoogleMap
          mapContainerStyle={mapContainerStyle}
          zoom={8}
          center={center}
        >
          <Marker position={{ lat: 57.71337, lng: 12.00273 }}></Marker>
        </GoogleMap>
      </LoadScript>
      <MapContainerText>Filtrera</MapContainerText>
    </MapContainerWrapper>
  );
};

export default MapContainer;
