import { Container } from "./styles";
import {Education} from "../../components/Education/index.tsx";
import {Header} from "../../components/Header/index.tsx";

function Home() {
    return(
        <Container> 
          <Header/>
        <main>
        <Education/>
        <br/>
        <br/>
          <section id="experience">
            <h2>Experiência Profissional</h2>
            <br/>
            <ul>
              <li>
                <h3>Ad Tech Sales Engineer - Google (Janeiro 2023 - Presente)</h3>
                <p>Trabalho ajudando editores de aplicativos mobile a aumentarem suas receitas através de anúncios, oferecendo consultoria de soluções técnicas.</p>
              </li>
              <br/>
              <li>
                <h3>Technical Solutions Consultant - Hyland (Fevereiro 2020 - Dezembro 2022)</h3>
                <p>Prestou consultoria técnica para empresas em relação à automação de fluxos de trabalho e gerenciamento de documentos.</p>
              </li>
            </ul>
          </section>
          <br/>
          <section id="hobbies">
            <h2>Hobbies</h2>
            <br/>
            <ul>
              <li>
                <h3>Futebol</h3>
                <p>Adoro assistir, jogar e comentar jogos de futebol. Sou torcedor do Coritiba</p>
              </li>
              <br/>
              <li>
                <h3>Viajar</h3>
                <p>Gosto muito de conhecer novos lugares, culturas e gastronomias.</p>
              </li>
            </ul>
          </section>
        </main>
  
        <footer>
          <p>&copy; 2024 Your Name</p>
        </footer>
      </Container>
    );
}

export {Home};