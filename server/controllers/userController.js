const userModel = require("../models/userModel");

const registerUser = async(req, res) => {

    try {
        const { name, username, email, phone, website } = req.body;
        if (!name || !email || !phone || !website) {
            return res.status(400).send({
                success: false,
                message: "Please fill all fields",
            });
        }



        const existingUser = await userModel.findOne({ email });
        if (existingUser) {
            return res.status(401).send({
                success: false,
                message: "User already exists",
            });
        }
        const user = new userModel({ name, username, email, phone, website })
        await user.save();
        return res.status(201).send({
            success: true,
            message: "New User Created",
            user,
        })
    } catch (error) {
        console.log(error);
        return res.status(500).send({
            message: "Error In Register callback",
            success: false,
            error,
        });
    }
};
const getUser = async(req, res) => {
    try {
        const users = await userModel.find({});
        return res.status(200).send({
            userCount: users.length,
            success: true,
            message: "all users data",
            users,
        });
    } catch (error) {
        console.log(error);
        return res.status(500).send({
            success: false,
            message: "Error In Get ALl Users",
            error,
        });
    }
}
const deleteUser = async(req, res) => {
    try {
        await userModel.findOneAndDelete({ _id: req.params.id });
        return res.status(200).send({
            success: true,
            message: "User deleted",
        })
    } catch (error) {
        return res.status(400).send({
            success: false,
            message: error
        })
    }
};
const editUser = async(req, res) => {
    try {
        const { name, email, phone, website } = req.body;
        const { id } = req.params;
        const user = await userModel.findByIdAndUpdate(
            id, {...req.body }, { new: true }
        )
        user.save();
        return res.status(200).send({
            success: true,
            message: "User Updated!",
            user,
        });
    } catch (error) {
        return res.status(400).send({
            success: false,
            message: error
        })
    }
}
module.exports = { registerUser, getUser, deleteUser, editUser };