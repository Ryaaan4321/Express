const user = require("../models/user");
const usermodel = require("../models/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const SECRET_KEY = "NOTESAPI";

const signup = async (req, res) => {
    const { username, email, password } = req.body;
    try {
        const existingUser = await usermodel.findOne({ email: email });
        if (existingUser) {
            return res.status(400).json({ message: "User Already exist" })
        }
        const hashedPassword = await bcrypt.hash(password, 10);

        const result = await usermodel.create({
            email: email,
            password: hashedPassword,
            username: username
        });
        // const token = jwt.sign({ email: result.email, id: result._id }, SECRET_KEY);
        res.status(201).json({ user: result });
    }
    catch (error) {

        console.log("error")
        res.status(404).json({ message: "Something went wrong" });
    }


}
const signin = async (req, res) => {
    const { email, password } = req.body;

    try {
        const existingUser = await usermodel.findOne({ email: email });
        if (!existingUser) { //checking if the usser already exists
            return res.status(404).json({ message: "User not found" })
        }
        const matchPassword = await bcrypt.compare(password, existingUser.password);
        if (!matchPassword) {//checking the password if it matchess
            return res.status(400).json({ message: "Invalid credential" });

        }


    }
    catch (error) {
        console.log("error")
        res.status(404).json({ message: "Something went wrong" });

    }

}

module.exports = { signup, signin }