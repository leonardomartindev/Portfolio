import { AboutContainer, Description, IconTech, SectionContainer, SkillsCard, SkillsContainer, SpanName, TechItem, TechsContainer, TitleSection } from "./AboutSkills.style";
import { FaHtml5 } from "react-icons/fa";
import { SiCss3 } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io5";
import { RiReactjsFill } from "react-icons/ri";
import { FaGitAlt } from "react-icons/fa";
import { FaFigma } from "react-icons/fa";
import { FaPython } from "react-icons/fa";
import { SiTypescript } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";


export default function AboutSkills() {
  return (
    <SectionContainer>
        <AboutContainer>
            <TitleSection>Sobre</TitleSection>
            <Description>Olá! Sou o Leonardo, um entusiasta de <b>19 anos </b>apaixonado por tecnologia e desenvolvimento de sistemas. Atualmente, estou investindo minha energia na minha formação em <b>Análise e Desenvolvimento de Sistemas na FIAP.</b> Minha jornada nesse campo começou há alguns meses, e desde então tenho dedicado meu tempo e esforço para me aprimorar constantemente. <br /> <br />Minha paixão pelo desenvolvimento web, no entanto, antecede a faculdade. Afinal, venho há algum tempo me aprofundando em tecnologias como <b>HTML, CSS e JavaScript</b>, que formam a base sólida para qualquer projeto web. Além disso, tenho me aventurado nos <b>frameworks modernos</b>, especialmente o <b>ReactJs</b>, que me permitiu criar experiências de usuário <b>dinâmicas e intuitivas</b>.</Description>
        </AboutContainer>
        <SkillsContainer>
            <SkillsCard>
            <TitleSection>Skills</TitleSection>
            <TechsContainer>
                <TechItem>
                    <IconTech>
                        <FaHtml5/>
                    </IconTech>
                    <SpanName>HTML</SpanName>
                </TechItem>
                <TechItem>
                    <IconTech>
                        <SiCss3/>
                    </IconTech>
                    <SpanName>CSS</SpanName>
                </TechItem>
                <TechItem>
                    <IconTech>
                        <IoLogoJavascript/>
                    </IconTech>
                    <SpanName>JavaScript</SpanName>
                </TechItem>
                <TechItem>
                    <IconTech>
                        <RiReactjsFill/>
                    </IconTech>
                    <SpanName>ReactJs</SpanName>
                </TechItem>
                <TechItem>
                    <IconTech>
                        <FaGitAlt/>
                    </IconTech>
                    <SpanName>Git</SpanName>
                </TechItem>
                <TechItem>
                    <IconTech>
                        <FaFigma/>
                    </IconTech>
                    <SpanName>Figma</SpanName>
                </TechItem>
            </TechsContainer>
            </SkillsCard>
            <SkillsCard>
                <TitleSection>Aprofundando</TitleSection>
                <TechsContainer>
                    <TechItem>
                        <IconTech>
                            <FaPython/>
                        </IconTech>
                        <SpanName>Python</SpanName>
                    </TechItem>
                    <TechItem>
                        <IconTech>
                            <SiTypescript/>
                        </IconTech>
                        <SpanName>TypeScript</SpanName>
                    </TechItem>
                    <TechItem>
                        <IconTech>
                            <TbBrandNextjs/>
                        </IconTech>
                        <SpanName>NextJs</SpanName>
                    </TechItem>
                </TechsContainer>
            </SkillsCard>
        </SkillsContainer>
    </SectionContainer>
  )
}
