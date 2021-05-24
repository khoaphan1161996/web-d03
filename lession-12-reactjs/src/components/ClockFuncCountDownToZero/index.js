import React,{useState, useEffect} from 'react'

import './style.css'

const ClockFuncCountDownToZero = () => {
    const [clock, setDate] = useState(new Date())

    useEffect(()=>{
        let timer = setInterval(()=>{countdown()},1000)
        
        return function cleanup() {
            clearInterval(timer)
        }
    })

    const countdown = () => {
        setDate(new Date(clock-1000))
    }

    return (
        <div>
            <p><strong>Đếm ngược:</strong> {clock.toLocaleTimeString()}</p>
        </div>
    )
}


export default ClockFuncCountDownToZero