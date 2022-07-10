import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Sockets from '../components/sockets'
import Uploads from '../components/uploads'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>
      <br />
      <br />
      <br />
      <h1 className={styles.title}> Socket Component Users </h1>
      <br />
      <Sockets/>
      <br />
      <br />
      <br />
      <h1 className={styles.title}> Upload Component </h1>
      <br />
      <Uploads/>

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

export default Home
