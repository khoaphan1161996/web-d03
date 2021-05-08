import React from 'react'

import './style.css'

class PostClassComponent extends React.Component {
    constructor (props) {
        super(props)
        this.state = {}
    }

    
    render () {
        const {id,author,content,isClicked,handleIsClicked} = this.props

        return (
            <div className={isClicked ? `${id} post green` : `${id} post normal`}>
                <h1>{author}</h1>
                <p>{content}</p>
                <button onClick={handleIsClicked} >ChangeBackGround</button>
            </div>
        )
    }
  
}

export default PostClassComponent