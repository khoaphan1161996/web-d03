import React from 'react'

import './style.css'

class CountClassComponent extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            count: 0
        }

        // this.count = this.count.bind(this)
    }

    count(params) {
        // let currentCount = this.state.count
        // currentCount += params
        // this.setState({count: currentCount})

        this.setState(state => ({
            count: state.count + params
        }))
    }
    
    render () {

        return (
            <div className="counter">
                <button onClick={()=> this.count(-1)}>-</button>
                <h2 className="result">{this.state.count}</h2>
                <button onClick={() => this.count(1)}>+</button>
            </div>
        )
    }
  
}

export default CountClassComponent