import express from "express"
import cors from "cors"
import "dotenv/config"
import connectDB from "./config/mongodb.js";


// app config

const app = express();
const port = process.env.PORT || 4000;
connectDB();



//middlware
app.use(express.json());
app.use(cors());


//api endpoint

app.get("/", (req, res) => {

    res.send("API running correctly")

})

app.listen(port, () => console.log("app is running on port: ", port))