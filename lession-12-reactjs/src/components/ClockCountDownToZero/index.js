import React from 'react'

import './style.css'

let showtime = new Date()

class ClockCountDownToZero extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            date: showtime
        }
    }

    componentDidMount(){
        let timer = setInterval(
            () => this.tick(), 1000
        )
    }

    componentWillUnmount(){
        clearInterval(this.timer)
    }

    tick() {
        showtime.setSeconds(showtime.getSeconds() - 1)
        this.setState(state => ({
            date: showtime
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

export default ClockCountDownToZero