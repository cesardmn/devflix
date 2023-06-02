// prisma
import { prisma } from '@src/services/prismaClient'

export default async (req, res) => {
  const { method } = req

  if (method === 'GET') {
    try {
      const allVideos = await prisma.video.findMany()
      res.status(200).json(allVideos)
    } catch (error) {
      res.status(400).json([])
    }
  }
}
