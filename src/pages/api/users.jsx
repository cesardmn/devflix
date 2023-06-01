// prisma
import { prisma } from '@services/prismaClient'

// nextauth
import { getServerSession } from 'next-auth/next'

const checkUserExists = async (email) => {
  const existingUser = await prisma.user.findUnique({
    where: {
      email,
    },
  })

  return existingUser
}

export default async (req, res) => {
  const session = await getServerSession(req, res)

  if (!session) {
    return res.status(401).json({ error: 'Unauthorized' })
  }

  const { method } = req

  if (method === 'GET') {
    try {
      const { email } = req.query

      if (email) {
        const existingUser = await checkUserExists(email)

        if (!existingUser) {
          return res.status(200).json({ hasUser: false })
        }

        return res.status(200).json({ hasUser: true, user: existingUser })
      }

      const allUsers = await prisma.user.findMany()
      return res.status(200).json({ hasUser: true, users: allUsers })
    } catch (error) {
      return res.status(500).json({ error: 'Internal server error' })
    }
  }

  if (method === 'POST') {
    try {
      const { name, email, avatar } = req.body
      const userExists = await checkUserExists(email)
      if (userExists) {
        return res.status(409).json({ error: 'User already exists' })
      }

      const newUser = await prisma.user.create({
        data: {
          name,
          email,
          avatar,
        },
      })

      return res.status(201).json(newUser)
    } catch (error) {
      return res.status(500).json({ error: 'Internal server error' })
    }
  }

  if (method === 'PUT') {
    try {
      const { email } = req.query
      const { name } = req.body

      const userExists = await checkUserExists(email)
      if (!userExists) {
        return res.status(404).json({ error: 'User not found' })
      }

      const updatedUser = await prisma.user.update({
        where: {
          email,
        },
        data: {
          name,
        },
      })
      return res.status(200).json(updatedUser)
    } catch (error) {
      return res.status(500).json({ error: 'Internal server error' })
    }
  }

  if (method === 'DELETE') {
    try {
      const { email } = req.query

      const userExists = await checkUserExists(email)
      if (!userExists) {
        return res.status(404).json({ error: 'User not found' })
      }

      await prisma.user.delete({
        where: {
          email,
        },
      })
      return res.status(200).json({ message: 'User deleted' })
    } catch (error) {
      return res.status(500).json({ error: 'Internal server error' })
    }
  }
}
