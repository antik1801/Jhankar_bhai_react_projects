
const asyncHandler = require('express-async-handler');
const User = require('../models/userModel');
const generateToken = require('../config/generateToken');

const registerUser = asyncHandler (async (req,res) =>{
    const { name, email, password, pics } = req.body;

    if (!name || !email || !password) {
        res.status(400);
        throw new Error("Please Enter all the field")
    }

    const userExists = await User.findOne({email});

    if (userExists) {
        res.status(400);
        throw new Error("User already exists")
    }

    const user = await User.create({
        name,
        email,
        password,
        pics
    })

    if (user) {
        res.status(201).json({
            _id: user._id,
            name: user.name,
            email: user.email,
            pics: user.pic,
            token: generateToken(user._id),
        })

    }
    else
    {
        res.status(400)
        throw new Error("Failed to Create the user")
    }
})

module.exports = { registerUser }