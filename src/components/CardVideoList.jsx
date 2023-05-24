import styles from '@styles/CardVideoList.module.css'

import VideoCard from './VideoCard'

const video = {
  kind: 'youtube#videoListResponse',
  etag: 'yNS3q-A7zczId3KGvLw_ekzn0I8',
  items: [
    {
      kind: 'youtube#video',
      etag: 'UYFs9YGsRzbX1fxfpV_5dmK8c9I',
      id: 'MfMK4x_gR0s',
      snippet: {
        publishedAt: '2022-01-29T21:00:07Z',
        channelId: 'UCIMqKJ2AO6zV0orZz8gldpg',
        title: 'TODA MEDIDA TEM ERRO | Ledo Vaccaro',
        description:
          'PAPMEM - Julho de 2015 - Medidas - Prof. Ledo Vaccaro\n\nLink do vídeo completo:\n\nhttps://www.youtube.com/watch?v=QpN5LCEk1HY\n\nEstá precisando aprender Matemática ou Física de verdade? \nConsulte os cursos dos nossos parceiros ou adquira os livros no nosso site:\n👨\u200d🎓 https://bit.ly/canalcortesdematematicaefisica\n📚 https://cortesdematematicaefisica.com.br',
        thumbnails: {
          default: {
            url: 'https://i.ytimg.com/vi/MfMK4x_gR0s/default.jpg',
            width: 120,
            height: 90,
          },
          medium: {
            url: 'https://i.ytimg.com/vi/MfMK4x_gR0s/mqdefault.jpg',
            width: 320,
            height: 180,
          },
          high: {
            url: 'https://i.ytimg.com/vi/MfMK4x_gR0s/hqdefault.jpg',
            width: 480,
            height: 360,
          },
          standard: {
            url: 'https://i.ytimg.com/vi/MfMK4x_gR0s/sddefault.jpg',
            width: 640,
            height: 480,
          },
          maxres: {
            url: 'https://i.ytimg.com/vi/MfMK4x_gR0s/maxresdefault.jpg',
            width: 1280,
            height: 720,
          },
        },
        channelTitle: 'Cortes de Matemática e Física',
        categoryId: '27',
        liveBroadcastContent: 'none',
        localized: {
          title: 'TODA MEDIDA TEM ERRO | Ledo Vaccaro',
          description:
            'PAPMEM - Julho de 2015 - Medidas - Prof. Ledo Vaccaro\n\nLink do vídeo completo:\n\nhttps://www.youtube.com/watch?v=QpN5LCEk1HY\n\nEstá precisando aprender Matemática ou Física de verdade? \nConsulte os cursos dos nossos parceiros ou adquira os livros no nosso site:\n👨\u200d🎓 https://bit.ly/canalcortesdematematicaefisica\n📚 https://cortesdematematicaefisica.com.br',
        },
      },
      statistics: {
        viewCount: '256517',
        likeCount: '16198',
        favoriteCount: '0',
        commentCount: '274',
      },
    },
  ],
  pageInfo: {
    totalResults: 1,
    resultsPerPage: 1,
  },
}

export default function CardVideoList() {
  return (
    <div className={styles.cardVideoList}>
      <VideoCard video={video} />
      <VideoCard video={video} />
      <VideoCard video={video} />
      <VideoCard video={video} />
      <VideoCard video={video} />
      <VideoCard video={video} />
      <VideoCard video={video} />
    </div>
  )
}
