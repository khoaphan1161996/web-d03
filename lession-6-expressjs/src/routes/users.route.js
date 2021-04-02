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
router.put('/:id',  usersController.putUser)


// POST
router.post('/', usersController.postUser) 


module.exports = router