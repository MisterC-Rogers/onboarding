import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'

const Home: NextPage = () => {
  // TODO: make global state to hold utility functions and state variables
  // TODO: send post with all the configurations
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>Onboard</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex w-full flex-1 flex-col items-center justify-center px-2 text-center">
        <h1 className="text-6xl font-bold">
          Welcome!
        </h1>
        <Link href="/foodQuiz">
          <div className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 my-2 rounded cursor-pointer">Order Food</div> 
        </Link>
      </main>
    </div>
  )
}

export default Home
