import mongoose from "mongoose";


const connectDB = async() => {

    try{

        const conn = await mongoose.connect(process.env.MONGODB_URI);
        console.log("Mongodb is connected on host:: ", conn.connection.host);

    }catch(error){
        console.error("Error in connecting mongoDB: ", error.message);
        process.exit(1);
    }
}

export default connectDB