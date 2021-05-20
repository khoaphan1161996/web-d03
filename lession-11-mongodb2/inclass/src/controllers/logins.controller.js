const User = require('../models/users.model')

module.exports.login = async (req,res) => {
    const {email,password} = req.body
    const user = await User.findOne({email,password})

    if(user) {
        return res.status(200).json({
            isSuccess: true,
            message:'login succesfully'
        })
    }
    else {
        return res.status(400).json({
            isSuccess: false,
            message:'wrong emailor pass',
        })
    }

}