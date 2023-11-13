import React from 'react'
import {
    Header,
    Wrapper,
    Title,
    Box,
    ActionContainer,
    LoginInputs,
    LoginButton,
    SignUpButton,
    Line,
    Text,
    ForgotPasswordButton,
    Input,
    ButtonContainer
} from './styled'

const LoginForm = () => {
    return (
        <Wrapper>
            <Box>
                <Header>Login</Header>
                <Title>Welcome back! Please log in to access your account.</Title>
                <LoginInputs>
                    <Input type='email' placeholder='Enter your Email' />
                    <Input type='password' placeholder='Enter your Password' />
                </LoginInputs>
                <ForgotPasswordButton>Forgot Password?</ForgotPasswordButton>
                <ActionContainer>
                    <LoginButton>Login</LoginButton>
                    <SignUpButton>Sign Up</SignUpButton>
                    <Text>
                        <Line />
                        Or Continue with
                        <Line />
                    </Text>
                    <ButtonContainer>
                        <img />
                        <img />
                        <img />
                    </ButtonContainer>
                </ActionContainer>
            </Box>
        </Wrapper>
    )
}

export default LoginForm