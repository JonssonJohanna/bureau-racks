import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { Wrapper, Status } from '@googlemaps/react-wrapper'

const render = (status) => {
  return <h1>{status}</h1>;
};

export default function Home() {

  return (
    <div className={styles.container}>
      <Head>
        <title>Byrårackor</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
      <h1>Hej </h1>

<Wrapper apiKey={"YOUR_API_KEY"} render={render}>
  <YourComponent/>
</Wrapper>


      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}
