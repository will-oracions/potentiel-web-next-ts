import Head from 'next/head'
// import Image from 'next/image'
// import { Inter } from '@next/font/google'
// import styles from '@/styles/Home.module.css'

// const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Potentiel</title>
        <meta name="description" content="" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* className={styles.main} */}
      <main>
        <h1>Welcome to potentiel web application</h1>
        <p>Find the best and most use ressources: video tutorial, blog articles or development,configuration packages and libs</p>
        <button>join us with github</button>
      </main>
    </>
  )
}
