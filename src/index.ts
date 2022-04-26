import express from 'express'
import diaryRouter from './routes/diaries'

const app = express()

app.use(express.json())

app.get('/', (_req, res) => {
  res.send('<h1>Hello, World!</h1>')
})

app.get('/ping', (_req, res) => {
  console.log('Someone pinged here!')
  res.send('pong')
})

app.use('/api/diaries', diaryRouter)

const PORT = 3000

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
