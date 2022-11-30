import { useReducer } from 'react';
import { Container, Row } from 'react-bootstrap';
import style from './App.module.css';
import FilterPanel from './components/FilterPanel/FilterPanel';
import Header from './components/Header/Header';
import ListItemBlock from './components/ListItemBlock/ListItemBlock';
import ToDOWrapper from './components/ToDoWrapper';
import { ToDoContext } from './context/contexts';
import { initialState, toDoListReducer } from './context/reducers/toDoListReducer';

function App() {
  const [state, dispatch] = useReducer(toDoListReducer, initialState);
  return (
    <Container className={style.app}>
      <Row className={style.todoContainer}>
        <Header />
        <ToDoContext.Provider value={{ state, dispatch }}>
          <ToDOWrapper />
          <FilterPanel />
          <ListItemBlock />
        </ToDoContext.Provider >
      </Row>
    </Container >
  );
}

export default App;
