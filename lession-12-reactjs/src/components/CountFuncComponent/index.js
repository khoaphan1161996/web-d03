import React,{useState} from 'react'
import './style.css'

function CountFuncComponent () {
    const [count, setCount] = useState(0)

    return (
        <div className="counter">
                <button onClick={()=> setCount(count-1)}>-</button>
                <h2 className="result">{count}</h2>
                <button onClick={() =>setCount(count+1)}>+</button>
        </div>
    )
}

export default CountFuncComponent