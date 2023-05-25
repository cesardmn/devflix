import styles from '@styles/CardVideoList.module.css'

import VideoCard from './VideoCard'

import { useVideos } from '@providers/VideosProvider'

export default function CardVideoList() {
  const { videos } = useVideos()
  return (
    <div className={styles.cardVideoList}>
      {videos &&
        videos.map((video) => {
          return <VideoCard video={video} key={video.id} />
        })}
    </div>
  )
}
