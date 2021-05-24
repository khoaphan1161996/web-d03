import React,{useState, useEffect} from "react";
import { v4 as uuidv4 } from "uuid";
import axios from 'axios'

import "./style.css";
import PostFuncComponent from '../../components/PostFuncComponent'
import {postList} from '../HomePage/'

import {URL} from '../../constants/global'

const Posts = (props) => {
  // const [posts,setNewPost] = useState(postList)
  const [posts,setNewPost] = useState([])

  useEffect(() => {
      axios.get(`${URL}/posts`)
        .then(function(response) {
          if(response.data.isSuccess === true) {
            return response.data.posts
          }
        })
        .then(result => setNewPost(result))
        .catch(function(err) {
          console.log(err)
        })
  },[])
  
  return (
    <div className="posts">
      {posts.map((post) => (
        <PostFuncComponent
          key={post._id}
          postInfo={post}
        />
      ))}
    </div>
  );
}

export default Posts
