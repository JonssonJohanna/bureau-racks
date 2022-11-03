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
      <div className={styles.mapArea}>
        <h3>Hitta din nya hundvänliga arbetsplats</h3>
        <MapContainer />
      </div>
    </div>
  );
}
