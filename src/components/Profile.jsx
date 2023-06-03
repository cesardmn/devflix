// react
import { useEffect, useState } from 'react'

// nextauth
import { useSession, signIn, signOut } from 'next-auth/react'

//styles
import { Avatar } from '@mui/material'
import MenuItem from '@mui/material/MenuItem'
import Menu from '@mui/material/Menu'
import styles from '@styles/Layout.module.css'
import GitHubIcon from '@mui/icons-material/GitHub'

// providers
import { useUser } from '@providers/UserProvider'
import { usePlayer } from '@providers/PlayerProvider'
import { useForm } from '@providers/FormProvider'

export default function Profile() {
  const { data: session } = useSession()
  const { user, setUser } = useUser()
  const { player, setPlayer } = usePlayer()
  const { form, setForm } = useForm()
  const [anchorEl, setAnchorEl] = useState(null)

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  const handleForm = () => {
    setPlayer(false)
    setForm(true)
    handleClose()
  }

  useEffect(() => {
    if (session) {
      if (session.user) {
        const sessionUser = session.user

        fetch(`${window.location.origin}/api/users`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            email: sessionUser.email,
            name: sessionUser.name,
            avatar: sessionUser.image,
          }),
        })
          .then((response) => response.json())
          .then((data) => {
            console.log(data)
            setUser(sessionUser)
          })
      }
    }
  }, [session])

  return (
    <>
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
            <MenuItem key={'cad'} onClick={handleForm}>
              Cadastrar Video
            </MenuItem>,
            <MenuItem key="signOut" onClick={() => signOut()}>
              Sair
            </MenuItem>,
          ]
        ) : (
          <MenuItem onClick={() => signIn('github')} sx={{ gap: 1 }}>
            <GitHubIcon /> Entrar
          </MenuItem>
        )}
      </Menu>
    </>
  )
}
