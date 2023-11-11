import React from 'react'
import logo from "../../assets/logoBank.svg";
import logoText from "../../assets/YourBank.svg";
import envelopeIcon from "../../assets/envelopeIcon.svg";
import locationIcon from "../../assets/locationIcon.svg";
import phoneIcon from "../../assets/phoneIcon.svg";
import facebookIcon from "../../assets/facebookIcon.svg";
import linkedinIcon from "../../assets/linkedinIcon.svg";
import twitterIcon from "../../assets/twitterIcon.svg";
import {
    Wrapper,
    LogoField,
    Routes,
    Link,
    Divider,
    ContactSection,
    InformationText,
    FooterSection,
    StyledRoutes,
    StyledLinkLogo,
    Socials,
    RightsReserved,
    FooterLink
} from './styled'


const Footer = () => {
    return (
        <Wrapper>
            <LogoField>
                <img src={logo} alt='logo' width='40px' />
                <img src={logoText} alt='bankName' />
            </LogoField>
            <Routes>
                <Link>Home</Link>
                <Link>Careers</Link>
                <Link>About</Link>
                <Link>Security</Link>
            </Routes>
            <Divider />
            <ContactSection>
                <Link>
                    <img src={envelopeIcon} alt='envelopeIcon' />
                    abcdef123@gmail.com

                </Link>
                <InformationText>
                    <img src={phoneIcon} alt='phoneIcon' />
                    +91 91813 23 2309
                </InformationText>
                <InformationText>
                    <img src={locationIcon} alt='locationIcon' />
                    Somewhere in the World
                </InformationText>
            </ContactSection>
            <Divider />
            <FooterSection>
                <Socials>
                    <StyledLinkLogo>
                        <img src={facebookIcon} alt='facebookIcon' />
                    </StyledLinkLogo>
                    <StyledLinkLogo>
                        <img src={twitterIcon} alt='twitterIcon' />
                    </StyledLinkLogo>
                    <StyledLinkLogo>
                        <img src={linkedinIcon} alt='linkedinIcon' />
                    </StyledLinkLogo>
                </Socials>
                <RightsReserved>YourBank All Rights Reserved</RightsReserved>
                <StyledRoutes>
                    <FooterLink>Privacy Policy</FooterLink>
                    <FooterLink>Terms of Service</FooterLink>
                </StyledRoutes>
            </FooterSection>
        </Wrapper>
    )
}

export default Footer