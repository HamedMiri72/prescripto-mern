import express from "express"
import "dotenv/config"
import connectDB from "./config/mongodb.js"
import cors from "cors"
import adminRouter from "./routes/adminRoute.js";
import connectCloudinary from "./config/cloudinary.js";


//app config

const app = express();
const port = process.env.PORT || 4000
connectDB();
connectCloudinary();


//middleware
app.use(express.json())    // -> req.body
app.use(cors())

// api endpoint
app.use("/api/admin", adminRouter)


app.listen(port, () => console.log("App is running on port:: ", port))