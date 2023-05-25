import React from 'react'
import Layout from '@src/components/Layout'
import styles from '@styles/Player.module.css'
import { useRouter } from 'next/router'
import Categories from '@src/components/Categories'

export default function Player() {
  const router = useRouter()

  return (
    <Layout>
      <div className={styles.playerWrapper}>
        <div className={styles.player}>
          <iframe
            src={`https://www.youtube.com/embed/${router.query.id}`}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            id="playerId"
          ></iframe>
        </div>
      </div>
    </Layout>
  )
}
