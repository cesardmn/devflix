//  react
import { useEffect, useState } from 'react'

// styles
import styles from '@styles/Home.module.css'
import { Avatar } from '@mui/material'

//components
import Logo from '@components/Logo'
import SearchAppBar from '@src/components/SearchBar'
import Categories from '@src/components/Categories'

// providers
import { useDb } from '@providers/DbProvider'
import { useVideos } from '@providers/VideosProvider'
import CardVideoList from '@src/components/CardVideoList'

export default function Home() {
  const [videoOnPlayer, setVideoOnPlay] = useState(false)

  const { setDb } = useDb()
  const { setVideos } = useVideos()

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
          <Logo />
          <SearchAppBar />
          <Avatar />
        </nav>

        <Categories />
      </header>

      {/* todo implement skeleton */}
      <main>
        <h1>{videoOnPlayer ? 'Video Player' : <CardVideoList />}</h1>
      </main>
    </div>
  )
}
