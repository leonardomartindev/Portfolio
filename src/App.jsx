import  GlobalStyle from './GlobalStyle'
import AboutSkills from './components/AboutSkills/AboutSkills';
import Connect from './components/ConnectSection/Connect';
import Contact from './components/ContactForm/Contact';
import Header from './components/Header/Header';
import NavBar from './components/NavBar/NavBar';
import Projetos from './components/Projetos/Projetos';


function App() {
  return (
      <>
          <GlobalStyle />
          <NavBar/>
          <section id='top'>
            <Header/>
          </section>
          <section id='skills'>
            <AboutSkills/>
          </section>
          <section id='projects'>
            <Projetos/>
          </section>
          <section id='contact'>
            <Contact/>
          </section>
          <Connect/>
      </>
  );
}

export default App
