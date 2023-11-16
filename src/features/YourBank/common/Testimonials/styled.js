import styled from "styled-components";

export const Wrapper = styled.div`

`;

export const Header = styled.h2`
    font-size: 48px;
`;

export const TextGreen = styled.span`
    color: ${({ theme }) => theme.green60};
`;

export const SubTitle = styled.p`
    color: ${({ theme }) => theme.grey70};
`;

export const Tile = styled.div`
    display: flex;
`;

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 50px;
    margin: 0 80px 0 80px;
`;

export const Button = styled.button`
    padding: 14px 24px;
    border-radius: 140px;
    background: none;
    border: none;
    color: ${({ theme }) => theme.white};

    &:active {
        background: ${({ theme }) => theme.green60};
        color: ${({ theme }) => theme.black};
    }
`;

export const Buttons = styled.div`
    padding: 14px;
    background: ${({ theme }) => theme.grey11};
    border: 1px solid ${({ theme }) => theme.grey15};
    border-radius: 82px;
    display: flex;
`;

export const MainContainer = styled.div`
    display: flex;
    align-items: flex-end;
    gap: 300px;
    margin-bottom: 100px;
`;
