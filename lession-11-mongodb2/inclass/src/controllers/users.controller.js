const User = require('../models/users.model');

module.exports.getUsers = async (req, res) => {      
    const users = await User.find()
    res.status(200).json({
        isSuccess:true,
        message:'successfully received users',
        users
    })  
  }

module.exports.getUsersByID = async (req, res) => {      
    const {id} = req.params
    const user = await User.findById(id)

    if(user){
        return res.status(200).json({
            isSuccess: true,
            message: 'successfully received users by id',
            user
        }) 
    }

    res.status(400).json({
        isSuccess: false,
        message: 'not found the user id'
    })     
  }

module.exports.deleteUser = (req, res) => {      
    const {id} = req.params

    User.findByIdAndDelete(id,function (err,doc) {
        if(err) {
            return res.status(500).json({
                isSuccess: false,
                message: "user delete failure with id"
            })
        }

        res.status(200).json({
            isSuccess: true,
            message: "user is successfully delete"
        })
    })
  }

module.exports.putUser = (req, res) => {      
    const {id} = req.params
    
    User.findByIdAndUpdate(id ,req.body, function (err,doc){
        if(err){
            return res.status(500).json({
                isSuccess: false,
                message: "user update failure with id"
            })
        }

        else {
            return res.status(200).json({
                isSuccess: true,
                message: "user is successfully update",
                updateUser: {...doc._doc, ...req.body}
            })
        }
    })
}

module.exports.postUser = (req, res) => {      
    const { email, password} = req.body 

    if(!email || !password){
        return res.status(400).json({
            isSuccess: false,
            message: 'missing required fields',
        })  
    }

    const newUser = new User({... req.body}) // create new document form model

    newUser.save(function (err,doc){  // save = insert
        if(err) {
            return res.status(500).json({
                isSuccess: false,
                message: 'database error'
            })
        }
        else {
            return res.status(200).json({
                isSuccess: true,
                message: "user is successfully created",
                newUser: doc
            })
        }
    })
  }