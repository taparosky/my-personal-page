import { Container } from "./styles";
import {Education} from "../../components/Education/index.tsx";
import {Header} from "../../components/Header/index.tsx";
import { Work } from "../../components/Work/index.tsx";
import { Hobbies } from "../../components/Hobbies/index.tsx";

function Home() {
    return(
        <Container> 
          <Header/>
        <main>
          <img src="https://www.fiap.com.br/wp-content/themes/fiap2016/images/sharing/fiap.png"></img>
        <Education/>
        <br/>
        <br/>
        <img src="https://techcrunch.com/wp-content/uploads/2021/07/GettyImages-1207206237.jpg?w=680"></img>
        <Work/>
          <br/>
        <img src="https://classic.exame.com/wp-content/uploads/2021/09/coritiba-.jpg?quality=70&strip=info&w=1024"></img>
        <Hobbies/>
        </main>
  
        <footer>
          <p>&copy; 2024 Vinicius Taparosky</p>
        </footer>
      </Container>
    );
}

export {Home};