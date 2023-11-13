import styled from "styled-components";

export const Wrapper = styled.div`

    text-align: center;
`;

export const Header = styled.h2`
    color: ${({ theme }) => theme.green60};
    font-size: 48px;
    margin: 0 0 20px 0;
`;

export const Title = styled.div`
    color: ${({ theme }) => theme.grey75};
    margin-bottom: 80px;
`;

export const Box = styled.div`
    padding: 100px;
`;

export const ActionContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 24px;
    padding: 0 240px;
`;

export const LoginButton = styled.button`
    padding: 18px 20px;
    border-radius: 63px;
    border: none;
    background-color: ${({ theme }) => theme.green60};
`;

export const SignUpButton = styled(LoginButton)`
    background-color: ${({ theme }) => theme.grey20};
    color: ${({ theme }) => theme.white};
`;

export const Line = styled.div`
    border-top: 1px solid ${({ theme }) => theme.grey70};
`;

export const Text = styled.div`
    color: ${({ theme }) => theme.grey70};
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    justify-content: center;
    align-items: center;
`;

export const ForgotPasswordButton = styled.a`

`;