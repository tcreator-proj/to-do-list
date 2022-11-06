import React, { useReducer } from 'react'
import { ProgressbarContext } from '../context/contexts';
import { progressbarInitialState, progressBarReducer } from '../context/reducers/progressBarReducer';
import FilterPanel from './filter-panel/FilterPanel';
import ListItemBlock from './list-item/ListItemBlock';
import ToDoForm from './todo-form/ToDoForm';

function ToDOWrapper() {
  const [progressbarState, progressbarDispatcher] = useReducer(progressBarReducer, progressbarInitialState);

  return (
    <>
      <ProgressbarContext.Provider value={{ state: progressbarState, dispatch: progressbarDispatcher }} >
        <ToDoForm />
      </ProgressbarContext.Provider>
      <FilterPanel />
      <ListItemBlock />
    </>
  )
}

export default React.memo(ToDOWrapper);
