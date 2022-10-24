import Head from "next/head";
import styles from "../styles/Home.module.css";
import MapContainer from "../components/MapContainer/MapContainer";
import { getMarkers } from "../utils/markers";
import { useEffect } from "react";
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore";

export default function Home() {
  // useEffect(() => {
  //   getMarkers();
  // }, []);
  return (
    <div>
      <Head>
        <title>Byrårackor</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h3>Hitta din nya hundvänliga arbetsplats</h3>
      <MapContainer />
    </div>
  );
}
