//react
import { useState } from 'react'

// providers
import { useDb } from '@providers/DbProvider'
import { useVideos } from '@providers/VideosProvider'
import { useFilter } from '@providers/FilterProvider'

// styles
import styles from '@styles/Categories.module.css'

export default function Categories() {
  const { db } = useDb()
  const { setVideos } = useVideos()
  const { filter, setFilter } = useFilter()

  const categories = db ? [...new Set(db.map((video) => video.cat))].sort() : []

  const handleFilter = (e, category) => {
    const criteria = e.target.innerText.toLowerCase()
    const filteredVideos = db.filter(
      (video) => video.cat.toLowerCase() === criteria
    )
    setFilter(category)
    setVideos(filteredVideos)
  }

  return (
    <ul className={styles.container}>
      {categories.map((category) => {
        return (
          <li
            key={category}
            className={`${styles.item} ${
              category === filter ? styles.selected : ''
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
