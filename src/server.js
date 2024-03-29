import express from 'express'
import morgan from 'morgan'
import authRoutes from './routes/auth.routes.js'
import cookieParser from 'cookie-parser'
import tasksRoutes from './routes/tasks.routes.js'
import cors from 'cors'

const allowedOrigin = ['http://127.0.0.1:5173','http://localhost:5173' ]

const app = express()
app.use(cors({
    origin: allowedOrigin,
    credentials: true
}))
app.use(morgan("dev"))
app.use(express.json())
app.use(cookieParser())

app.use("/api",authRoutes)
app.use("/api",tasksRoutes)

export default app