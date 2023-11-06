import React from "react"
import logo from "../../../../assets/logoBank.svg";
import logoText from "../../../../assets/YourBank.svg";
import {
    Wrapper,
    Routes,
    LogoField,
    Button,
    StyledButton,
    RegisterField
} from "./styled"

const Navbar = () => (
    <Wrapper>
        <LogoField>
            <img src={logo} width="40px" />
            <img src={logoText} />
        </LogoField>
        <Routes>
            <Button>Home</Button>
            <Button>Careers</Button>
            <Button>About</Button>
            <Button>Security</Button>
        </Routes>
        <RegisterField>
            <Button>
                Sign Up
            </Button>
            <StyledButton>
                Log in
            </StyledButton>
        </RegisterField>
    </Wrapper>
);

export default Navbar;