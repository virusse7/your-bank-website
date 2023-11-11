import React from 'react'
import { Header, Wrapper } from './styled'

const LoginForm = () => {
    return (
        <Wrapper>
            <Header>Login</Header>
            <p>Welcome back! Please log in to access your account.</p>
            <div>
                <input type='email' placeholder='Enter your Email' />
                <input type='password' placeholder='Enter your Password' />
            </div>
            <div>Forgot Password?</div>
            <div>
                <a>Login</a>
                <a>Sign Up</a>
            </div>
            <div>
                <img />
                <img />
                <img />
            </div>
        </Wrapper>
    )
}

export default LoginForm