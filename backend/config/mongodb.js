import mongoose from "mongoose";

const connectDB = async() => {

    try{

        const conn = await mongoose.connect(process.env.MONGODB_URI);
        const host = conn.connection.host;
        console.log("Mongodb is connected on host:: ", host);
    }catch(error){
        console.error("Error in connecting to the database", error.message);
        process.exit(1);
    }
}

export default connectDB;