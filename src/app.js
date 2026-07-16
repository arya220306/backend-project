import express, { urlencoded } from 'express'
import cors from 'cors'
import cookieParser from 'cookie-parser'


const app = express()

app.use(cors({ //used for cross-origin access of data
    origin: process.env.CORS_ORIGIN,
    credentials:true
}))

app.use(express.json({limit:"16kb"})) // used for json data
app.use(urlencoded({extended:true, limit:"16kb"})) //used for data coming from url like (space = %20)
app.use(express.static("public"))
app.use(cookieParser())


//routes import
import userRouter from "./routes/user.route.js"


// routes declaration

app.use("/api/v1/users", userRouter)



export { app }
// export default app++