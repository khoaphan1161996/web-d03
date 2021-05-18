import React,{useState, useEffect} from 'react'
import {List, useHistory} from 'react-router-dom'
import './style.css'

import {SIGN_IN, SIGN_UP, HOME} from '../../constants/global'

const SignUp = (props) => {
    let history = useHistory()
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')

    const handleEmailChange = (e) => {
        setEmail(e.target.value)
        // console.log(email)
    }

    const handlePasswordChange = (e) => {
        setPassword(e.target.value)
        // console.log(password)
    }
    
    const handleSignUp = () => {
        console.log('email',email,'password',password)
        history.push({pathname: './home'})
    }

    return (
        <div className="sign-up">
            <div className="form-controls">
                <input 
                className="form-control"
                type="text" 
                placeholder="Email"
                value={email} 
                onChange={handleEmailChange}></input>

                <input
                className="form-control"
                type="password" 
                placeholder="Mật khẩu"
                value={password} 
                onChange={handlePasswordChange}></input>

                <button onClick={handleSignUp}  className="form-control btn btn-sign_up">{SIGN_UP}</button>
            </div>
        </div>
    )
}

export default SignUp