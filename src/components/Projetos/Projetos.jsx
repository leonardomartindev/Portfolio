import Card from "./Card/Card";
import { ProjectsContainer, ProjectsSection, ProjectsTitle } from "./Projeto.style";
import cyberWealth from '../../assets/projectsImgs/cyberWealth.png'
import cineWorld from '../../assets/projectsImgs/cineWorld.png'
import arboriumRevive from '../../assets/projectsImgs/arboriumRevive.png'
import weatherSite from '../../assets/projectsImgs/weatherSite.png'
import calculator from '../../assets/projectsImgs/calculator.png'
import techNow from '../../assets/projectsImgs/techNow.png'
import eBikeRents from '../../assets/projectsImgs/e-bikeRents.png'
import contagemRegressiva from '../../assets/projectsImgs/contagemRegressiva.png'
import toDoList from '../../assets/projectsImgs/toDoList.png'

export default function Projetos() {

    const projetos = [
        {
            name: "Cyber Wealth",
            description: "uma landing page para uma empresa fictícia chamada Cyber Wealth. A Cyber Wealth é um banco de criptomoedas fictício. A landing page foi desenvolvida utilizando React.js com styled components para estilização, e integra a API coincap.io para fornecer dados sobre as principais criptomoedas.",
            linkDeploy: "https://cyber-wealth.vercel.app/",
            linkGH: "https://github.com/leonardomartindev/CyberWealth",
            linkImg: cyberWealth,
            broke: false,
            techs: ["ReactJs", "Styled Components"],
            
        },
        {
            name: "Cine World",
            description: "Este é um site de catálogo de filmes que exibe um carrossel com os filmes e séries populares do momento. Ao clicar em cada filme, um popup será aberto exibindo informações como título, data de lançamento, descrição, avaliação e pôster. Além disso, o site possui um campo de pesquisa que permite ao usuário pesquisar qualquer série ou filme. O projeto foi desenvolvido utilizando HTML, CSS e JavaScript, com o design inicial criado no Figma.",
            linkDeploy: "https://leonardomartindev.github.io/CineWorld/",
            linkGH: "https://github.com/leonardomartindev/CineWorld",
            linkImg: cineWorld,
            broke: false,
            techs: ["JavaScript", "CSS", "HTML"],

    
        },
    {
        name: "Arborium Revive",
        description: "Arborium Revive é um jogo que combina técnicas de produtividade do método Pomodoro com uma emocionante narrativa espacial. O jogador assume o papel de um astronauta e deve completar ciclos Pomodoro para reabitar o planeta Arborium.",
        linkDeploy: "https://arborium-revive-pomodoro.vercel.app/",
        linkGH: "https://github.com/leonardomartindev/ArboriumRevivePomodoro",
        linkImg: arboriumRevive,
        broke: false,
        techs: ["ReactJs", "Styled Components"],

    },
    {
        name: "TechNow",
        description: "Este é um projeto de e-commerce fictício da TechNow, construído utilizando ReactJS, que permite aos usuários buscar produtos na API do Mercado Livre, adicionar itens ao carrinho de compras e visualizar o total do carrinho. Além disso, inclui um recurso de popup que aparece ao clicar em um produto para exibir detalhes adicionais.",
        linkDeploy: "https://tech-now-chi.vercel.app/",
        linkGH: "https://github.com/leonardomartindev/TechNow",
        linkImg: techNow,
        broke: false,
        techs: ["ReactJs", "Styled Components"],

    },
    {
        name: "Weather Site",
        description: "Este é um site de previsão do tempo que utiliza dados de uma API para fornecer informações sobre o clima atual e previsões futuras. O site é responsivo, adaptando-se a diferentes dispositivos e tamanhos de tela.",
        linkDeploy: "https://leonardomartindev.github.io/WeatherSite/",
        linkGH: "https://github.com/leonardomartindev/WeatherSite",
        linkImg: weatherSite,
        broke: false,
        techs: ["JavaScript", "CSS", "HTML"],


    },
    {
        name: "Lista de Tarefas",
        description: "Uma aplicação de Lista de Tarefas desenvolvida com HTML, CSS e JavaScript. A aplicação permite adicionar, editar, marcar como concluída e excluir tarefas. Além disso, possui recursos responsivos e a funcionalidade de mostrar ou esconder as tarefas concluídas.",
        linkDeploy: "https://leonardomartindev.github.io/ToDo/",
        linkGH: "https://github.com/leonardomartindev/ToDo",
        linkImg: toDoList,
        broke: false,
        techs: ["JavaScript", "CSS", "HTML"],


    },
    {
        name: "E-bike Rents",
        description: "E-Bike Rents, landing page de uma empresa fictícia que realiza o aluguel de bicicletas elétricas Este é o repositório da landing page do E-Bike Rents, uma empresa fictícia de aluguel de bikes elétricas. A landing page foi desenvolvida com HTML, CSS e JavaScript para fornecer informações sobre a empresa, seus serviços e como fazer reservas.",
        linkDeploy: "https://leonardomartindev.github.io/E-Bike-Rents/",
        linkGH: "https://github.com/leonardomartindev/E-Bike-Rents",
        linkImg: eBikeRents,
        broke: true,
        techs: ["JavaScript", "CSS", "HTML"],


    },
    {
        name: "Contagem Regressiva",
        description: "Este é um projeto simples de contagem regressiva desenvolvido utilizando JavaScript, HTML e CSS. A aplicação permite ao usuário definir uma data e hora específicas e exibe a contagem regressiva em dias, horas, minutos e segundos. Além disso, possui suporte para um modo de visualização claro e escuro, com um botão de alternância suave para trocar entre os modos.",
        linkDeploy: "https://leonardomartindev.github.io/ContagemRegressiva/",
        linkGH: "https://github.com/leonardomartindev/ContagemRegressiva",
        linkImg: contagemRegressiva,
        broke: true,
        techs: ["JavaScript", "CSS", "HTML"],

    },
    {
        name: "Calculadora",
        description: "Este é um site de calculadora com tema dark e um modo científico. Ele oferece uma interface intuitiva para realizar diversos cálculos matemáticos de forma rápida e conveniente.",
        linkDeploy: "https://leonardomartindev.github.io/Calculadora/",
        linkGH: "https://github.com/leonardomartindev/Calculadora",
        linkImg: calculator,
        broke: true,
        techs: ["JavaScript", "CSS", "HTML"],

    }
  ]

  return (
    <ProjectsSection>
            <ProjectsTitle>Projetos</ProjectsTitle>
            <ProjectsContainer>
                {projetos.map((projeto, index) => (
            <Card 
                key={index}
                broke={projeto.broke}
                name={projeto.name}
                description={projeto.description}
                linkDeploy={projeto.linkDeploy}
                linkGH={projeto.linkGH}
                linkImg={projeto.linkImg}
                techs={projeto.techs}
            />
            ))}
            </ProjectsContainer>
    </ProjectsSection>
  )
}
