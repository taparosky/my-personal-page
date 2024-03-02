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
            <h2>Professional Experience</h2>
            <ul>
              <li>
                <h3>Job Title - Company (Start Date - End Date)</h3>
                <p>Brief description of your responsibilities and accomplishments</p>
              </li>
              <li>
                <h3>Job Title - Company (Start Date - End Date)</h3>
                <p>Brief description of your responsibilities and accomplishments</p>
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