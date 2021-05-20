import React,{useState, useEffect} from 'react'
import {List, useHistory} from 'react-router-dom'
import axios from 'axios'
import './style.css'

import {SIGN_IN, SIGN_UP, HOME,URL} from '../../constants/global'

const SignUp = (props) => {
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
    
    const handleSignUp = () => {
        axios.post(`${URL}/users`, {email,password})
            .then(function (response) {
                if(response.data.isSuccess === true) {
                    history.push({pathname: './sign-in'})
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
                { isFailure && <p className="error">Không được để trống</p>}

                <button onClick={handleSignUp}  className="form-control btn btn-sign_up">{SIGN_UP}</button>
            </div>
        </div>
    )
}

export default SignUp