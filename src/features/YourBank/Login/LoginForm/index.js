import React from 'react'
import { Header, Wrapper, Title, Box, ActionContainer, LoginButton, SignUpButton, Line, Text, ForgotPasswordButton } from './styled'

const LoginForm = () => {
    return (
        <Wrapper>
            <Box>
                <Header>Login</Header>
                <Title>Welcome back! Please log in to access your account.</Title>
                <div>
                    <input type='email' placeholder='Enter your Email' />
                    <input type='password' placeholder='Enter your Password' />
                </div>
                <ForgotPasswordButton>Forgot Password?</ForgotPasswordButton>
                <ActionContainer>
                    <LoginButton>Login</LoginButton>
                    <SignUpButton>Sign Up</SignUpButton>
                    <Text>
                        <Line />
                        Or Continue with
                        <Line />
                    </Text>
                    <div>
                        <img />
                        <img />
                        <img />
                    </div>
                </ActionContainer>
            </Box>
        </Wrapper>
    )
}

export default LoginForm