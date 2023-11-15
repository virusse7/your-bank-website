import React from 'react'
import Navbar from "../common/Navbar"
import Footer from "../common/Footer"
import { Wrapper } from "./styled"
import SignUpForm from './SignUpForm'

const SignUp = () => {
    return (
        <>
            <Wrapper>
                <Navbar />
                <SignUpForm />
            </Wrapper>
            <Footer />
        </>
    )
}

export default SignUp