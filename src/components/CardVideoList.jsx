import styles from '@styles/CardVideoList.module.css'

import VideoCard from './VideoCard'

export default function CardVideoList() {
  return (
    <div className={styles.cardVideoList}>
      <VideoCard />
      <VideoCard />
      <VideoCard />
      <VideoCard />
      <VideoCard />
      <VideoCard />
      <VideoCard />
    </div>
  )
}
