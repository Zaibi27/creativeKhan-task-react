import Head from 'next/head'
import AllPosts from "../components/allPosts";
export default function Home() {
  return (
    <div className="bg-gray-800 h-full text-white py-10" >
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <>
        <AllPosts />
      </>
    </div>
  )
}


