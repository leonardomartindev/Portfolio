import styled from "styled-components";
import { FaLinkedin } from "react-icons/fa";
import { IoLogoGithub } from "react-icons/io";
import { AiFillInstagram } from "react-icons/ai";
import { IoLogoWhatsapp } from "react-icons/io";
import { theme } from "../../Theme";


export const ConnectSection = styled.section`
    width: 100vw;
    height: 50vh;
    position:relative;
    margin-top: 20rem;
    display:flex;
    flex-direction:column;
    align-items:center;
    font-size: 3rem;
    color: ${theme.colors.primary_color};
    gap: 2rem;
    @media(max-width: 650px){
        font-size: 2.5rem;
    }
    @media(max-width: 550px){
        font-size: 2rem;
    }
    @media(max-width: 430px){
        font-size: 1.7rem;
    }
`
export const Title = styled.h1``
export const SubTitle = styled.h2`
    font-weight: 300;
`
export const SocialContainer = styled.div`
    display:flex;
    gap: 2rem;
    font-size: 5rem;
    @media(max-width: 430px){
        font-size: 4rem;
    }
`
export const Linkedin = styled(FaLinkedin)`
    cursor:pointer;
`
export const GitHub = styled(IoLogoGithub)`
    cursor:pointer;
`
export const Instagram = styled(AiFillInstagram)`
    cursor:pointer;
`
export const Whatsapp = styled(IoLogoWhatsapp)`
    cursor:pointer;
`
export const Copy = styled.span`
    font-size: 2rem;
    position: absolute;
    bottom: 1.5rem;
`
