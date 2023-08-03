import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
import User from "../models/User.js"

// REFISTER USER

export const register = async(req,res) =>{
    try {
        const {firstName, lastName, email, password, picturePath, friends, location, occupation, viewedProfile, impressions} = req.body;

        const salt = await bcrypt.genSalt();
        const passwordHash = await bcrypt.hash(password, salt)

        
    } catch (error) {
        
    }
}