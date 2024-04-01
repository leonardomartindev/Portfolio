import { ConnectSection, Copy, GitHub, Instagram, Linkedin, SocialContainer, SubTitle, Title, Whatsapp } from "./Connect.style";

export default function Connect() {
  return (
    <ConnectSection>
        <Title>Leonardo Martin de Oliveira</Title>
        <SubTitle>Conecte-se comigo</SubTitle>
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
          <a href="https://www.instagram.com/leonardomartin.dev/" target="blank">
            <Instagram/>
          </a>
        </SocialContainer>
        <Copy>&copy; Copyright 2024 - Todos os Direitos Reservados</Copy>
    </ConnectSection>
  )
}
