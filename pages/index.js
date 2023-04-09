import Head from 'next/head'
import Nav from '@/components/Nav'
import HomeEl from '@/components/HomeEl'

export default function Home() {
  return (
    <div>
      <Head>
        <title>CHNsPart</title>
        <meta name="description" content="CHNsPart Web Portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <HomeEl/>
      </main>
    </div>
  )
}
