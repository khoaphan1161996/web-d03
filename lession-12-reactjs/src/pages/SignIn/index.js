import React,{useState, useEffect} from 'react'
import {Link, useHistory} from 'react-router-dom'
import './style.css'

import {SIGN_IN, SIGN_UP, HOME} from '../../constants/global'

const SignIn = (props) => {
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

    const handleSignIn = () => {
        console.log('email',email,'password',password)
        history.push({pathname: './home'})
    }

    const handleSinUp = () => {
        console.log('email:',email,'password:',password)
        history.push({pathname: './sign-up'})
    }

    return (
        <div className="sign-in">
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

                <button onClick={handleSignIn} className="form-control btn">{SIGN_IN}</button>
                <button onClick={handleSinUp} className="form-control btn">{SIGN_UP}</button>
            </div>
        </div>
    )
}

export default SignIn