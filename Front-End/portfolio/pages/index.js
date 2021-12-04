import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Tom Doyle | My Portfolio</title>
        <meta name="viewport" content="width=device-width,initial-scale=1"></meta>
        <meta name="description" content="Website created using NextJs 🦄" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    </div>
  )
}
