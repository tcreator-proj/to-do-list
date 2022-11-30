import { Container, Row } from 'react-bootstrap';
import style from './App.module.css';
import Header from './components/Header/Header';
import MainContent from './components/MainContent/MainContent';

function App() {
  return (
    <Container className={style.app}>
      <Row className={style.todoContainer}>
        <Header />
        <MainContent />
      </Row>
    </Container >
  );
}

export default App;
