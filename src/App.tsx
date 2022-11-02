import { Col, Container, Row } from 'react-bootstrap';
import style from './app.module.css';
import Header from './components/header/Header';

function App() {
  return (
    <Container className={style.app}>
      <Row className={style['todo-container']}>
        <Header/>
      </Row>
    </Container>
  );
}

export default App;
