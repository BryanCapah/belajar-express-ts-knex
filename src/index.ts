import express, { Request, Response } from 'express'
import dotenv from 'dotenv'
import userRouter from './routes/user'
dotenv.config()

const port = process.env.PORT
const app = express()
app.use(express.urlencoded({
    extended: true
}))
app.use(express.json())
app.use('/user', userRouter)


app.listen(port, () => {
    console.log(`yeahh berjalan di port ${port}`);

})