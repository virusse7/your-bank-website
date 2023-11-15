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
    margin-top: 40px;
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

export const SignUpInputs = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 30px;
`;

export const Input = styled.input`
    width: 100%;
    border: 1px solid ${({ theme }) => theme.grey15};
    color: ${({ theme }) => theme.grey35};
    padding: 24px;
    border-radius: 88px;
    background: ${({ theme }) => theme.grey10};
    transition: 1s;
    
    &:hover {
        border-color: ${({ theme }) => theme.green60};
    }
`;

export const ButtonContainer = styled.div`
    display: flex;
    justify-content: space-evenly;

`;

export const Button = styled.button`
    display: flex;
    gap: 10px;
    border-radius: 70px;
    background: linear-gradient(180deg, rgba(202, 255, 51, 0.05) 0%, rgba(202, 255, 51, 0.00) 100%);
    padding: 12px;
    border: none;
`;

export const Icon = styled.img`
    padding: 20px;
    border-radius: 50px;
    background: linear-gradient(180deg, rgba(202, 255, 51, 0.10) -66.22%, rgba(202, 255, 51, 0.00) 85.46%);
`;

export const ButtonIcon = styled.button`
    position: absolute;
    right: 280px;
    top: 532px;
    border: none;
    background: none;
`;

export const Decoration = styled.img`
    width: 200px;
    position: absolute;
    right: 0px;
    top: 0px;
    z-index: -1;
`;