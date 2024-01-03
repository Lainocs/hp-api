import express from 'express'
import dotenv from 'dotenv'
import router from './router.js'
import characters from './routes/CharacterRoutes.js'

const app = express()
dotenv.config()

app.use(express.static('public'))
app.use(router);

router.use('/characters', characters)

app.get('/', (req, res) => {
	res.send('Hello World')
})

app.listen(process.env.PORT, () => {
	console.log('server running on port ' + process.env.PORT)
})
