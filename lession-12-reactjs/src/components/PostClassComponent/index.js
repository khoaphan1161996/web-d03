import React from 'react'

import './style.css'

class PostClassComponent extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            
        }
    }

    
    render () {
        const {id,author,content,isClicked} = this.props

        return (
            <div className="post">
                <h3>{id}</h3>
                <h1>{author}</h1>
                <p>{content}</p>
                <p>{isClicked}</p>
            </div>
        )
    }
  
}

export default PostClassComponent