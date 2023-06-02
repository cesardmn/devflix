// styles
import styles from '@styles/Player.module.css'

// providers
import { useVideoOnPLay } from '@providers/VideoOnPLayProvider'

export default function Player() {
  const { videoOnPLay } = useVideoOnPLay()

  return (
    <div className={styles.playerWrapper}>
      <div className={styles.player}>
        {videoOnPLay && (
          <iframe
            src={`https://www.youtube.com/embed/${videoOnPLay}`}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            id="playerId"
          ></iframe>
        )}
      </div>
    </div>
  )
}
