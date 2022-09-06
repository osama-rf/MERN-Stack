const mongoose = require('mongoose')
const uniqueValidator = require('mongoose-unique-validator')

const UserSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: [true, "First name is required"]
    },
    lastName: {
        type: String,
        required: [true, "Last name is required"]
    },
    email: {
        type: String,
        required: [true, "Email is required"],
        unique: true
    },
    password: {
        type: String,
        required: [true, "Password is required"],
        minlength: [8, "Password must be at least 8 characters or longer"]
    }
}, {timestamps: true})

UserSchema.plugin(uniqueValidator, {message:"{PATH} is already registered!"})

const Login = mongoose.model("Login", UserSchema)
module.exports = Login;