const express = require('express')
const router = express.Router()

const postsController = require('../controllers/posts.controller')

router.get('/', postsController.getPosts)
router.get('/:id', postsController.getPostsByID)
router.post('/', postsController.CreateNewPost)
router.put('/:id', postsController.putPost)
router.delete('/:id',postsController.deletePost)

module.exports = router