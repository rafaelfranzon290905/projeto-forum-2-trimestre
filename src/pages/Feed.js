import styled from "styled-components"
import senac_logo from "../img/senac_logo.png"
import profile_pic from "../img/profile_pic.png"
import reticencias from '../img/reticencias.png'
import heart from '../img/heart.png'
import comment from '../img/comment.png'
import { GlobalStyle } from "../GlobalStyle"

const Background = styled.div`
    background-color: #282A36;
    width: 100%;
    min-height: 100vh;
`

const StyledNav = styled.nav`
    
    background-color: #202225;
    height: 100vh;
    width: 300px;
    border-radius: 0px 20px 20px 0px;
    position: fixed;
    @media (max-width: 700px) {
        display: none;
    }
`

const Posts = styled.div`
     padding-left: 400px;
     @media (max-width: 700px) {
        padding-left: 40px;
        width: 89%;
    }
`

const Search = styled.input`
     border-radius: 15px;
     width: 89%;
     height: 40px;
     margin-top: 60px;
     background-color: #D9D9D9;
     font-size: 18px;
     padding-left: 10px;
     padding-right: 10px;
     border: none;
     @media (max-width: 700px) {
          font-size: 14px;
      }
`

const Post = styled.div`
     
     background-color: #44475A;
     width: 89%;
     margin-right: 0%;
     margin-left: 0%;
     margin-top: 5%;
     margin-bottom: 15%;
     border-radius: 20px;
     border-style: solid;
     border-color: #6272A4;
     border-width: 4px;
     text-align:center;
     padding-right: 5%;
     padding-left: 5%;
     padding-bottom: calc(5% + 30px);
     padding-top: 0%;
     
`

const Username = styled.h2`
     color: white;
     display: block;
     text-align: left;
     display: flex;
     margin-top: 2%;
     @media (max-width: 700px) {
          font-size: 22px;
          margin-top: 4%; 
      }
`

const PostInput = styled.textarea`
    width: 100%;
    height: 200px;
    border-radius: 10px;
    margin-bottom: 20px;
    font-size: 16px;
    @media (max-width: 700px) {
     margin-top: 10px;
 }
    
`

const Container = styled.div`
     

`

const ImagemLogo = styled.img`
     width: 65%;
     margin: 10%;
`

const ImagemPerfil = styled.img`
     width: 45px;
     height: 45px;
     margin-top: 12px;
     margin-right: 10px;
     display: flex;
`

const Reticencias = styled.img`
     margin-left: 50%;
     height: 5px;
     margin-top: 30px;
     @media (max-width: 700px) {
          margin-left: 20%;
      }
`

const Perfil = styled.div`
     display: flex;
`

const NavOptions = styled.h3`
     color: white;
     margin-top: 15%;
     margin-bottom: 15%;
     margin-left: 10%;
     margin-right: 25%;
     border-bottom: 3px solid #FF79C6;
     padding-bottom: 5%;
     font-weight: 300;
`

const NavOptionsSelected = styled.h3`
     color: white;
     margin-top: 15%;
     margin-bottom: 15%;
     margin-left: 10%;
     margin-right: 25%;
     border-bottom: 3px solid #FF79C6;
     padding-bottom: 5%;
     font-weight: 700;
`

const Interacoes = styled.div`
     display: flex;
     float: right;
     gap: 20px;
`

const ImgInteracoes = styled.img`
     width: 45px;
     
     
`

function Feed(props){

    return(
        <>
        <GlobalStyle />
        <Background>
          <Container>
               <StyledNav>
                    <ImagemLogo src={senac_logo} alt='Logo do senac'/>
                    <NavOptionsSelected>Feed</NavOptionsSelected>
                    <NavOptions>Intervenções</NavOptions>
                    <NavOptions>Perfil</NavOptions>
                    <NavOptions>Configurações</NavOptions>
               </StyledNav>
               <Posts>
                    <Search placeholder="Qual a sua dúvida sobre o mundo do trabalho?">

                    </Search>

                    <Post>
                         <Perfil>
                              <ImagemPerfil src={profile_pic} alt='foto de perfil'/>
                              <Username>Lucas Camargo Jentz</Username>
                              <Reticencias src={reticencias} alt='...'/>
                         </Perfil>
                         <PostInput type="text"/> 
                         <Interacoes>
                              <ImgInteracoes src={comment} alt=""/>
                              <ImgInteracoes src={heart} alt=""/>
                         </Interacoes> 
                    </Post>
               </Posts>
               
          </Container>
        </Background>
        </>

    )
}

export default Feed