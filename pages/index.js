import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";

const mapContainerStyle = {
  width: "100vw",
  height: "100vh",
};

export default function Home() {
  // apiKey={"AIzaSyCn18tEMgEvKBitx1sJvGAD9o3J_cnXhJM"}
  const { isLoaded, loadError } = useJsApiLoader({
    googleMapsApiKey: process.env.NEXT_APP_GOOGLE_MAPS_API_KEY,
  });
  if (loadError) return "Error with maps";
  if (!isLoaded) return "Loading maps";

  return (
    <div>
      <GoogleMap mapContainerStyle={mapContainerStyle}></GoogleMap>
    </div>
  );

  return (
    <div className={styles.container}>
      <Head>
        <title>Byrårackor</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1>Hej </h1>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
}
