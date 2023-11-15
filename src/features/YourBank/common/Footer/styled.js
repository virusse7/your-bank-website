import styled from "styled-components";

export const Wrapper = styled.div`
    background: ${({ theme }) => theme.grey11};
    padding: 100px 162px 50px 162px;
`;

export const LogoField = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Routes = styled.div`
    display: flex;
    justify-content: center;
    gap: 26px;
    margin-top: 50px;
`;

export const Link = styled.a`
    display: flex;
    align-items: center;
    padding: 0;
    color: inherit;
    background: none;
    border: none;
    cursor: pointer;
    transition: 1s;

    &:hover {
        color: ${({ theme }) => theme.green60};
    };
`;

export const Divider = styled.div`
    border: 1px solid ${({ theme }) => theme.grey15};
    margin: 50px 0;
`;

export const ContactSection = styled.div`
    display: flex;
    gap: 20px;
    justify-content: center;
    align-items: center;
`;

export const InformationText = styled.div`
    display: flex;
    align-items: center;
    transition: 1s;

    &:hover {
        color: ${({ theme }) => theme.green60};
    };
`;

export const FooterSection = styled.footer`
    background: ${({ theme }) => theme.grey10};
    border: 1px solid ${({ theme }) => theme.grey15};
    border-radius: 100px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 16px 30px;
`;

export const StyledRoutes = styled(Routes)`
    margin: 0;
    gap: 12px;
`;

export const StyledLinkLogo = styled(Link)`
    padding: 14px;
    border: none;
    border-radius: 100px;
    background: ${({ theme }) => theme.green60};
    cursor: pointer;
`;

export const Socials = styled.div`
    display: flex;
    gap: 10px;
`;

export const RightsReserved = styled.div`
    color: ${({ theme }) => theme.grey70};
`;

export const FooterLink = styled(Link)`
    color: ${({ theme }) => theme.grey70};
`;