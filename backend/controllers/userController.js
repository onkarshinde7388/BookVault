import User from "../models/userSchema.js";
import bcrypt from "bcryptjs";

export const signup = async(req, res) => {
    try {
          console.log(req.body);
        const {fullName, email, password} = req.body;
        const existingUser = await User.findOne({email});
        if(existingUser) {
            return res.status(400).json({message: "User already exists"});
        }
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = new User({fullName, email, password: hashedPassword});
        await newUser.save();
        res.status(201).json({message: "User created successfully", user: {id: newUser._id, fullName: newUser.fullName, email: newUser.email}});
    } catch (error) {
        res.status(500).json({message: "Internal server error", error: error.message});
    }
};

export const login = async(req, res) => {
    try {
        const {email, password} = req.body;
        const user = await User.findOne({email});
        const isMatch = await bcrypt.compare(password, user.password);
        if(!user || !isMatch) {
            return res.status(400).json({message: "Invalid credentials"});
        } else {
            res.status(200).json({message: "Login successful", userId: user._id, fullName: user.fullName, email: user.email});
        }
    } catch (error) {
        res.status(500).json({message: "Internal server error", error: error.message});
    }
}