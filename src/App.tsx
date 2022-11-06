import { useReducer } from 'react';
import { Container, Row } from 'react-bootstrap';
import style from './app.module.css';
import Header from './components/header/Header';
import ToDOWrapper from './components/ToDoWrapper';
import { ToDoContext } from './context/contexts';
import { initialState, toDoListReducer } from './context/reducers/toDoListReducer';

function App() {
  const [state, dispatch] = useReducer(toDoListReducer, initialState);
  return (
    <ToDoContext.Provider value={{ state, dispatch }}>
      <Container className={style.app}>
        <Row className={style.todoContainer}>
          <Header />
          <ToDOWrapper />
        </Row>
      </Container>
    </ToDoContext.Provider >
  );
}

export default App;
