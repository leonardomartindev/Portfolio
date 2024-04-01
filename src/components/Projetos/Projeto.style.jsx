import styled from "styled-components";
import { theme } from "../../Theme";
export const ProjectsSection = styled.section`
    color: ${theme.colors.primary_color};
    margin-top: 15rem;
    font-size: 2rem;
    display:flex;
    align-items:center;
    flex-direction:column;
    gap: 4rem;
    `
export const ProjectsTitle = styled.h1``
export const ProjectsContainer = styled.div`
    display: grid;
    gap: 3rem;
    width: 90vw;
    & > *:nth-child(-n+6) {
        grid-column: span 3; /* Ocupa uma coluna */
    }

    @media(max-width: 1100px){
        & > *:nth-child(-n+6) {
            grid-column: span 1; /* Ocupa uma coluna */
        }
    }
`;
