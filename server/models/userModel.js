const mongoose = require('mongoose')
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "name is required"]
    },
    username: {
        type: String,
        required: [true, "username is required"]
    },
    email: {
        type: String,
        required: [true, "email is required"]
    },
    phone: {
        type: String,
        required: [true, "phone no. is required"]
    },
    website: {
        type: String,
        required: [true, "website is required"]
    }
}, { timestamps: true });
const userModel = mongoose.model("User", userSchema);
module.exports = userModel;