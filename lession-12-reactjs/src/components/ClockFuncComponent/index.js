import React,{useState, useEffect} from 'react'

import './style.css'

function ClockFuncComponent() {
    const [clock, setDate] = useState(new Date())
    
    useEffect(()=>{
        let timer = setInterval(()=>{tick()},1000)
        return function cleanup() {
            clearInterval(timer)
        }
    })

    function tick() {
        setDate(new Date())
    }
    
    return (
        <div>
            <p><strong>Bây giờ là:</strong> {clock.toLocaleTimeString()}</p>
        </div>
    )
}

export default ClockFuncComponent