import express from 'express'
import cookieParser from 'cookie-parser'
import logger from 'morgan'
import mediasRouter from './api/medias'

const app = express()

app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())

app.use('/api/medias', mediasRouter)

// catch 404 and forward to error handler
app.use((req, res) => res.status(404).end())

app.use((err, req, res) => {
  const env = req.app.get('env')
  const error = env === 'development' ? err : {}
  console.error(err)
  return res.status(err.status || err.statusCode || 500).json(error)
})

export default app
