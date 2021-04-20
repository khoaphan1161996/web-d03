const express = require("express")
const router = express.Router()

const usersController = require('../controllers/users.controller')

router.get('/',usersController.getUsers )  
router.get('/:id', usersController.getUsersByID)
router.delete('/:id', usersController.deleteUser)
router.put('/:id', usersController.putUser)
router.post('/', usersController.postUser) 

module.exports = router