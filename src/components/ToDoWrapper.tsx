import { useReducer } from 'react'
import { ProgressbarContext } from '../context/contexts';
import { progressbarInitialState, progressBarReducer } from '../context/reducers/progressBarReducer';
import ToDoForm from './ToDoForm/ToDoForm';

function ToDOWrapper() {
  const [progressbarState, progressbarDispatcher] = useReducer(progressBarReducer, progressbarInitialState);

  return (
    <ProgressbarContext.Provider value={{ state: progressbarState, dispatch: progressbarDispatcher }} >
      <ToDoForm />
    </ProgressbarContext.Provider>
  )
}

export default ToDOWrapper;
