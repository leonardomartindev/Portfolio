import { CardBtnContainer, CardBtnDeploy, CardBtnGitHub, CardContainer, CardDescription, CardImage, CardInfoContainer, CardTechContainer, CardTechProject, CardTitle } from "./Card.style";

export default function Card({name, description, linkDeploy, linkGH, linkImg, broke, techs}) {
  return (
    <CardContainer broke={broke}>
        <CardImage linkImg={linkImg}>
          <CardTechContainer>
            {techs.map((tech, index) =>(
              <CardTechProject key={index}>{tech}</CardTechProject>
            ))}
          </CardTechContainer>
        </CardImage>
        <CardInfoContainer>
            <CardTitle>{name}</CardTitle>
            <CardDescription>{description}</CardDescription>
            <CardBtnContainer>
                <CardBtnDeploy><a href={linkDeploy} target="blank">Deploy</a></CardBtnDeploy>
                <CardBtnGitHub><a href={linkGH} target="blank">GitHub</a></CardBtnGitHub>
            </CardBtnContainer>
        </CardInfoContainer>
    </CardContainer>
  )
}
