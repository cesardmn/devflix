// react
import { useEffect, useState } from 'react'

// next
import Link from 'next/link'

// nextauth
import { useSession, signIn, signOut } from 'next-auth/react'

//styles
import styles from '@styles/Layout.module.css'
import { Avatar } from '@mui/material'
import OutlinedInput from '@mui/material/OutlinedInput'
import InputAdornment from '@mui/material/InputAdornment'
import IconButton from '@mui/material/IconButton'
import SearchIcon from '@mui/icons-material/Search'
import MenuItem from '@mui/material/MenuItem'
import Menu from '@mui/material/Menu'

// components
import { useDb } from '@src/providers/DbProvider'
import Logo from './Logo'

// providers
import { useVideos } from '@providers/VideosProvider'
import { useUser } from '@providers/UserProvider'

export default function Layout({ children }) {
  const { data: session } = useSession()
  const { setVideos } = useVideos()
  const { db } = useDb()
  const [anchorEl, setAnchorEl] = useState(null)
  const { user, setUser } = useUser()

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  const handleHome = () => {
    setVideos(db)
  }

  const handleChange = (e) => {
    // console.log(e.target.value.toLowerCase())
    setVideos(
      db.filter((video) =>
        video.description.toLowerCase().includes(e.target.value.toLowerCase())
      )
    )
  }

  useEffect(() => {
    if (session) {
      if (session.user) {
        setUser(session.user)
      }
    }
  }, [session])

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
                onChange={(e) => {
                  handleChange(e)
                }}
              />
            </div>

            <div className={styles.avatar} onClick={handleMenu}>
              {user ? <Avatar src={user.image} /> : <Avatar src="" />}
            </div>

            <Menu
              id="menu-appbar"
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              {user ? (
                [
                  <MenuItem key="signOut" onClick={() => signOut()}>
                    Sair
                  </MenuItem>,
                  <Link
                    href={{
                      pathname: '/video',
                    }}
                  >
                    <MenuItem key="registerUrl">Cadastrar Video</MenuItem>
                  </Link>,
                ]
              ) : (
                <MenuItem onClick={() => signIn()}>Entrar</MenuItem>
              )}
            </Menu>
          </nav>
        </header>
        <main className={styles.main}>{children}</main>
      </div>
    </>
  )
}
