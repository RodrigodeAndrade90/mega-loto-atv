// src/hooks/useResults.ts
import { useContext } from 'react';
import { ResultsContext } from '../contexts/ResultsContext';

export default function useResults(){
  return useContext(ResultsContext);
}
