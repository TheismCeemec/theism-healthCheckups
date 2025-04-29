import express from "express";
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"
import User from "../models/User.js"
import { sendEmail } from "../config/sendEmail.js";

export const registerController = async (req, res) => {
  try {
    const { fullName, email, password, phone } = req.body;

    // Check if email already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).send({
        success: false,
        message: "Email already registered❌",
      });
    }

    // Check if mobile already exists
    const existingMobile = await User.findOne({ phone });
    if (existingMobile) {
      return res.status(400).send({
        success: false,
        message: "Mobile number already registered❌",
      });
    }

    // Hash the password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Send email first (before saving user)
    const emailResult = await sendEmail(email, fullName);

    if (!emailResult.success) {
      // If email sending fails, stop the registration
      return res.status(500).send({
        success: false,
        message: "Registration failed because email is not valid❌.",
      });
    }

    if (emailResult.success) {
      // Save the user only if email is sent successfully
      const Newuser = new User({ fullName, email, password: hashedPassword, phone });
      await Newuser.save();
      res.status(200).send({
       success: true,
       data: Newuser,
       message: "User registered successfully✅ and confirmation email sent📧.",
      })
    }

  } catch (error) {
    console.log(error);

    if (error.name === "ValidationError") {
      const messages = Object.values(error.errors).map((val) => val.message);
      return res.status(400).send({
        success: false,
        messages: messages.join(', '),
      });
    }

    res.status(500).send({
      success: false,
      message: "Server Error in Registration!❌",
      error: error.message,
    });
  }
};


//POST LOGIN
export const loginController = async(req,res)=>{
  try {
    const {email,password} = req.body;// Destructuring email and password from request body

    const user = await User.findOne({email});// Finding user by email in the database
    if(!user){// If user not found, return invalid credentials response
      return res.status(401).json({
        success:false,
        message:"Invalid credentials❌",
        error: "Invalid credentials❌"
      })
    }

     // Compare the provided password with the stored hashed password
    const isMatch = await bcrypt.compare(password,user.password);
    if(!isMatch){ // If password doesn't match, return invalid credentials response
      return res.status(401).json({
        success:false,
        message:"Invalid credentials❌",
        error: "Invalid credentials❌"
      })
    }

    //Generate a JWT (JSON Web Token) for the authenticated user
    const token = jwt.sign(
      {userId:user._id,email:user.email}, //Payload: includes the user's unique ID in the token (can be used to identify user later)
      process.env.JWT_SECRET, // Secret key: used to sign the token securely (should be stored safely in environment variables)
      {expiresIn: "5s"}  // Expiry: the token will expire in 1 day (after which the user will need to log in again)
    )
    // If everything is valid, return success response with user data

    // Destructure to remove password before sending user data
    // This helps exclude the password1 field from being sent in the response
    const { password: pwd, ...safeUser } = user._doc;
    // Send a success response with the user data (excluding password1)
    res.status(200).json({
      success:true,
      message:"User is Logged in Successfully ✅",
      token:"Bearer " + token,
      //token,
      data:safeUser
    })
  }
  catch (error) {  // Handle any server errors during login
    // console.log("Login Error:", error);
    res.status(500).send({
        success: false,
        message: "Server Error in Logging!❌",
        error
    })
  }
}