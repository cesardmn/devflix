// prisma
import { prisma } from '@src/services/prismaClient'

// nextauth
import { getServerSession } from 'next-auth/next'

export default async (req, res) => {
  const session = await getServerSession(req, res)

  const { method } = req

  if (method === 'GET') {
    try {
      const allVideos = await prisma.video.findMany()
      res.status(200).json(allVideos)
    } catch (error) {
      res.status(400).json(req.body)
    }
  }

  if (method === 'POST') {
    const createVideo = async (video) => {
      try {
        const { id, title, description, thumb, cat, user } = video

        const existingVideo = await prisma.video.findUnique({
          where: { id },
        })

        if (existingVideo) {
          throw new Error('Video already exists.')
        }

        const existingUser = await prisma.user.findUnique({
          where: { email: user.email },
        })

        let userId
        if (existingUser) {
          userId = existingUser.id
        } else {
          const createdUser = await prisma.user.create({
            data: {
              name: user.name,
              email: user.email,
              avatar: user.image,
            },
          })
          userId = createdUser.id
        }

        const thumbImage = thumb.standard
          ? thumb.standard.url
          : thumb.default.url

        const createdVideo = await prisma.video.create({
          data: {
            id,
            title,
            description,
            thumb: thumbImage,
            cat,
            userId,
          },
        })

        console.log('Video created.')
        return createdVideo
      } catch (error) {
        console.error('Video creation failed.', error)
        throw error
      }
    }

    if (!session) {
      return res.status(401).json({ error: 'Unauthorized' })
    } else {
      const videoId = req.body.videoId
      const key = process.env.YOUTUBE_API_KEY
      const base_url = process.env.YOUTUBE_BASE_URL
      const url = `${base_url}${videoId}&key=${key}`

      fetch(url)
        .then((response) => response.json())
        .then((data) => {
          const snippet = data.items[0].snippet

          const video = {
            id: videoId,
            title: snippet.title,
            description: snippet.description,
            thumb: snippet.thumbnails,
            cat: req.body.language,
            user: req.body.user,
          }

          createVideo(video)
            .then((createdVideo) => {
              return res.status(201).json(createdVideo)
            })
            .catch((error) => {
              if (error.message === 'Video already exists.') {
                return res.status(400).json({ error: 'Video already exists.' })
              } else {
                return res
                  .status(500)
                  .json({ error: 'Failed to create video.' })
              }
            })
        })
        .catch((error) => {
          return res.status(500).json({ error: 'Failed to fetch data.' })
        })
    }
  }
}
