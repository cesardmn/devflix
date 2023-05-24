// next
import Head from 'next/head'

// components
import Header from '@components/Header'
import Categories from '@components/Categories'
import Layout from '@src/components/Layout'

export default function Home() {
  return (
    <>
      <Head>
        <title>DEVFLIX</title>
        <meta name="description" content="Bucket of develpers video links" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="app">
        <Layout>
          Conteúdo aqui
        </Layout>
      </div>
    </>
  )
}
