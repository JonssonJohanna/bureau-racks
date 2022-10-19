import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { GoogleMap, LoadScript, useJsApiLoader } from "@react-google-maps/api";
import MapContainer from "../components/MapContainer/MapContainer";



export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Byrårackor</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <h1>Byrårackor</h1>
        <MapContainer/>
 
      </main>
    </div>
  );
}
