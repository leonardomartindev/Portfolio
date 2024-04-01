import { useState } from "react";
import { GitHub, LiItems, Linkedin, MenuBurguer, Nav, SocialContainer, TopBtn, UlItems, Whatsapp } from "./NavBar.style";
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
                    <Link onClick={handleMenu} activeClass="active" smooth soy to="top" offset={-300}>Início</Link>
                </LiItems>
                <LiItems> 
                    <Link onClick={handleMenu} activeClass="active" smooth soy to="skills"  offset={-75}>Skills</Link>
                </LiItems>
                <LiItems> 
                    <Link onClick={handleMenu} activeClass="active" smooth soy to="projects" offset={-75}>Projetos</Link>
                </LiItems>
                <LiItems> 
                    <Link onClick={handleMenu} activeClass="active" smooth soy to="contact" offset={-75}>Contato</Link>
                </LiItems>
                <SocialContainer>
                    <a href="https://www.linkedin.com/in/leonardo-martin-dev/" target="blank">
                        <Linkedin/>
                    </a>
                    <a href="https://github.com/leonardomartindev" target="blank">
                        <GitHub/>
                    </a>
                    <a href="https://api.whatsapp.com/send/?phone=551915630912&text&type=phone_number&app_absent=0" target="blank">
                        <Whatsapp/>
                    </a>
                </SocialContainer>
            </UlItems>
            <Link onClick={handleMenu} activeClass="active" smooth soy to="top" offset={-300}>
                <TopBtn/>
            </Link>
        </Nav>
    );
}
