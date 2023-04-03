import Head from 'next/head'
import Nav from '@/parts/Nav'
import HomeEl from '@/parts/HomeEl'

export default function Home() {
  return (
    <>
      <Head>
        <title>CHNsPart</title>
        <meta name="description" content="CHNsPart Web Portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className='h-auto w-full px-10 md:px-20 lg:px-40'>
        <Nav/>
        <HomeEl/>
      </main>
    </>
  )
}
