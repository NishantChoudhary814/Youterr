import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser";

const app = express();

//accepting all requesting which written in CORS_ORIGIN
//which can talk to our backend
app.use(cors({
    origin:process.env.CORS_ORIGIN,
    credentials:true
}))


//data is come from vary places
app.use(express.json({
    //set upto limit
    limit:"16kb"
}))

//" "-->%20
//format url in a proper manner
app.use(express.urlencoded({
    //extended objects in objects
    extended:true,
    limit:'16kb'
}))

//sometime we want to store file pdf etc in our own server 
//so we create public assests for that
app.use(express.static("public"))


//with cookie parser we can do CRUD operation on user broswer cookies
app.use(cookieParser())


export { app }