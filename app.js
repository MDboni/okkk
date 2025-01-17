import express from "express";
import cors from "cors" ;
import mongoose from "mongoose";
import rateLimit from "express-rate-limit";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import hpp from "hpp";
import fileUpload from "express-fileupload";
import router from "./routes/api.js";
import {MONGODB_CONNECTION,PORT,MAX_JSON_SIZE,URL_ENCODED,WEB_CACHE,REQUEST_LIMIT_NUMBER,REQUEST_LIMIT_TIME} from "./app/config/config.js"


const app = express() ;


// GLOBAL APPLICATION MIDDLEWARE 

app.use(cors())
app.use(hpp()) 
app.use(helmet()) 
app.use(cookieParser())
app.use(fileUpload())


// RATE LIMITER

const limiter=rateLimit({windowMs:REQUEST_LIMIT_TIME,max:REQUEST_LIMIT_NUMBER})
app.use(limiter)

// WEB CACHING 

app.set('etag',WEB_CACHE)



//  SET API ROUTES

app.use("/api",router)


// Run  Express Back End Project

app.listen(PORT, () => {
    console.log(`App running on port http://localhost:${PORT}`);
})

