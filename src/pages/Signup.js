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
    margin-bottom: 30px;
    margin-top: 18px;
    
`

export const CardText = styled.h4`
    color: white;
    text-align: left;
    margin-bottom: 10px;
    margin-top: -2px;
    margin-left: 75px;
    font-weight: 300;
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
    width: 25%;
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
    min-height: 87.4vh;
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


export default function Cadastro() {
    return (
        <>
            <GlobalStyle />
            <StyledHeader>
                <StyledLogo src={logo} />
            </StyledHeader>
            <Background>
                <FormTitle>Fórum técnico</FormTitle>
                <FormCard>
                    <CardTitle>Cadastrar</CardTitle>
                    <CardText>Nome</CardText>
                    <FormInput type="text" placeholder="Nome" />
                    <CardText>Email</CardText>
                    <FormInput type="text" placeholder="123@gmail.com" />
                    <CardText>Senha</CardText>
                    <FormInput type="password" placeholder="Senha" />
                    <Submit type="submit" value="Cadastrar" />
                </FormCard>
            </Background>
        </>
    )
}

