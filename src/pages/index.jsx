//  react
import { useEffect, useState } from 'react'

// next
import Head from 'next/head'

// styles
import styles from '@styles/Home.module.css'
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace'

//components
import Logo from '@components/Logo'
import SearchAppBar from '@src/components/SearchBar'
import Categories from '@src/components/Categories'
import CardVideoList from '@src/components/CardVideoList'
import Player from '@src/components/Player'
import Form from '@src/components/Form'
import Profile from '@src/components/Profile'

// providers
import { useDb } from '@providers/DbProvider'
import { useVideos } from '@providers/VideosProvider'
import { usePlayer } from '@providers/PlayerProvider'
import { useForm } from '@providers/FormProvider'
import { useFilter } from '@providers/FilterProvider'

export default function Home() {
  const { db, setDb } = useDb()
  const { setVideos } = useVideos()
  const { player, setPlayer } = usePlayer()
  const { form, setForm } = useForm()
  const { setFilter } = useFilter()

  const handleHome = () => {
    setVideos(db)
    setPlayer(false)
    setForm(false)
    setFilter('')
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api/videos')
        const data = await response.json()
        setDb(data)
        setVideos(data)
      } catch (error) {
        console.log(error)
      }
    }

    fetchData()
  }, [])

  return (
    <>
      <Head>
        <title>DEVFLIX</title>
        <meta name="description" content="Bucket of develpers video links" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.app}>
        <header>
          <nav>
            <div
              className={styles.logo}
              onClick={() => {
                handleHome()
              }}
            >
              {player || form ? (
                <KeyboardBackspaceIcon />
              ) : (
                <Logo onClick={handleHome} />
              )}
            </div>
            {!player && !form && <SearchAppBar />}

            <Profile />
          </nav>

          {!player && !form && <Categories />}
        </header>

        {/* todo implement skeleton */}
        <main>
          {!form && !player && <CardVideoList />}

          {player && <Player />}

          {form && <Form />}
        </main>
      </div>
    </>
  )
}
