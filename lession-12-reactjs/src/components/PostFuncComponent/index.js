import React, { useState, useEffect } from "react";

import "./style.css";

function postPropsAreEqual(prevProps,nextProps) {
  console.log(prevProps.postInfo.isClicked === nextProps.postInfo.isClicked)

    return prevProps.postInfo.isClicked === nextProps.postInfo.isClicked
}

function PostFuncComponent(props) {
  const { postInfo, onClickPost } = props;
  const { id, author, content, isClicked } = postInfo;
  // console.log(postInfo)
  
  return (
    <div
      className={isClicked ? "post post--clicked" : "post"}
      onClick={() => onClickPost(id)}
    >
      <p className="post__author">{author}</p>
      <p className="post__content">{content}</p>
    </div>
  );
}

export default React.memo(PostFuncComponent,postPropsAreEqual)
// export default PostFuncComponent
