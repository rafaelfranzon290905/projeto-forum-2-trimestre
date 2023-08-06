import { GlobalStyle } from "../GlobalStyle"

import styled from "styled-components"

import logo from "../img/senac_logo.png"

export const FormTitle = styled.h1`
    color: #FF79C6;
    text-align: center;
    padding-top: 60px;
    margin-bottom: 18px;
    
`

export const FormCard = styled.div`
    background-color: #44475A;
    width: 50%;
    margin-right: 25%;
    margin-left: 25%;
    padding: 0px;
    border-radius: 20px;
    border-style: solid;
    border-color: #6272A4;
    border-width: 4px;
    text-align:center;
`

export const CardTitle = styled.h2`
    color: white;
    text-align: center;
    margin-bottom: 18px;
    margin-top: 18px;
    
`

export const FormInput = styled.input`
    width: 80%;
    height: 40px;
    border-radius: 10px;
    margin-bottom: 40px;
    font-size: 16px;
`

export const Submit = styled.input`
    display: block;
    width: 20%;
    height: 30px;
    font-size: 14px;
    background-color: #FF79C6;
    border-radius: 20px;
    margin-bottom: 20px;
    border-style: none;
    margin-left: 70%;
`

export const Background = styled.div`
    background-color: #282A36;
    width: 100%;
    min-height: 100vh;
`

export const StyledHeader = styled.header`
    background-color: #202225;
    width: 100%;
    z-index: 99999;
    top:0;
    
`

export const StyledLogo = styled.img`
    width: 120px;
    margin: 10px; 
`


export default function Login() {
    return (
        <>
            <GlobalStyle />
            <StyledHeader>
                <StyledLogo src={logo} />
            </StyledHeader>
            <Background>
                <FormTitle>Fórum técnico</FormTitle>
                <FormCard>
                    <CardTitle>Login</CardTitle>
                    <FormInput type="text" placeholder="Nome" />
                    <FormInput type="password" placeholder="Senha" />
                    <Submit type="submit" value="Enviar" />
                </FormCard>
            </Background>
        </>
    )
}