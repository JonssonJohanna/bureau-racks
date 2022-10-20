import Head from "next/head";
import styles from "../styles/Home.module.css";
import { GoogleMap, LoadScript, useJsApiLoader } from "@react-google-maps/api";
import MapContainer from "../components/MapContainer/MapContainer";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Byrårackor</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>Byrårackor</h1>
      <MapContainer />
    </div>
  );
}
