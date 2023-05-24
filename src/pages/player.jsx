import Layout from '@src/components/Layout'
import styles from '@styles/Player.module.css'

import CardVideoList from '@components/CardVideoList'

export default function Player({ video }) {
  return (
    <Layout>
      <div className={styles.playerWrapper}>
        <div className={styles.player}>
          <iframe
            // width='100%'
            src="https://www.youtube.com/embed/MfMK4x_gR0s"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div>
        <div className={styles.videolist}>
          <CardVideoList />
        </div>
      </div>
    </Layout>
  )
}
