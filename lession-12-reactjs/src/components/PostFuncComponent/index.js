import React, { useState, useEffect } from "react";
import {Link} from "react-router-dom"

import "./style.css";

// const postPropsAreEqual = (prevProps,nextProps) => {
//   return prevProps.postInfo.isClicked === nextProps.postInfo.isClicked
// }

// const PostFuncComponent = (props) => {
//   const { postInfo, onClickPost } = props;
//   const { id, author, content, isClicked } = postInfo;
//   // console.log(author)
  
//   return (
//     <div
//       className={isClicked ? "post post--clicked" : "post"}
//       onClick={() => onClickPost(id)}
//     >
//       <p className="post__author">{author}</p>
//       <p className="post__content">{content}</p>
//     </div>
//   );
// }

// export default React.memo(PostFuncComponent,postPropsAreEqual)


const PostFuncComponent = (props) => {
  const { postInfo } = props;
  const { _id, author, body,reaction} = postInfo;
  
  return (
    <Link to={`/post/${_id}`} className="preventdefauta">
      <div className="post">
        <p className="post__author">{author}</p>
        <p className="post__content">{body}</p>
        <p className="post__content">👍{reaction.like} 😀{reaction.smile}  ❤️{reaction.love}  😤{reaction.angry}  😯{reaction.surprise}</p>
      </div>
    </Link>
  );
}

export default PostFuncComponent