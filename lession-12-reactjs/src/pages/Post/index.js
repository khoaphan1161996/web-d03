import React,{useState, useEffect} from 'react'
import {Link,useParams} from 'react-router-dom'
import axios from 'axios'

import './style.css'
import {URL} from '../../constants/global'
// import {postList} from '../HomePage/'

const Post = () => {
  const [post,setPost] = useState({})
  const {id} = useParams()

  useEffect(() => {
    axios.get(`${URL}/posts/${id}`)
      .then(function (response){
        if(response.data.isSuccess === true) {
          const newPost = response.data.post
          console.log(response)
          return newPost
        }
      })
      .then(result => setPost(result))
      .catch(function (error){
        console.log(error)
      })
  },[])


  return (
    <div className="postid post">
      <div>
        <p className="post__author">{post.author}</p>
        <p className="post__content">{post.body}</p>
        <p className="post__content">👍{post.reaction && post.reaction.like} 
        😀{post.reaction && post.reaction.smile}  
        ❤️{post.reaction && post.reaction.love}  
        😤{post.reaction && post.reaction.angry}  
        😯{post.reaction && post.reaction.surprise}</p>
        <div>
          <p className="post__author">{post.comment && post.comment[0].author}</p>
          <p className="post__content">{post.comment && post.comment[0].body}</p>
          <p className="post__author">{post.comment && post.comment[1].author}</p>
          <p className="post__content">{post.comment && post.comment[1].body}</p>
        </div>
      </div>

      <Link to={"/posts"} className="btn-back">
        BACK
      </Link>
    </div>
  )
}

export default Post