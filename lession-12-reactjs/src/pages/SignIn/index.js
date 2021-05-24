import React,{useState, useEffect} from 'react'
import {Link, useHistory} from 'react-router-dom'
import axios from 'axios'
import './style.css'

import {SIGN_IN, SIGN_UP, HOME,URL} from '../../constants/global'

const SignIn = (props) => {
    let history = useHistory()
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const [isFailure,setIsFailure] = useState(false)

    const handleEmailChange = (e) => {
        setEmail(e.target.value)
    }

    const handlePasswordChange = (e) => {
        setPassword(e.target.value)
    }

    const handleSignIn = () => {
        axios.post(`${URL}/login`, {email,password})
            .then(function (response) {
                if(response.data.isSuccess === true) {
                    history.push({pathname: './home'})
                    setIsFailure(false)
                }
                else {
                    setIsFailure(true)
                }
            })
            .catch (function(error){
                setIsFailure(true)
            })
    }

    const handleSignUp = () => {
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
                { isFailure && <p className="error">{SIGN_IN} không thành công</p>}

                <button onClick={handleSignIn} className="form-control btn btn-sign_in">{SIGN_IN}</button>
                <button onClick={handleSignUp} className="form-control btn btn-sign_up">{SIGN_UP}</button>
            </div>
        </div>
    )
}

export default SignIn