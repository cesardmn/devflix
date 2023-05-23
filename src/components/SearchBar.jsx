// styles
import styles from '@styles/SearchBar.module.css'
import { GrSearch } from 'react-icons/gr'

export default function SearchBar() {
  return (
    <div className={styles.searchBar}>
      <input type="search" name="" id="" placeholder="Pesquisar" />
      <div className={styles.iconButton}>
        <GrSearch />
      </div>
    </div>
  )
}
