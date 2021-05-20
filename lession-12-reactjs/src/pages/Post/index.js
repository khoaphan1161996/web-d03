import React,{useState, useEffect} from 'react'
import {Link,useParams} from 'react-router-dom'

import './style.css'
import {postList} from '../HomePage/'

const Post = () => {
  const [post,setPost] = useState({})
  const {id} = useParams()

  useEffect(() => {
    const newPost = postList.find(post => post.id === id)
    console.log(newPost)
    setPost(newPost)
  },[])

  return (
    <div className="postid post">
      <div>
        <p className="post__author">{post.author}</p>
        <p className="post__content">{post.content}</p>
      </div>

      <Link to={"/posts"} className="btn-back">
        BACK
      </Link>
    </div>
  )
}

export default Post