const asyncHandler = require('express-async-handler');
const User = require('../Models/userModel');


const registerUser = asyncHandler(async (req,res) => {
    const { name, email,password, pic } = req.body;
    if (!name || !email || !password) {
        res.status(400)
        throw new Error("Please Enter all the fields")
    }

    const userExists = await User.findOne({email});
    if (userExists) {
        res.status(400)
        throw new Error("User Alreay Exists in chithi-app")
    }
})