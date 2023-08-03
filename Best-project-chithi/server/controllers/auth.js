import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
import User from "../models/User.js"

// REFISTER USER

export const register = async(req,res) =>{
    try {
        const {firstName, lastName, email, password, picturePath, friends, location, occupation, viewedProfile, impressions} = req.body;
    } catch (error) {
        
    }
}