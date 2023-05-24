import Card from '@mui/material/Card'
import { Button, CardActionArea, CardActions } from '@mui/material'
import CardMedia from '@mui/material/CardMedia'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import Link from 'next/link'

export default function VideoCard({ video }) {
  const thumb = video.items[0].snippet.thumbnails
  console.log(video)
  return (
    <Link href="/player&">
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
            <Typography gutterBottom variant="h5" component="Link">
              {video.items[0].snippet.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {`${video.items[0].snippet.description.substring(0, 175)} ...`}
            </Typography>
          </CardContent>
        </Card>
      </CardActionArea>
    </Link>
  )
}
