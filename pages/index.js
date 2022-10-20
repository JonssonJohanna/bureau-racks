import Head from "next/head";
import styles from "../styles/Home.module.css";
import MapContainer from "../components/MapContainer/MapContainer";

export default function Home() {
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
