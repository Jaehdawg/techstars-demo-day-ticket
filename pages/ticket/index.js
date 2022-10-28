import Head from 'next/head'
import Image from 'next/image'
import styles from '/styles/Home.module.css'
import { useRouter } from 'next/router'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>2022 Techstars Demo Day - Ticket</title>
        <meta name="description" content="techstars demo day ticket" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}> 
        <div className={styles.grid}>
        <div>
          <img src='/resources/techstars_logo.png' width='500' height='100' />
        </div>
        <div className={styles.code} >
          Alabama Energytech Demo Day
        </div>

        </div>
      </main>
    </div>
  )
}
