// next
import Link from 'next/link'

//styles
import styles from '@styles/Layout.module.css'
import { Avatar } from '@mui/material'
import OutlinedInput from '@mui/material/OutlinedInput'
import InputAdornment from '@mui/material/InputAdornment'
import IconButton from '@mui/material/IconButton'
import SearchIcon from '@mui/icons-material/Search'

// components
import { useDb } from '@src/providers/DbProvider'
import Logo from './Logo'
import Categories from './Categories'

// providers
import { useVideos } from '@providers/VideosProvider'

export default function Layout({ children }) {
  const { setVideos } = useVideos()

  const { db } = useDb()

  const handleHome = ()  => {
    setVideos(db)
  }

  return (
    <>
      <div className={styles.layout}>
        <header className={styles.header}>
          <nav className={styles.bar}>
            <div
              className="logo"
              onClick={(e) => {
                handleHome()
              }}
            >
              <Link
                href={{
                  pathname: '/',
                }}
              >
                <Logo />
              </Link>
            </div>

            <div className={styles.search}>
              <OutlinedInput
                type="text"
                sx={{
                  borderRadius: 8,
                  height: 35,
                  width: '100%',
                  outline: 'transparent',
                }}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton>
                      <SearchIcon />
                    </IconButton>
                  </InputAdornment>
                }
              />
            </div>

            <div className="avatar">
              <Avatar src="https://avatars.githubusercontent.com/u/40774019?v=4" />
            </div>
          </nav>


        </header>
        <main className={styles.main}>{children}</main>
      </div>
    </>
  )
}
