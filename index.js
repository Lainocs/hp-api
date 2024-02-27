import express from 'express'
import dotenv from 'dotenv'
import router from './router.js'
import characters from './routes/CharacterRoutes.js'
import cors from 'cors'

const app = express()
dotenv.config()

app.use(cors())
app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(router);

router.use('/characters', characters)

app.get('/', (req, res) => {
	res.render('index', { title: 'Home' })
})

app.listen(process.env.PORT, () => {
	console.log('server running on port ' + process.env.PORT)
})
