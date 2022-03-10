import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Adviser from '../components/Adviser'

const Home: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>Adviser - An Advice giving application by Adion</title>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <div>
        <Adviser />
      </div>
    </div>
  )
}

export default Home
