import Head from "next/head";
import MapContainer from "../components/MapContainer/MapContainer";
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore";
import { useState } from "react";
import { useEffect } from "react";
import styles from "../styles/Home.module.css";
import { db } from "../components/Firebase/firebase.js";

export default function Home() {
  const colRef = collection(db, "markers");
  const [markers, setMarkers] = useState([]);

  useEffect(() => {
    const getMarkers = async () => {
      const data = await getDocs(colRef);
      setMarkers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getMarkers();
  }, []);

  return (
    <div>
      <Head>
        <title>Byrårackor</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h3>Hitta din nya hundvänliga arbetsplats</h3>

      {markers.map((marker) => {
        console.log(marker);
        return (
          <ul className={styles.markerStyle} key={marker.id}>
            <li>{marker.name}</li>
            <li>{marker.type}</li>
            <li>{marker.geoPoint._lat}</li>
            <li>{marker.geoPoint._long}</li>
          </ul>
        );
      })}

      <MapContainer />
    </div>
  );
}
