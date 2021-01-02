import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import Emoji from 'react-emoji-render'
import { loginRequest } from '../redux/Actions/loginAction'
import { setUserDetails } from '../redux/Actions/userDetailsAction'
import '../styles/loginStyle.css'
import { loginString } from '../Utils/Strings/strings'
import { app_logo } from '../Utils/URLs/urls'

var CryptoJS = require("crypto-js");

const Login = () => {
    const dispatch = useDispatch()
    const history = useHistory()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [errorMessage, setErrorMessage] = useState('')
    const [isError, setIsError] = useState(true)
    const [isErrorBar, setIsErrorBar] = useState(false)
    const [isSuccess, setIsSuccess] = useState(false)

    const { data } = useSelector(state => state.loginReducer.data)
    const { loading } = useSelector(state => state.loginReducer)

    const hashedPassword = CryptoJS.MD5(password).toString()

    const userDetails = {
        email,
        password: hashedPassword
    }

    const isEmpty = (str) => {
        if (str === null || str === "" || str === undefined) {
            return true
        } else {
            return false
        }
    }

    const loginButton = () => {
        return (<div className="btn-container">
            <button
                type="submit"
                className="btn"
                disabled={isErrorBar}
                onClick={handleOnClick}>
                {loginString.login}
            </button>
        </div>
        )
    }

    const emailPasswordValidError = (data) => {
        if (Boolean(data)) {
            if (data.error) {
                setErrorMessage(data.error)
                setIsError(true)
                setIsErrorBar(true)
            } else {
                setIsError(false)
                setIsErrorBar(false)
                setErrorMessage(loginString.loginSuccessMsg)
            }
        }
    }

    useEffect(() => {
        emailPasswordValidError(data)
    }, [loading])

    useEffect(() => {
        emailPasswordValid(data)
    }, [loading])

    useEffect(() => {
        if (isSuccess) {
            history.push("/home")
        }
    }, [isSuccess])

    const emailPasswordValid = (data) => {
        if (Boolean(data)) {
            if (data.redirect) {
                setIsErrorBar(false)
                setIsError(false)
                setIsSuccess(true)
            }
        }
    }

    const handleOnClick = (e) => {
        e.preventDefault()
        if (isEmpty(email) && isEmpty(password)) {
            setIsError(true)
            setIsErrorBar(true)
            setErrorMessage(loginString.errorEmptyEmailPassword)
        } else if (!isEmpty(email) && isEmpty(password)) {
            setIsError(true)
            setIsErrorBar(true)
            setErrorMessage(loginString.errorEmptyPassword)
        } else if (isEmpty(email) && !isEmpty(password)) {
            setIsError(true)
            setIsErrorBar(true)
            setErrorMessage(loginString.errorEmptyEmail)
        } else if (!isEmpty(email) && !isEmpty(password)) {
            setIsError(false)
            setIsErrorBar(false)
            dispatch(setUserDetails(userDetails))
            dispatch(loginRequest())
        }
    }

    const handleOnDismiss = () => {
        setIsError(true)
        setIsErrorBar(false)
    }

    return (
        <div className="login-container">
            {isErrorBar ?
                <div className="login-error-header">
                    <Emoji className="login-error-text" text={errorMessage} />
                    <div className="login-error-dismiss-div">
                        <button
                            className="login-error-dismiss-btn"
                            onClick={handleOnDismiss}>
                            {loginString.dismiss}
                        </button>
                    </div>
                </div>
                : null
            }
            <div className="login-header">
                <img src={app_logo} />
                <div className="login-header-text">
                    <h3>{loginString.web_name}</h3>
                </div>
            </div>
            <div className="login-main">
                <div className="main-left-content">
                    <div>
                        <input
                            className="email-input"
                            type="username"
                            placeholder={loginString.email_ph}
                            onChange={(e) => setEmail(e.target.value)}
                            autoComplete="on" />
                    </div>
                    <div>
                        <input
                            className="password-input"
                            type="password"
                            placeholder={loginString.password_ph}
                            onChange={(e) => setPassword(e.target.value)}
                            autoComplete="on" />
                    </div>
                    {isError ?
                        loginButton()
                        :
                        loginButton()
                    }
                </div>
                <div className="main-right-content">
                    <h4>{loginString.intro_txt}</h4>
                    <br />
                    <h5>{loginString.quote_by}</h5>
                </div>
            </div>
        </div>
    )
}

export default Login

