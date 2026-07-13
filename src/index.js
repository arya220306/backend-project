import mongoose from 'mongoose';
import express from "express"
import 'dotenv/config'
import connectDB from './db/index.js';
const app = express()
import dns from "dns";
import { log } from 'console';
dns.setServers(["1.1.1.1", "8.8.8.8"]);

connectDB()
.then(()=>{
    app.listen(process.env.PORT || 8000, ()=>{
        log(`Server is running at port : ${process.env.PORT}`)
    })
})
.catch((err) =>{
    log("Mongo db connection failed !!!", err)
})

// const app = express()
// ( async () => {
//     try {
//         await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
//         app.on("errror", (error) => {
//             console.log("ERRR: ", error);
//             throw error
//         })

//         app.listen(process.env.PORT, () => {
//             console.log(`App is listening on port ${process.env.PORT}`);
//         })

//     } catch (error) {
//         console.error("ERROR: ", error)
//         throw err
//     }
// })()