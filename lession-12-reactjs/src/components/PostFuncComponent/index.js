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
  const { id, author, content} = postInfo;
  
  return (
    <Link to={`/post/${id}`} className="preventdefauta">
      <div className="post">
        <p className="post__author">{author}</p>
        <p className="post__content">{content}</p>
      </div>
    </Link>
  );
}

export default PostFuncComponent