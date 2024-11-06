import express, { urlencoded } from 'express'
import userRoutes from './routes/userRoutes.js'
import cookieParser from 'cookie-parser'
import cors from 'cors'

const app = express()
app.use(cors());
app.use(express.json());
app.use(cookieParser())
app.use(urlencoded({ extended: true }))

app.use('/user', userRoutes)


export default app;