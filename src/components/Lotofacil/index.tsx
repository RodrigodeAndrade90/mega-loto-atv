import "./index.css";
import trevo from "../../assets/trevo-lotofacil.png";
import { useResults} from "../../hooks";

export default function Lotofacil(){
    const { lotofacil } = useResults ();
    const linha1:string[] = [], linha2:string[] = [], linha3:string[] = [];
    for(let i = 0; i < 5; i++){
        linha1.push(lotofacil.dezenas[i]);
    }
    for(let i = 5; i < 10; i++){
        linha2.push(lotofacil.dezenas[i]);
    }
    for(let i = 10; i < 15; i++){
        linha3.push(lotofacil.dezenas[i]);
    }
    
    return (
        <div className="principal-lotofacil">
            <div>
                <div className="loteria-lotofacil">
                    <img src={trevo} alt="" />
                    <span className="title-lotofacil">LOTOFÁCIL</span>
                </div>
                <div className="block-lotofacil">
                    <div className="text-lotofacil"> 
                        Estimativa de prêmio do próximo concurso. 
                        Sorteio em {lotofacil.dataProximoConcurso}:
                    </div>
                    <div className="valores-lotofacil"> 
                        {lotofacil.valorEstimadoProximoConcurso.toLocaleString("pt-Br",{
                            style: "currency",
                            currency: "BRL"
                        })}
                    </div>
                </div>
            </div>
            <div className="block-right-lotofacil">
                <div className="linha-lotofacil">
                    {
                        linha1.map( dezena =>
                                <div className="dezenas-lotofacil" key={dezena}>{dezena}</div>
                             )
                    }
                </div>
                <div className="linha-lotofacil">
                    {
                        linha2.map( dezena =>
                                <div className="dezenas-lotofacil" key={dezena}>{dezena}</div>
                             )
                    }
                </div>
                <div className="linha-lotofacil">
                    {
                        linha3.map( dezena =>
                                <div className="dezenas-lotofacil" key={dezena}>{dezena}</div>
                             )
                    }
                </div>
                <div className="acumula-lotofacil">
                    {
                        lotofacil.quantidadeGanhadores === 0 ? 
                        "ACUMULOU!" :
                        `${lotofacil.quantidadeGanhadores} GANHADORES`
                    }
                </div>
                <div className="data-lotofacil">
                    {
                        `Concurso ${lotofacil.numeroDoConcurso} - ${lotofacil.dataPorExtenso}`
                    }
                </div>
            </div>
        </div>
    );
}