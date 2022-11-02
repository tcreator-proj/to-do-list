import { Container } from 'react-bootstrap';
import style from './app.module.css';
import Header from './components/header/Header';

function App() {
  return (
    <Container className={style.app}>
      <Header /> 
    </Container>
  );
}

export default App;
