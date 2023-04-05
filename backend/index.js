import  express  from "express"
import cors from "cors"
import mongoose from "mongoose"
import dataSet from "./dataModel.js"
import "./env_config.js"


const app = express()
app.use(express.json())

const PORT_SERVER = process.env.PORT_SERVER
const PORT_CLIENT = process.env.PORT_CLIENT

const DB_USER = process.env.DB_USER
const DB_PASS = process.env.DB_PASS

const DATASET_ID = process.env.DATASET_ID

app.use(cors(
    {
        origin: 'https://automate-the-production.vercel.app',
        methods: ['GET', 'POST'],
        allowedHeaders: ['Content-Type', 'Authorization'],
        preflightContinue: false,
        optionsSuccessStatus: 200
    }
    ))


app.post('/api/v1/new_worker' , async (req,res) => {
    try {
        const data = await dataSet.findByIdAndUpdate(DATASET_ID, req.body)
        res.status(200).json(data)

    } catch (err) {
        console.log(err.message)
        res.status(500).json({message: err.message})
    }
})


app.get('/api/v1/data', async (req,res) => {
    try {
        const data = await dataSet.findById(DATASET_ID)
        res.status(200).json(data)

    } catch (err) {
        console.log(err.message)
        res.status(500).json({message: err.message})
    }
})


app.post('/api/v1/sell_workforce' , async (req,res) => {
    try {
        const data = await dataSet.findByIdAndUpdate(DATASET_ID, req.body)
        res.status(200).json(data)

    } catch (err) {
        console.log(err.message)
        res.status(500).json({message: err.message})
    }
})







mongoose.connect(`mongodb+srv://${DB_USER}:${DB_PASS}@productiondata.skhzx9i.mongodb.net/?retryWrites=true&w=majority`)
.then(() => {
    app.listen(PORT_SERVER, () => console.log("Server running on PORT"+ " " + PORT_SERVER + " 👍"))
    console.log("Connected to DB 👍")
})
.catch((err) => console.log("ERROR - not able to connect to DB 👎"))

export default app