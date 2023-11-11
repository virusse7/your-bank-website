import React from "react"
import logo from "../../assets/logoBank.svg";
import logoText from "../../assets/YourBank.svg";
import {
    Wrapper,
    Routes,
    LogoField,
    Link,
    StyledLink,
    RegisterField
} from "./styled"

const Navbar = () => (
    <Wrapper>
        <LogoField>
            <img src={logo} width="40px" alt='logo' />
            <img src={logoText} alt='bankName' />
        </LogoField>
        <Routes>
            <Link>Home</Link>
            <Link>Careers</Link>
            <Link>About</Link>
            <Link>Security</Link>
        </Routes>
        <RegisterField>
            <Link>
                Sign Up
            </Link>
            <StyledLink>
                Log in
            </StyledLink>
        </RegisterField>
    </Wrapper>
);

export default Navbar;