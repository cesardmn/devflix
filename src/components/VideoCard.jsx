import Card from '@mui/material/Card'
import { CardActionArea } from '@mui/material'
import CardMedia from '@mui/material/CardMedia'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import Link from 'next/link'

export default function VideoCard({ video }) {
  return (
    <Link
      href={`player?id=${video.id}`}
    >
      <CardActionArea>
        <Card sx={{ maxWidth: '360px', height: 'auto' }}>
          <CardMedia component="img" alt={video.title} image={video.thumb} />
          <CardContent>
            <Typography gutterBottom variant="h5">
              {video.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {`${video.description.substring(0, 175)} ...`}
            </Typography>
          </CardContent>
        </Card>
      </CardActionArea>
    </Link>
  )
}
