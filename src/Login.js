import React, { useState } from 'react'
import './Login.css'
import Button from '@material-ui/core/Button'
import { auth, provider } from "./firebase"

function Login() {
    const signIn = () => {
        auth.signInWithPopup(provider)
    };
    return (
        <div className="login">
            <div className="login__container">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/597px-WhatsApp.svg.png" alt="" />
                <div className="login__text">
                    <h1>Sign in to WhatsApp</h1>
                </div>
                <Button type="submit" onClick={signIn}>Sign In With Google</Button>
            </div>
        </div>
    )
}

export default Login
