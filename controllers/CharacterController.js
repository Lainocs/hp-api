import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const getCharacters = async (req, res) => {
	prisma.character
		.findMany()
		.then((characters) => {
			res.send(characters)
		})
		.catch((error) => {
			res.json(error)
		})
}

const getCharacter = async (req, res) => {
  // get character by slug
  const { slug } = req.params
  prisma.character
    .findUnique({
      where: {
        slug: slug,
      },
    })
    .then((character) => {
      res.json(character)
    })
    .catch((error) => {
      console.log(error)
      res.json(error)
    })
}

export { getCharacters, getCharacter }
