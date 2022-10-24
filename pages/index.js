import Head from "next/head";
import styles from "../styles/Home.module.css";
import MapContainer from "../components/MapContainer/MapContainer";
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore";
import { useState } from "react";
import { useEffect } from "react";

export default function Home() {
  const config = {
    apiKey: "AIzaSyAqOSxIWs4shc_X0QQpsTSIZnbuAU0ncoc",

    authDomain: "bureau-racks-9c865.firebaseapp.com",

    projectId: "bureau-racks-9c865",

    storageBucket: "bureau-racks-9c865.appspot.com",

    messagingSenderId: "488511466585",

    appId: "1:488511466585:web:9208008771fa8f6eb7d548",

    measurementId: "G-YNKDBPYEGX",
  };

  initializeApp(config);

  const db = getFirestore();
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
      <p>
        {markers.map((marker) => {
          return (
            <div>
              <p>{marker.name}</p>
              <p>{marker.type}</p>
            </div>
          );
        })}
      </p>

      <MapContainer />
    </div>
  );
}
