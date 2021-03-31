const express = require('express')
const router = express.Router()

const usersController = require('../controllers/users.controller')

// GET
router.get('/',usersController.getUsers )                             


// GET by ID
router.get('/:id', usersController.getUsersByID)
                         

// DELETE
router.delete('/:id', usersController.deleteUser)


// PUT
// router.put('/:id', (req, res) => {      
//     const {id} = req.params
//     const user = users.find(user => user.id === id)

//     if(!user){
//         let index = users.indexOf(user)
//         users[index] = 

//         return res.status(200).json({
//             isSuccess: true,
//             message: 'put user id',
//             users,
//         }) 
//     } 

//     return res.status(400).json({
//         isSuccess: false,
//         message: 'exist',
//   })


// POST
router.post('/', usersController.postUser) 


module.exports = router