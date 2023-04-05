import  express  from "express"
import cors from "cors"
import mongoose from "mongoose"
import "./env_config.js"


const app = express()
app.use(express.json())

const PORT_SERVER = process.env.PORT_SERVER
const PORT_CLIENT = process.env.PORT_CLIENT

const DB_USER = process.env.DB_USER
const DB_PASS = process.env.DB_PASS

app.use(cors(
    {
        origin: '*',
        methods: ['GET', 'PUT', 'POST'],
        allowedHeaders: ['Content-Type', 'Authorization'],
        preflightContinue: false,
        optionsSuccessStatus: 200
    }
    ))













mongoose.connect(`mongodb+srv://${DB_USER}:${DB_PASS}@productiondata.skhzx9i.mongodb.net/?retryWrites=true&w=majority`)
.then(() => {
    app.listen(PORT_SERVER, () => console.log("Server running on PORT"+ " " + PORT_SERVER + " 👍"))
    console.log("Connected to DB 👍")
})
.catch((err) => console.log("ERROR - not able to connect to DB 👎"))