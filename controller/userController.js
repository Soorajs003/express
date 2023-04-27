const User = require('../model/userModel')

module.exports ={
    addUser : async (req,res) => {
        const { firstName,lastName, email, password } = req.body;
        try{
            const result = await User.create({
                firstName,
                lastName,
                email,
                password,
            })
            res.status(200).json({result})
        }
        catch(err) {
            res.status(400).json({err})

        }
    }

}