// styles
import styles from '@styles/CardVideoList.module.css'

// components
import VideoCard from './VideoCard'

// providers
import { useVideos } from '@providers/VideosProvider'

export default function CardVideoList() {
  const { videos } = useVideos()
  return (
    <ul className={styles.cardVideoList}>
      {videos &&
        videos.map((video) => {
          return <VideoCard video={video} key={video.id} />
        })}
    </ul>
  )
}
