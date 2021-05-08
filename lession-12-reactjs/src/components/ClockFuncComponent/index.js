import React,{useState} from 'react'

import './style.css'

function ClockFuncComponent() {
    const [clock, Tick] = useState(new Date())
    
    useEffect(()=>{

    })

    return (
        <div>
            <p><strong>Bây giờ là:</strong> {clock.toLocaleTimeString()}</p>
        </div>
    )
}

export default ClockFuncComponent