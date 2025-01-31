const express = require('express')
const User = require('../model/User')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const router = express.Router()

router.post("/signup", async (req, res) => {

    try {

        const { name, email, password, phone, type } = req.body
        const hashedPassword = await bcrypt.hash(password, 10)

        const user = new User({

            name,
            email,
            password: hashedPassword,
            phone,
            type
        })

        const result = await user.save()
        return res.status(200).json({ msg: "User Created Successfully!" })
    } catch (error) {

        console.log("Error Found!", error);

    }
})

router.post('/login', async (req, res) => {

    try {
        const { email, password } = req.body
        const DBusers = await User.find({ email })

        if (DBusers.length === 0) {
            return res.status(200).json("Email Not Found!")
        } else {
            const particularUser = DBusers[0]
            const foundOrNot = await bcrypt.compare(password, particularUser.password)
            if (!foundOrNot) {
                return res.status(400).json({ msg: "Invalid Password!" })
            } else {
                particularUser.password = undefined;
                const token = await jwt.sign({ id: particularUser._id}, 'blackwidow243')
                return res.status(200).json({ user: particularUser, token })
            }
        }

    } catch (error) {
        console.log("Error Found!", error);
        return res.status(500).json({ msg: "An error occurred during login." });
    }

})

module.exports = router