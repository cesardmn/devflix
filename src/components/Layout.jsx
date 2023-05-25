//styles
import styles from '@styles/Layout.module.css'
import Logo from './Logo'
import { Avatar } from '@mui/material'
import OutlinedInput from '@mui/material/OutlinedInput'
import InputAdornment from '@mui/material/InputAdornment'
import IconButton from '@mui/material/IconButton'
import SearchIcon from '@mui/icons-material/Search'
import { useVideos } from '@providers/VideosProvider'
import Link from 'next/link'
import Categories from './Categories'

export default function Layout({ children }) {
  const { videos } = useVideos()

  return (
    <>
      <div className={styles.layout}>
        <header className={styles.header}>
          <nav className={styles.bar}>
            <div className="logo">
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

          <nav className={styles.cat}>
            <Categories />
          </nav>
        </header>
        <main className={styles.main}>{children}</main>
      </div>
    </>
  )
}
