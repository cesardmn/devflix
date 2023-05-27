// react
import { useEffect } from 'react'

// next
import Head from 'next/head'

// components
import Layout from '@src/components/Layout'
import CardVideoList from '@src/components/CardVideoList'
import Categories from '@src/components/Categories'

//providers
import { useVideos } from '@providers/VideosProvider'
import { db, useDb } from '@providers/DbProvider'

export default function Home() {
  const { setVideos } = useVideos()
  const { setDb } = useDb()

  useEffect(() => {
    fetch('/api/db')
      .then((response) => response.json())
      .then((data) => {
        let localDB = JSON.parse(localStorage.getItem('localDB')) || null

        if (!localDB) {
          localStorage.setItem('localDB', JSON.stringify(data.db))
          localDB = data.db
        }

        setDb(localDB)
        setVideos(localDB)
      })
  }, [])

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
          <Categories />
          <CardVideoList />
        </Layout>
      </div>
    </>
  )
}
