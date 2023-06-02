// providers
import { useDb } from '@providers/DbProvider'

// styles
import styles from '@styles/Categories.module.css'

export default function Categories() {
  const { db } = useDb()
  const categories = [...new Set(db.map((video) => video.cat))].sort()

  return (
    <ul className={styles.container}>
      {categories.map((category) => {
        return (
          <li key={category} className={styles.item}>
            {category}
          </li>
        )
      })}
    </ul>
  )
}
