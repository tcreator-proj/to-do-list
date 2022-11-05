import { Container, Row } from 'react-bootstrap';
import style from './app.module.css';
import Header from './components/header/Header';
import ToDOWrapper from './components/ToDoWrapper';

function App() {
  return (
    <Container className={style.app}>
      <Row className={style['todo-container']}>
        <Header />
        <ToDOWrapper />
      </Row>
    </Container>
  );
}

export default App;
