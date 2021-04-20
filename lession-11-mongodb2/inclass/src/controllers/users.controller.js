const User = require('../models/users.model');

module.exports.getUsers = (req, res) => {      
    res.status(200).json({
        isSuccess: true,
        message: 'success',
        users
    })     
  }

module.exports.getUsersByID = (req, res) => {      
    const {id} = req.params
    const user = users.find(user => user.id === id)

    if(!user){
        return res.status(400).json({
            isSuccess: false,
            message: 'not find the user id',
        }) 
    }

    res.status(200).json({
        isSuccess: true,
        message: 'success',
        user
    })     
  }

module.exports.deleteUser = (req, res) => {      
    const {id} = req.params
    const user = users.find(user => user.id === id)

    if(user){
        let index = users.indexOf(user)
        users.splice(index,1)

        return res.status(200).json({
            isSuccess: true,
            message: 'delete user id',
            users,
        }) 
    } 

    res.status(400).json({
        isSuccess: false,
        message: 'not find the user id',
    })  
  }

module.exports.putUser = (req, res) => {      
    const {id} = req.params
    const { name } = req.body
    const user = users.find(user => user.id === id)

    if(user){
        let index = users.indexOf(user)
        users[index] = {
            id: id,
            name,
        }

        return res.status(200).json({
            isSuccess: true,
            message: 'put user id',
            users,
        })
    } 

    return res.status(400).json({
        isSuccess: false,
        message: 'user does not exist',
  })
}

module.exports.postUser = (req, res) => {      
    const { email, password,firstName, lastName,birthday,isMale} = req.body 

    if(!email || !password || !firstName || !lastName || !birthday || !isMale){
        return res.status(400).json({
            isSuccess: false,
            message: 'missing required fields',
        })  
    }

    const newUser = new User({... req.body}) // create new document form model

    newUser.save(function (err,doc){
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

    res.status(200).json({
        isSuccess: true,
        message: 'success',
        users
    })     
  }