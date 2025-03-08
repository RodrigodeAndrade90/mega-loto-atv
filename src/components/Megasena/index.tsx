import "./index.css";
import trevo from "../../assets/trevo-megasena.png";
import { useResults } from "../../hooks";

export default function Megasena(){
    const { megasena } = useResults ();
    
    return (
        <div className="principal-mega">
            <div>
                <div className="block-mega">
                    <img src={trevo} alt="" />
                    <span className="title-mega">MEGA-SENA</span>
                </div>
                <div className="estimativa-mega">
                    <div className="text-mega"> 
                        Estimativa de prêmio do próximo concurso. 
                        Sorteio em {megasena.dataProximoConcurso}:
                    </div>
                    <div className="valores-mega"> 
                        {megasena.valorEstimadoProximoConcurso.toLocaleString("pt-Br",{
                            style: "currency",
                            currency: "BRL"
                        })}
                    </div>
                </div>
            </div>
            <div className="block-right-mega">
                <div className="linha-mega">
                    {
                        megasena.dezenas.map( dezena =>
                                <div className="dezenas-mega" key={dezena}>{dezena}</div>
                             )
                    }
                </div>
                <div className="acumula-mega">
                    {
                        megasena.quantidadeGanhadores === 0 ? 
                        "ACUMULOU!" :
                        `${megasena.quantidadeGanhadores} GANHADORES`
                    }
                </div>
                <div className="data-mega">
                    {
                        `Concurso ${megasena.numeroDoConcurso} - ${megasena.dataPorExtenso}`
                    }
                </div>
            </div>
        </div>
    );
}