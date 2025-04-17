import express from "express"
import "dotenv/config"
import cors from "cors"
import connectDB from "./config/mongodb.js";
import adminRouter from "./routes/adminRoute.js";


// app cofig

const app = express();
const port = process.env.PORT || 4000;
connectDB();



// middlware

app.use(express.json());
app.use(cors());



// api endPoint

app.use("/api/admin", adminRouter)


app.listen(port, () => console.log("App is running on port: ", port));
