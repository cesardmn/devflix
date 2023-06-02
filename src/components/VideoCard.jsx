//styles
import Card from '@mui/material/Card'
import { CardActionArea, containerClasses } from '@mui/material'
import CardMedia from '@mui/material/CardMedia'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'

// providers
import { usePlayer } from '@providers/PlayerProvider'
import { useVideoOnPLay } from '@providers/VideoOnPLayProvider'

export default function VideoCard({ video }) {
  const { setPlayer } = usePlayer()
  const { setVideoOnPLay } = useVideoOnPLay()

  const handlePlayer = (videoId) => {
    setPlayer(true)
    setVideoOnPLay(videoId)
  }

  return (
    <CardActionArea
      sx={{ width: 'auto' }}
      onClick={() => {
        handlePlayer(video.id)
      }}
    >
      <Card sx={{ maxWidth: '360px', height: 'auto' }}>
        <CardMedia component="img" alt={video.title} image={video.thumb} />
        <CardContent>
          <Typography gutterBottom variant="h5" title={video.title}>
            {`${video.title.substring(0, 20)} ...`}
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            title={video.description}
          >
            {`${video.description.substring(0, 100)} ...`}
          </Typography>
        </CardContent>
      </Card>
    </CardActionArea>
  )
}
