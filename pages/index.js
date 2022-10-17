import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { Wrapper, Status } from "@googlemaps/react-wrapper";

export default function Home() {
  // const {} = Wrapper({ googleMapsApiKey: process.env.GOOGLE_MAPS_KEY });
  const render = (Status) => {
    return <h1>{Status}</h1>;
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Byrårackor</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1>Hej </h1>
        <Wrapper
          apiKey={"AIzaSyCn18tEMgEvKBitx1sJvGAD9o3J_cnXhJM"}
          render={render}
        ></Wrapper>
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
