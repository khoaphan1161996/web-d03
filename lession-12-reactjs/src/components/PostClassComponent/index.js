import React from 'react'

import './style.css'

class PostClassComponent extends React.Component {
  shouldComponentUpdate = (nextProps, nextState) => {
    if(nextProps.postInfo.isClicked === this.props.postInfo.isClicked) {
      return false
    }
    return true
  }

  render() {
    const { postInfo, onClickPost } = this.props
    const { id, author, body, isClicked } = postInfo
    // console.log(content)
    return (
      <div 
        className={isClicked ? "post post--clicked" : "post"}
        onClick={() => onClickPost(id)}
      >
        <p className="post__author">{author}</p>
        <p className="post__content">{body}</p>
      </div>
    )
  }
}

export default PostClassComponent