import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";
/* 
const mapContainerStyle = {
  width: "100vw",
  height: "100vh",
}; 
const center = { lat: 57.708870, long: 11.974560 }; */

export default function Home() {
  // apiKey={"AIzaSyCn18tEMgEvKBitx1sJvGAD9o3J_cnXhJM"}
  const { isLoaded, loadError } = useJsApiLoader({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
  });
  if (loadError) return "Error with maps";
  if (!isLoaded) return "Loading maps";

  return (
    <div>
      <GoogleMap mapContainerStyle={mapContainerStyle} center={center}></GoogleMap>
    </div>
  );

  return (
    <div className={styles.container}>
      <Head>
        <title>Byrårackor</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1>Hej </h1>
      </main>

     
    </div>
  );
}
