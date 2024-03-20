import Pai from "./components/atividade01/Questão1/01Pai";
import * as PC from "./components/atividade01/02MeuPC"
import { Arena, World } from "./components/atividade01/03Batalha";


function App() {
  return <div>
    <h1>Desenvolvimento de Software para Web</h1>
    <h2>Questão 1</h2>
    <Pai />
    <br />
    <h2>Questão 2</h2>
    <PC.Memoria nome = "RAM 8GB ddr4" preco = "R$ 200,00" />
    <PC.PlacaDeVideo nome = "RTX 4060" preco = "R$ 1800,00" />
    <PC.PlacaMae nome = "Aorus AMD" preco = "R$ 736,00" />
    <br />
    <h2>Questão 3</h2>
    <World>
      <Arena />
      <Arena />
      <Arena />
    </World>
  </div>
}

export default App;
