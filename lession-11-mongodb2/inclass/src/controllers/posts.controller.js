const Post = require('../models/posts.model')

module.exports.getPosts = async (req,res) => {
    const posts = await Post.find()
    res.status(200).json({
        isSuccess: true,
        message: 'success',
        posts
    }) 
}

module.exports.getPostsByID = (req,res) => {
    // const {id} = req.params
    // const post = posts.find(post => post.id === id)

    // if(!post){
    //     return res.status(400).json({
    //         isSuccess: false,
    //         message: 'not found post id'
    //     })
    // }

    // return res.status(200).json({
    //     isSuccess: true,
    //     message: 'success',
    //     post
    // })
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
    
}

module.exports.putPost = (req,res) => {
    // const {id} = req.params
    // const {title, content, author} = req.body
    
    // const now = new Date();
    // const post = posts.find(post => post.id === id) 

    // if(post){
    //     let index = posts.indexOf(post)
    //     posts[index] = {
    //         id: id,
    //         title,
    //         content,
    //         author,
    //         time: `${now.getHours()}:${now.getMinutes()}`,
    //     }
        
    //     return res.status(200).json({
    //         isSuccess: true,
    //         message: 'put post id',
    //         posts,
    //     })
    //     }
        
    //     return res.status(400).json({
    //         isSuccess: false,
    //         message: 'post does not exist',
    //     })
}

module.exports.deletePost = (req,res) => {
    // const {id} = req.params
    // const post = posts.find(post => post.id === id) 

    // if(post){
    //     let index = posts.indexOf(post)
    //     posts.splice(index,1)

    //     return res.status(200).json({
    //         isSuccess: true,
    //         message: 'delete post id',
    //         posts,
    //     })
    // }

    // return res.status(400).json({
    //     isSuccess: false,
    //     message: 'not found the user id',
    // })
}