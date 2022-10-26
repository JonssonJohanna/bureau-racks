import Head from "next/head";
import MapContainer from "../components/MapContainer/MapContainer";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Byrårackor</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h3>Hitta din nya hundvänliga arbetsplats</h3>

      {/* {markers.map((marker) => {
        console.log(marker);
        return (
          <ul className={styles.markerStyle} key={marker.id}>
            <li>{marker.name}</li>
            <li>{marker.type}</li>
            <li>{marker.geoPoint._lat}</li>
            <li>{marker.geoPoint._long}</li>
          </ul>
        );
      })} */}

      <MapContainer />
    </div>
  );
}
