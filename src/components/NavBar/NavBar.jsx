import { useState } from "react";
import { GitHub, LiItems, Linkedin, MenuBurguer, Nav, SocialContainer, UlItems, Whatsapp } from "./NavBar.style";
import { Link } from 'react-scroll';


export default function NavBar() {

    const [menuActive, setMenuActive] = useState(false)

    const handleMenu = () =>{
        setMenuActive(!menuActive)
    }

    return (
        <Nav menuactive={menuActive}>
            <MenuBurguer onClick={handleMenu}/>
            <UlItems>
                <LiItems> 
                    <Link activeClass="active" smooth soy to="top" offset={-300}>Início</Link>
                </LiItems>
                <LiItems> 
                    <Link activeClass="active" smooth soy to="skills"  offset={-75}>Skills</Link>
                </LiItems>
                <LiItems> 
                    <Link activeClass="active" smooth soy to="projects" offset={-75}>Projetos</Link>
                </LiItems>
                <LiItems> 
                    <Link activeClass="active" smooth soy to="contact" offset={-75}>Contato</Link>
                </LiItems>
                <SocialContainer>
                    <Linkedin/>
                    <GitHub/>
                    <Whatsapp/>
                </SocialContainer>
            </UlItems>
        </Nav>
    );
}
