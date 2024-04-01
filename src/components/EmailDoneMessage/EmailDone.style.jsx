import styled from "styled-components";
import { IoCloudDone } from "react-icons/io5";
import { theme } from "../../Theme";


export const PopupContainer = styled.div`
    width: 100vw;
    height: 100vh;
    background: rgba(0, 0, 0, .3);
    position: fixed; 
    top: 0;
    z-index: 3; 
    display:flex;
    align-items:center;
    justify-content:center;
    display: ${props => props.popupVisible ? "flex" : "none"};
`
export const PopupContainerMessage = styled.div`
    width: auto;
    margin: 5rem;
    background: #267EF5;
    color: ${theme.colors.bg_color};
    height: 45vh;
    display:flex;
    align-items:center;
    justify-content:center;
    flex-direction:column;
    box-shadow: 0px 0px 10px 2px rgba(0,0,0,.5);
    gap: 2rem;
    font-size: 1.2rem;

    

`
export const DoneIcone = styled(IoCloudDone)`
    font-size:9rem;
`
export const TitleDone = styled.h1`
    font-size: 2.5rem;
    text-align:center;
    @media(max-width: 350px){
        font-size: 2rem;
    }


    
`
export const DescriptionDone = styled.p`
    width: auto;
    font-size: 1.8rem;
    text-align:center;
    padding: 0 1rem;
`
export const OkBtn = styled.button`
    color: ${theme.colors.primary_color};
    background: ${theme.colors.bg_color};
    border: none;
    outline: none;
    padding: 1rem 8rem;
    font-size: 1.8rem;
    font-weight: 600;
    cursor:pointer;
`
