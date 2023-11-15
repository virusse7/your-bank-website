import React from 'react'
import facebookIcon from "./icons/facebookIcon.svg";
import appleIcon from "./icons/appleIcon.svg";
import googleIcon from "./icons/googleIcon.svg";
import eyeIcon from "./icons/eyeIcon.svg";
import decoration from "../../assets/circle-top-right.svg"
import {
    Header,
    Wrapper,
    Title,
    Box,
    ActionContainer,
    SignUpInputs,
    LoginButton,
    SignUpButton,
    Line,
    Text,
    Input,
    ButtonContainer,
    Icon,
    Button,
    Decoration,
    ButtonIcon
} from './styled'

const SignUpForm = () => {
    return (
        <Wrapper>
            <Decoration src={decoration} />
            <Box>
                <Header>Sign Up</Header>
                <Title>Join our community today! Create an account to unlock exclusive features and personalized experiences.</Title>
                <SignUpInputs>
                    <Input type='text' placeholder='Enter First Name' />
                    <Input type='text' placeholder='Enter Last Name' />
                    <Input type='email' placeholder='Enter your Email' />
                    <Input type='password' placeholder='Enter your Password' />
                    <ButtonIcon><img src={eyeIcon} /></ButtonIcon>
                </SignUpInputs>
                <ActionContainer>
                    <LoginButton>Login</LoginButton>
                    <SignUpButton>Sign Up</SignUpButton>
                    <Text>
                        <Line />
                        Or Continue with
                        <Line />
                    </Text>
                    <ButtonContainer>
                        <Button>
                            <Icon src={facebookIcon} />
                        </Button>
                        <Button>
                            <Icon src={googleIcon} />
                        </Button>
                        <Button>
                            <Icon src={appleIcon} />
                        </Button>
                    </ButtonContainer>
                </ActionContainer>
            </Box>
        </Wrapper>
    )
}

export default SignUpForm