import styled from "styled-components";
import { theme } from "../../Theme";
import { IoMdMenu } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { RiWhatsappFill } from "react-icons/ri";

export const Linkedin = styled(FaLinkedin)``
export const GitHub = styled(FaGithub)``
export const Whatsapp = styled(RiWhatsappFill)``
export const SocialContainer = styled.div`
    display:flex; 
    gap: 2.5rem;
    font-size: 3.5rem;
    display:none;

    @media(max-width: 750px){
        display:flex;
    }
`

export const MenuBurguer = styled(IoMdMenu)`
    position:fixed;
    top: 1.5rem;
    right: 2rem;
    font-size: 4rem;
    cursor: pointer;
    display:none;
    @media(max-width: 750px){
        display:block;
    }
`


export const Nav = styled.nav`
  width: 100vw;
  padding: 2rem 0;
  z-index: 2;
  font-size: 2.5rem;
  display: flex;
  justify-content: center;
  text-transform: uppercase;
  position: fixed;
  top: 0;
  background: ${theme.colors.bg_color};
  font-weight: 350;
  transition: all 300ms ease;
  @media (max-width: 750px) {
    right: ${props => (props.menuactive ? '0' : '-200rem')};
  }
`;

export const UlItems = styled.ul`
  display: flex;
  gap: 8rem;
  list-style: none;

  @media (max-width: 750px) {
    flex-direction: column;
    height: 100vh;
    margin-top: 8rem;
    align-items: center;
  }
`;

export const LiItems = styled.li`
  cursor: pointer;
  position:relative;
  
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 1.5px;
    background: rgba(0, 0, 0, .6);
    transform: scaleX(0); /* Começa invisível */
    transform-origin: center;
    transition: transform 300ms ease;
  }

  &:hover::after {
    transform: scaleX(1); /* Aumenta a largura da linha */
  }
`;

export const ALinks = styled.a`
  position: relative;
  cursor: pointer;

 

  /* Pseudo-elemento para criar uma linha sob o botão */
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 1.5px;
    background: rgba(0, 0, 0, .6);
    transform: scaleX(0); /* Começa invisível */
    transform-origin: center;
    transition: transform 300ms ease;
  }

  &:hover::after {
    transform: scaleX(1); /* Aumenta a largura da linha */
  }
`;