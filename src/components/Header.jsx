import Image from 'next/image'

// styles
import styles from '@styles/Header.module.css'

// components
import Logo from './Logo'
import SearchBar from './SearchBar'

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Logo />
      </div>
      <div className={styles.searchBar}>
        {' '}
        <SearchBar />{' '}
      </div>
      <div className={styles.avatar}>
        <figure>
          <img
            src="https://avatars.githubusercontent.com/u/40774019?v=4"
            alt="avatar"
          />
        </figure>
      </div>
    </header>
  )
}
