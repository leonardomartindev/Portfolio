import styled from "styled-components";
import { theme } from "../../Theme";

export const SectionContainer = styled.section`
    margin-top: 20rem;
    display:grid;
    justify-items:center;
    grid-template-areas:
    "skills about";
    gap: 2rem;
    font-size: 2rem;
    
    color: ${theme.colors.primary_color};
    @media(max-width: 900px){
        grid-template-areas:
        "about"
        "skills";
        justify-content:start;
        padding: 0 5rem;
    };
    @media(max-width: 610px){
        justify-items:start;
    };
}
`
export const AboutContainer = styled.div`
    grid-area: about;
    border-left: 2px solid ${theme.colors.primary_color};
    padding-left: 5rem;
    display:flex;
    flex-direction:column;
    gap: 2rem;
    height: 90vh;

    @media(max-width: 900px){
        border: none;
        padding: 0;
        height: auto;
        
    };
`
export const SkillsContainer = styled.div`
    grid-area: skills;
    display:flex;
    flex-direction:column;
    gap: 9rem;
    @media(max-width: 900px){
        flex-direction:row;
    };
    @media(max-width: 510px){
        flex-direction: column;
        gap: 6rem;
    };
`
export const SkillsCard = styled.div`
    display:flex;
    flex-direction:column;
    gap: 4rem;
`
export const TitleSection = styled.h1``
export const Description = styled.p`
    width: 50rem;

    @media(max-width: 900px){
        width: auto;
    };
`

export const TechsContainer = styled.div`
    display:grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 5rem;

    @media(max-width:710px){
        gap: 2rem;
    }
    @media(max-width:610px){
        grid-template-columns: repeat(2, 1fr);
    }
    @media(max-width: 510px){
        grid-template-columns: repeat(3, 1fr);
    };

`
export const TechItem = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
`

export const SpanName = styled.span`
    font-size: 1.8rem;
`
export const IconTech = styled.div`
    font-size: 6rem;

    @media(max-width:610px){
        font-size: 7rem;
    }
`