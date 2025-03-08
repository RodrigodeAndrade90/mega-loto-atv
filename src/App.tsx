import { Provider } from './contexts/ResultsContext';
import Home from './pages/Home';

export default function App()
{
  return (
    <Provider>
      <Home />
    </Provider>
  );
}
