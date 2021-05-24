import React from 'react'

import './style.css'

class ClockClassComponent extends React.Component {
    constructor (props) {
        super(props)
        this.state = {date: new Date()}
    }

    componentDidMount = () => {
        let timer = setInterval(
            () => this.tick(), 1000);
    }

    componentWillUnmount = () => {
        clearInterval(this.timer)
    }

    tick = () => {
        this.setState(state => ({
            date: new Date()
        }))
    }

    render() {
      return (
        <div>
            <p><strong>Bây giờ là:</strong> {this.state.date.toLocaleTimeString()}</p>
        </div>
      );
    }
}

export default ClockClassComponent