import styled from "styled-components";
import { theme } from "../../Theme";

export const ContactSection = styled.section`
    width: 100vw;
    color: ${theme.colors.bg_color};
    display:flex;
    align-items:center;
    margin-top: 15rem;
    font-size: 2rem;
    color: ${theme.colors.primary_color};
    flex-direction:column;
    gap: 4rem;
`
export const TitleForm = styled.h1``
export const FormContainer = styled.form`
    display:flex;
    gap: 1rem;
    width: 90vw;
    flex-direction:column;
    
`
export const Input = styled.input`
    border: none;
    outline: none;
    padding: 2.5rem 1rem;
    background: ${theme.colors.primary_color};
    color: ${theme.colors.bg_color};
    font-size: 1.5rem;
    &::placeholder {
        color: ${theme.colors.bg_color};
    }
`
export const TextArea = styled.textarea`
    border: none;
    font-size: 1.5rem;
    outline: none;
    padding: 2rem 1rem 8rem 1rem;
    display:flex;
    text-align:top;
    background: ${theme.colors.primary_color};
    color: ${theme.colors.bg_color};

    &::placeholder {
        color: ${theme.colors.bg_color};
    }
`
export const SubmitBtn = styled.button`
    background: ${theme.colors.primary_color};
    color: ${theme.colors.bg_color};
    border: none;
    outline: none;
    padding: 2rem;
    font-weight: bold;
    font-size: 1.5rem;
    width: 20rem;
    display:flex;
    justify-content: center;
    align-items:center;
    cursor:pointer;
`