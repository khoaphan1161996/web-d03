import React from 'react'

import './style.css'

class PostClassComponent extends React.Component {
    constructor (props) {
        super(props)
        this.state = {}
    }

    shouldComponentUpdate(nextProps) {
        if(this.props.isClicked !== nextProps.isClicked){
            return true
        }
        return false
    }

    
    render () {
        const {id,author,content,isClicked,handleIsClicked} = this.props
        console.log(content)
        return (
            <div onClick={handleIsClicked} className={isClicked ? "post post--clicked" : "post"}>
                <h1>{author}</h1>
                <p>{content}</p>
            </div>
        )
        
    }
  
}

export default PostClassComponent