import Card from '@mui/material/Card'
import { Button, CardActionArea, CardActions } from '@mui/material'
import CardMedia from '@mui/material/CardMedia'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'

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
const thumb = video.items[0].snippet.thumbnails

export default function VideoCard() {
  return (
    <div>
      <CardActionArea>
        <Card sx={{ maxWidth: '360px', height: 'auto' }}>
          <CardMedia
            component="img"
            alt="green iguana"
            image={thumb.medium.url}
            // srcset={`
            // ${thumb.default.url} 120w,
            // ${thumb.medium.url}  320w,
            // ${thumb.high.url}  480w,
            // ${thumb.standard.url}  640w,
            // ${thumb.maxres.url} 1280w"
            // `}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {video.items[0].snippet.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {`${video.items[0].snippet.description.substring(0, 175)} ...`}
            </Typography>
          </CardContent>
        </Card>
      </CardActionArea>
    </div>
  )
}
