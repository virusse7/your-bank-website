import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: ${({ theme }) => theme.grey11};
    border: 1px solid ${({ theme }) => theme.grey15};
    border-radius: 100px;
    padding: 20px 34px;
    margin-top: 50px;
`;

export const styleSVG = Icon => styled(Icon)`
    width:30px;
`;

export const Routes = styled.div`
    display: flex;
    gap: 26px;
`;

export const LogoField = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
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

export const StyledLink = styled(Link)`
    background: ${({ theme }) => theme.green60};
    padding: 14px 30px;
    border-radius: 82px;
    color: ${({ theme }) => theme.black};

    &:hover {
        color: ${({ theme }) => theme.grey40};
    };
`;

export const RegisterField = styled.div`
    display: flex;
    gap: 30px;
`;