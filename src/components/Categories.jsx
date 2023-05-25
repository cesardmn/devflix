//styles
import styles from '@styles/Categories.module.css'
import { useVideos } from '@providers/VideosProvider'
import { CallEnd } from '@mui/icons-material'
import { useEffect, useState } from 'react'

export default function Categories() {
  const { videos } = useVideos()
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

  return (
    <ul className={styles.container}>
      {categories &&
        categories.map((category) => (
          <li className={styles.item} key={category}>
            {category}
          </li>
        ))}
    </ul>
  )
}
