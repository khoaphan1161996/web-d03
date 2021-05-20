import React,{useState, useEffect} from "react";
import { v4 as uuidv4 } from "uuid";

import "./style.css";
import PostFuncComponent from '../../components/PostFuncComponent'
import {postList} from '../HomePage/'

const Posts = (props) => {
  const [posts,setNewPost] = useState(postList)
  
  return (
    <div className="posts">
      {posts.map((post) => (
        <PostFuncComponent
          key={post.id}
          postInfo={post}
        />
      ))}
    </div>
  );
}

export default Posts
