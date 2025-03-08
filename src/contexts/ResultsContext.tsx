
import { createContext, useState, useEffect } from 'react';
import { LotteryResult, Props } from '../types/results';
import loteria from '../services/Loteria';

export const ResultsContext = createContext({} as LotteryResult);

export function Provider({ children }: any) {
  const [megasena, setMegasena] = useState({} as Props);
  const [lotofacil, setLotofacil] = useState({} as Props);

  useEffect(() => {
    (async function () {
      const r = await loteria.get();
      setMegasena(r.megasena);
      setLotofacil(r.lotofacil);
      console.log( r );
    })();
  }, []);

  return (
    <ResultsContext.Provider value={{ megasena, lotofacil }}>
        {children}
    </ResultsContext.Provider>
  );
}