// react
import { useEffect, useState } from 'react'

// next
import Link from 'next/link'

//styles
import styles from '@styles/Categories.module.css'

// providers
import { useDb } from '@providers/DbProvider'
import { useVideos } from '@providers/VideosProvider'
import { useCategoryFilter } from '@providers/CategoryFilterProvider'

export default function Categories() {
  const { db } = useDb()
  const { setVideos } = useVideos()
  const { setCategoryFilter } = useCategoryFilter()
  const [categories, setCategories] = useState(null)

  useEffect(() => {
    if (db) {
      let cat = new Set()

      for (const video of [...db]) {
        cat.add(video.cat)
      }
      cat = [...cat]

      setCategories(cat)
    }
  }, [db])

  const handleCategoryFilter = (e) => {
    setCategoryFilter(e.target.innerText)

    setVideos(
      db.filter(
        (video) => video.cat.toLowerCase() === e.target.innerText.toLowerCase()
      )
    )
  }

  return (
    <ul className={styles.container}>
      {categories &&
        categories.map((category) => (
          <Link href={'/'} key={category}>
            <li
              className={styles.item}
              onClick={(e) => {
                handleCategoryFilter(e)
              }}
            >
              {category}
            </li>
          </Link>
        ))}
    </ul>
  )
}
