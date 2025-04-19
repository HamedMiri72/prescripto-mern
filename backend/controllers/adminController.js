import doctorModel from "../models/doctorModel.js";
import bcrypt from "bcrypt";
import validator from "validator"
import {v2 as cloudinary} from "cloudinary"



export const addDoctor = async(req, res) => {

  const {name, email, password, speciality, degree, experience, about, fees, address} = req.body;
  const imageFile = req.file;

  try{

    //checking all data to add doctor
    if(!name || !email || !password || !speciality || !degree || !experience || !about || !fees || !address){
      return res.status(400).json({
        success: false,
        message: "Missing details"
      })
    }

    //validating email format
    if(!validator.isEmail(email)){
      return res.status(400).json({
        success: false,
        message: "please enter a valid email"
      })
    }

    // validating strong password
    if(password.length < 8){
      return res.json({success:false, message: "Please Enter a strong password"})
    }

    //hashing doctor password
    const hashedPassword = await bcrypt.hash(password, 12)

    // upload image to cloudinary
    const imageUploaded = await cloudinary.uploader.upload(imageFile.path, {resource_type: "image", folder: "doctors"})
    const imageUrl = imageUploaded.secure_url

    const newDoctor = await doctorModel.create({
      name,
      email,
      image: imageUrl,
      password: hashedPassword,
      speciality,
      degree,
      experience,
      fees,
      about,
      address: JSON.parse(address),
      available: true
    });

    return res.status(201).json({
      succes: true,
      message: "Docter has been crated",
      doctor: {
        ...newDoctor._doc,
        password: undefined
      },
    });
  }catch(error){

    console.log("Error server: ", error.message);
    return res.status(500).json({
      success: false,
      message: "Error in add-doctor in admincontroller"

    })

  }
}