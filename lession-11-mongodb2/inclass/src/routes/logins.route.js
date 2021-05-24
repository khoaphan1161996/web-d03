const express = require('express')
const router = express.Router()

const loginsController = require('../controllers/logins.controller')

router.post('/', loginsController.login)

module.exports = router