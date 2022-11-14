import Head from "next/head";
import MapContainer from "../components/MapContainer/MapContainer";
import styles from "../styles/Home.module.css";
import Header from "../components/Header/Header";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Byrårackor</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <div className={styles.mapArea}>
        <MapContainer />
      </div>
    </div>
  );
}
