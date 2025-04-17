import doctorModel from "../models/doctorModel.js";
import bcrypt from "bcrypt";

export const addDoctor = async (req, res) => {
  const {
    name,
    email,
    password,
    speciality,
    degree,
    experience,
    about,
    fees,
    address,
  } = req.body;

  // Corrected to use imageFile, which is defined correctly
  const image = req.file?.filename;

  console.log({ name, email, password, speciality, degree, experience, about, fees, address }, image);

  try {
    // Checking if required fields are present
    if (
      !name ||
      !email ||
      !password ||
      !image ||  // Make sure image is being passed correctly
      !speciality ||
      !degree ||
      !experience ||
      !about ||
      !fees ||
      !address
    ) {
      return res.status(400).json({
        success: false,
        message: "All fields including image are required",
      });
    }

    // Checking if doctor with this email already exists
    const existingDoctor = await doctorModel.findOne({ email });
    if (existingDoctor) {
      return res.status(409).json({
        success: false,
        message: "Doctor already exists",
      });
    }

    // Hashing password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new doctor record
    const newDoctor = await doctorModel.create({
      name,
      email,
      password: hashedPassword,
      image,  // Here, we are using imageFile (which is `req.file?.filename`)
      speciality,
      degree,
      experience,
      about,
      fees,
      address,
      available: true,
    });

    const { password: _, ...doctorWithoutPassword } = newDoctor.toObject();  // Removing password from the response

    return res.status(201).json({
      success: true,
      message: "Doctor created successfully",
      doctor: doctorWithoutPassword,
    });
  } catch (error) {
    console.error("Error creating doctor:", error.message);
    return res.status(500).json({
      success: false,
      message: "Server error while creating doctor",
    });
  }
};
