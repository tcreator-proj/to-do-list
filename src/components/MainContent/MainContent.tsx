import { useReducer } from 'react'
import { ToDoContext } from '../../context/contexts';
import { toDoListReducer, initialState } from '../../context/reducers/toDoListReducer';
import FilterPanel from '../FilterPanel/FilterPanel';
import ListItemBlock from '../ListItemBlock/ListItemBlock';
import ToDOWrapper from '../ToDoWrapper';

export default function MainContent() {
  const [state, dispatch] = useReducer(toDoListReducer, initialState);

  return (
    <ToDoContext.Provider value={{ state, dispatch }}>
      <ToDOWrapper />
      <FilterPanel />
      <ListItemBlock />
    </ToDoContext.Provider>
  )
}
