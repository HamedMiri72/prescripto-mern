import jwt from "jsonwebtoken"


// admin authentication middleware

const authAdmin = async (req, res, next) => {


    try{

        const {atoken} = req.headers
        if(!atoken){
            return res.status(400).json({
                success: false,
                message: "Not authorised log in again"
            })
        }

        const tokenDecode = jwt.verify(atoken, process.env.JWT_SECRET);
        if(tokenDecode.email !== process.env.ADMIN_EMAIL){
            return res.status(403).json({
                succes: false,
                message: "Not authorized log in again"
            })
        };

        next();


    }catch(error){
        console.log("Error in auth admin::", error.message)
        return res.status(500).json({
            success: false,
            message: "Error in auth admin middlware"
        })
    }

}


export default authAdmin