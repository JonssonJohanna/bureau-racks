import { GoogleMap, LoadScript } from "@react-google-maps/api";
import { MapContainerWrapper, MapContainerText } from "./styles";

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
        ></GoogleMap>
      </LoadScript>
      <MapContainerText>Filtrera</MapContainerText>
    </MapContainerWrapper>
  );
};

export default MapContainer;
