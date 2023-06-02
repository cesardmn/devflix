//  react
import { useEffect, useState } from 'react'

// styles
import styles from '@styles/Home.module.css'
import { Avatar } from '@mui/material'
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace'

//components
import Logo from '@components/Logo'
import SearchAppBar from '@src/components/SearchBar'
import Categories from '@src/components/Categories'
import CardVideoList from '@src/components/CardVideoList'
import Player from '@src/components/Player'

// providers
import { useDb } from '@providers/DbProvider'
import { useVideos } from '@providers/VideosProvider'
import { usePlayer } from '@providers/PlayerProvider'

export default function Home() {
  const { setDb } = useDb()
  const { setVideos } = useVideos()
  const { player, setPlayer } = usePlayer()

  const handleHome = () => {
    console.log('home')
    setPlayer(false)
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
    <div className={styles.app}>
      <header>
        <nav>
          <div
            className={styles.logo}
            onClick={() => {
              handleHome()
            }}
          >
            {player ? <KeyboardBackspaceIcon /> : <Logo />}
          </div>
          {!player && <SearchAppBar />}
          <Avatar />
        </nav>

        {!player && <Categories />}
      </header>

      {/* todo implement skeleton */}
      <main>{player ? <Player /> : <CardVideoList />}</main>
    </div>
  )
}
