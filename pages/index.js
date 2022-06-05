import Head from 'next/head'
import Navbar from './Navbar'

export default function Home() {
  return (
    <div>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Mukta:wght@200;800&display=swap" rel="stylesheet" />
        <title>Vaibhav Rajpoot-Portfolio</title>
        <meta name="description" content="This is Portfolio Website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />



    </div>
  )
}