import express from 'express'
import cors from 'cors'
import alunoRouter from './routes/alunoRouter.js'

const app = express()

app.use(cors())
app.use(express.json())

app.use(alunoRouter)

app.get('/', (req, res) => {
  res.send('Hello World!')
})

export default app;