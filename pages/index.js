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
  const config = {
    apiKey: "AIzaSyAqOSxIWs4shc_X0QQpsTSIZnbuAU0ncoc",

    authDomain: "bureau-racks-9c865.firebaseapp.com",

    projectId: "bureau-racks-9c865",

    storageBucket: "bureau-racks-9c865.appspot.com",

    messagingSenderId: "488511466585",

    appId: "1:488511466585:web:9208008771fa8f6eb7d548",

    measurementId: "G-YNKDBPYEGX",
  };
  // const firestore = initializeApp(config);

  // export { firestore };
  initializeApp(config);

  const db = getFirestore();

  const colRef = collection(db, "markers");

  getDocs(colRef).then((snapshot) => {
  let markers = []
  snapshot.docs.forEach((doc) => {
    markers.push({...doc.data(), id: doc.id })
  }) 
  console.log(markers)
  })
  .catch(err => {
    console.log(err.message)
  })
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
