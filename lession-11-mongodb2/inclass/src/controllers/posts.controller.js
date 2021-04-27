const Post = require('../models/posts.model')

module.exports.getPosts = async (req,res) => {
    const posts = await Post.find()
    res.status(200).json({
        isSuccess: true,
        message: 'success',
        posts
    }) 
}

module.exports.getPostsByID = async (req,res) => {
    const {id} = req.params

    const post = await Post.findById(id)
    if(post){
        return res.status(200).json({
            isSuccess: true,
            message: 'success',
            post
        })
    }
    else{
        return res.status(404).json({
            isSuccess: false,
            message: 'not found the user id'
        })
    }
}

module.exports.CreateNewPost = (req,res) => {
    const {author,body,reaction,comment} = req.body

    if(!author, !body ,!reaction ,!comment) {
        return res.status(400).json({
            isSuccess: false,
            message: 'missing required fields'
        })
    }

    const newPost = new Post({...req.body})

    newPost.save(function(err,doc){
        if(err){
            return res.status(500).json({
                isSuccess: false,
                message: 'database error'
            })
        }
        else {
            res.status(200).json({
                isSuccess: true,
                message: 'success',
                newPost: doc
            })
        }
    })
    
}

module.exports.putPost = (req,res) => {
    const {id} = req.params

    Post.findByIdAndUpdate(id,req.body,function(err,doc){
        if(err){
            return res.status(500).json({
                isSuccess: false,
                message: "post update failure with id"
            })
        }

        else {
            return res.status(200).json({
                isSuccess: true,
                message: "post is successfully update",
                updatePost: {...doc._doc, ...req.body}
            })
        }
    })

}

module.exports.deletePost = (req,res) => {
    const {id} = req.params

    Post.findByIdAndDelete(id,function (err,doc){
        if(err) {
            return res.status(500).json({
                isSuccess: false,
                message: "post delete failure with id"
            })
        }

        else {
            res.status(200).json({
                isSuccess: true,
                message: "delete post or comment"
            })
        }
    })
}