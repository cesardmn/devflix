//react
import { useState } from 'react'

// providers
import { useDb } from '@providers/DbProvider'
import { useVideos } from '@providers/VideosProvider'

// styles
import styles from '@styles/Categories.module.css'

export default function Categories() {
  const { db } = useDb()
  const { videos, setVideos } = useVideos()

  const categories = [...new Set(db.map((video) => video.cat))].sort()
  const [selectedCategory, setSelectedCategory] = useState(null)

  const handleFilter = (e, category) => {
    const criteria = e.target.innerText.toLowerCase()
    const filter = db.filter((video) => video.cat.toLowerCase() === criteria)
    setVideos(filter)
    setSelectedCategory(category)
  }

  return (
    <ul className={styles.container}>
      {categories.map((category) => {
        return (
          <li
            key={category}
            className={`${styles.item} ${
              category === selectedCategory && videos.length === 1
                ? styles.selected
                : ''
            }`}
            onClick={(e) => {
              handleFilter(e, category)
            }}
          >
            {category}
          </li>
        )
      })}
    </ul>
  )
}
