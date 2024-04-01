import { ConnectSection, Copy, GitHub, Instagram, Linkedin, SocialContainer, SubTitle, Title, Whatsapp } from "./Connect.style";

export default function Connect() {
  return (
    <ConnectSection>
        <Title>Leonardo Martin de Oliveira</Title>
        <SubTitle>Conecte-se comigo</SubTitle>
        <SocialContainer>
            <Linkedin/>
            <GitHub/>
            <Whatsapp/>
            <Instagram/>
        </SocialContainer>
        <Copy>&copy; Copyright 2024 - Todos os Direitos Reservados</Copy>
    </ConnectSection>
  )
}
