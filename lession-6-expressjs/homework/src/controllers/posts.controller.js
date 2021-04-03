const posts = [
    {
        id: '1',
        title: 'rich',
        content: "i'm rich",
        author: 'Hieu',
        time: '1:00',
        comments: [
            {author: "khoa",
             comment: "hi"}
        ]
    },
    {
        id: '2',
        title: 'victory',
        content: "road to challenge",
        author: 'Vinh',
        time: '3:00',
        comments: [
            {author: "khoa",
             comment: "hi"}
        ]
    },
    {
        id: '3',
        title: 'poor',
        content: "i'm poor",
        author: 'Quang',
        time: '4:00',
        comments: [
            {author: "khoa",
             comment: "hi"},
             {author: "vinh",
             comment: "bye"},
        ]
    },
    {
        id: '4',
        title: 'Beauty',
        content: "i'm beautiful",
        author: 'Giang',
        time: '2:45',
        comments: [
            {author: "khoa",
             comment: "hi"},
             {author: "vinh",
             comment: "bye"},
        ]
    },
]

module.exports.getPosts = (req,res) => {
    res.status(200).json({
        isSuccess: true,
        message: 'success',
        posts
    })  
}

module.exports.getPostsByID = (req,res) => {
    const {id} = req.params
    const post = posts.find(post => post.id === id)

    if(!post){
        return res.status(400).json({
            isSuccess: false,
            message: 'not find post id'
        })
    }

    return res.status(200).json({
        isSuccess: true,
        message: 'success',
        post
    })
}

module.exports.CreateNewPost = (req,res) => {
    const {title, content, author} = req.body
    const now = new Date();

    posts.push({
        id: `${posts.length + 1}`,
        title,
        content,
        author,
        time: `${now.getHours()}:${now.getMinutes()}`,
    })

    res.status(200).json({
        isSuccess: true,
        message: 'success',
        posts
    })  
}

module.exports.putPost = (req,res) => {
    const {id} = req.params
    const {title, content, author} = req.body
    
    const now = new Date();
    const post = posts.find(post => post.id === id) 

    if(post){
        let index = posts.indexOf(post)
        posts[index] = {
            id: id,
            title,
            content,
            author,
            time: `${now.getHours()}:${now.getMinutes()}`,
        }
        
        return res.status(200).json({
            isSuccess: true,
            message: 'patch post id',
            posts,
        })
        }
        
        return res.status(400).json({
            isSuccess: false,
            message: 'post does not exist',
        })
}

module.exports.deletePost = (req,res) => {
    const {id} = req.params
    const post = posts.find(post => post.id === id) 

    if(post){
        let index = posts.indexOf(post)
        posts.splice(index,1)

        return res.status(200).json({
            isSuccess: true,
            message: 'delete post id',
            posts,
        })
    }

    return res.status(400).json({
        isSuccess: false,
        message: 'not find the user id',
    })
}