import express from "express"
import "dotenv/config"
import cors from "cors"
import connectDB from "./config/mongodb.js";


// app cofig

const app = express();
const port = process.env.PORT || 4000;
connectDB();



// middlware

app.use(express.json());
app.use(cors());



// api endPoint

app.get("/", (req, res) => {
    res.send("Api is working correctly")
})

app.listen(port, () => console.log("App is running on port: ", port));
