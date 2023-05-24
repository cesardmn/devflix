//styles
import styles from '@styles/Layout.module.css'
import Logo from './Logo'
import { Avatar } from '@mui/material'
import OutlinedInput from '@mui/material/OutlinedInput'
import InputAdornment from '@mui/material/InputAdornment'
import IconButton from '@mui/material/IconButton'
import SearchIcon from '@mui/icons-material/Search'
import Link from 'next/link'

export default function Layout({ children }) {
  const languaes = ['Java', 'JavaScript', 'Python', 'PHP', 'C++', 'Go']

  return (
    <>
      <div className={styles.layout}>
        <header className={styles.header}>
          <nav className={styles.bar}>
            <div className="logo">
              <Link href="/">
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
            <button className={styles.selected}>FrontEnd</button>
            {languaes.map((lang) => {
              return <button key={lang}>{lang}</button>
            })}
          </nav>
        </header>
        <main className={styles.main}>{children}</main>
      </div>
    </>
  )
}
