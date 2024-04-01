import styled from "styled-components";
import { theme } from "../../../Theme";

export const CardContainer = styled.div`
    display:grid;
    grid-template-columns: ${props => props.broke ? "" : "2fr 2fr"};
    grid-template-rows: ${props => props.broke ? "22rem 2fr" : "1fr"};
    border: solid 2px ${theme.colors.primary_color};
    border-radius: 6px;
    gap: 2rem;

    @media(max-width: 1100px){
        grid-template-columns: 1fr 1fr;
        grid-template-rows: 1fr;
    }
    @media(max-width: 800px){
        grid-template-columns: 1fr;
        grid-template-rows: 1fr 1fr;
    }
    @media(max-width: 580px){
        grid-template-rows: 1fr 2fr;
    }
`
export const CardImage = styled.div`
    position: relative;
    z-index: 1;
    background: url(${props => props.linkImg});
    background-size: cover;
    background-position:top;
    border-right: 5px solid ${theme.colors.brown};
`
export const CardInfoContainer = styled.div`
    display:flex;
    flex-direction:column;
    gap: 3rem;
    padding: 2rem;

`
export const CardTitle = styled.h2`
    font-weight:600;
`
export const CardDescription = styled.p`
`
export const CardBtnContainer = styled.div`
`
export const CardBtnDeploy = styled.button`
    font-size: 1.8rem;
    border: none;
    margin: 1rem;
    background: ${theme.colors.primary_color};
    padding: 1rem 6rem;
    color: ${theme.colors.bg_color};
    font-weight: bold;
    cursor:pointer;
`
export const CardBtnGitHub = styled(CardBtnDeploy)``
export const CardTechContainer = styled.div`
    position:absolute;
    bottom: 2rem;
    left: 2rem;
    display:flex;
    gap: 1rem;
`
export const CardTechProject = styled.span`
    background: ${theme.colors.primary_color};
    color: ${theme.colors.bg_color};
    border: 1px solid ${theme.bg_color};
    font-weight: 700;
    padding: 1rem;
    font-size: 1.2rem;
    border-radius: 10px;
`
