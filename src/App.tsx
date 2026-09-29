import './styles/theme.css';
import './styles/global.css';
import { Heading } from './components/Heading';

export function App() {
  console.log('Oi');

  return (
    <div>
      <Heading />
      <p>Texto Texto</p>
    </div>
  );
}
