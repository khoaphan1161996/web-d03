import React from 'react'

import './style.css'

class ClockClassCountDownToZero extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            date: new Date()
        }
    }

    componentDidMount = () => {
        let timer = setInterval(
            () => this.countdown(), 1000
        )
    }

    componentWillUnmount = () => {
        clearInterval(this.timer)
    }

    countdown = () => {
        this.setState(state => ({
            date: new Date(state.date - 1000) 
        }))
    }


    render() {
        return (
            <div>
                <p><strong>Đếm ngược:</strong> {this.state.date.toLocaleTimeString()}</p>
            </div>
        )
    }
}

export default ClockClassCountDownToZero