import Lotofacil from "../components/Lotofacil";
import Megasena from "../components/Megasena";
import { useResults}  from "../hooks";
import "./Home.css";
export default function Home() {
  const { megasena } = useResults();
  
  return (
    <>
      {megasena.dataApuracao ? (
        <div className="pagina-sorteio">
          <Megasena />
          <Lotofacil />
        </div>
      ) : (
        <div className="carrega-sorteio">
          <h3>Carregando...</h3>
        </div>
      )}
    </>
  );
}

