//styles
import styles from '@styles/Categories.module.css'
import { useVideos } from '@providers/VideosProvider'
import { useCategoryFilter } from '@providers/CategoryFilterProvider'
import { CallEnd } from '@mui/icons-material'
import { useEffect, useState } from 'react'
import Link from 'next/link'

export default function Categories() {
  const { videos, setVideos } = useVideos()
  const { setCategoryFilter } = useCategoryFilter()
  const [categories, setCategories] = useState(null)

  useEffect(() => {
    if (videos) {
      let cat = new Set()

      for (const video of [...videos]) {
        cat.add(video.cat)
      }
      cat = [...cat]

      setCategories(cat)
    }
  }, [videos])

  const handleCategoryFilter = (e) => {
    setCategoryFilter(e.target.innerText)

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
