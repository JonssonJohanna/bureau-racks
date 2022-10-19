import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { GoogleMap, LoadScript, useJsApiLoader } from "@react-google-maps/api";

const mapContainerStyle = {
  width: "100vw",
  height: "100vh",
};
const center = { lat: 57.70887, lng: 11.97456 };

const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Byrårackor</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <h1>Byrårackor</h1>
        <div>
          <LoadScript googleMapsApiKey={apiKey}>
            <GoogleMap
              mapContainerStyle={mapContainerStyle}
              zoom={8}
              center={center}
            ></GoogleMap>
          </LoadScript>
        </div>
      </main>
    </div>
  );
}
