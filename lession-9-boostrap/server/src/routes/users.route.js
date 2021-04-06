const express = require("express")
const router = express.Router()

const usersController = require('../controllers/users.controller')

router.delete('/:id', usersController.deleteUser)
router.put('/:id', usersController.putUser)

module.exports = router