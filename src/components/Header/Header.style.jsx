import styled from "styled-components";
import picturePhoto from '../../assets/picturePhoto.jpg'
import { theme } from "../../Theme";


export const HeaderSection = styled.header`
    width: 100vw;
    margin-top: 15rem;
    justify-content:center;
    display:flex;
    color: ${theme.colors.primary_color};
    align-items: space-around;
    gap: 7rem;

    @media(max-width: 780px){
        gap: 4rem;

    }
    @media(max-width: 580px){
        flex-direction:column;
        align-items:center;
        margin-top: 10rem;
    }

`
export const LeoPicture = styled.div`
    width: 45rem;
    height: 45rem;
    background-image: url(${picturePhoto});
    background-size: cover;
    background-position:center;
    border-radius: 50%;
    border: 2px solid ${theme.colors.brown};

    @media(max-width: 1030px){
        width: 30rem;
        height: 30rem;
    }
    @media(max-width: 700px){
        width: 25rem;
        height: 25rem;
    }
    @media(max-width: 580px){
        width: 35rem;
        height: 35rem;
    }
`
export const InfoContainer = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:center;
    gap: 4rem;

    @media(max-width: 700px){
        gap: 2rem;
    }
    `
export const NomeTitle = styled.h1`
    font-size: 5rem;
    padding-bottom: 1rem;

   
    @media(max-width: 1030px){
        font-size: 4rem;
    }
    @media(max-width: 700px){
        font-size: 3.5rem;
    }
    @media(max-width: 580px){
        font-size: 4.5rem;
    }
`
export const DeveloperTitle = styled.h2`
    font-size: 3.5rem;
    color: ${theme.colors.brown};

    @media(max-width: 700px){
        font-size: 3rem;
    }
    @media(max-width: 580px){
        font-size: 3.5rem;
    }
`
export const BtnContainer = styled.div`
    display:flex;
    gap: 1rem;
`
export const DownloadCv = styled.button`
  font-size: 2rem;
  background: ${theme.colors.primary_color};
  color: ${theme.colors.bg_color};
  padding: 1rem 2rem;
  border: none;
  outline: none;
  font-weight: bold;
  cursor: pointer;
  transition: all 300ms ease;

  &:hover {
    position: relative;
    transform: translateY(-5px); /* Move o botão para cima */
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); /* Adiciona uma sombra suave */
  }

  /* Pseudo-elemento para criar uma linha sob o botão */
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 4px;
    background: rgba(255,151,0);
    transform: scaleX(0); /* Começa invisível */
    transform-origin: center;
    transition: transform 300ms ease;
  }

  &:hover::after {
    transform: scaleX(1); /* Aumenta a largura da linha */
  }
`;
export const ContactBtn = styled(DownloadCv)`
    background: white;
    border: 1px solid ${theme.colors.primary_color};
    color: ${theme.colors.primary_color};
`
