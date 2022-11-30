import React, { MouseEventHandler, useCallback, useContext } from 'react'
import { Row } from 'react-bootstrap';
import { ToDoContext } from '../../../context/contexts';
import { markTaskItem } from '../../../context/actionCreators';
import style from './ListItem.module.css';


interface ItemTypes {
  id: string,
  completed: boolean,
  text: string
}

function ListItem({ id, completed, text }: ItemTypes) {
  const {dispatch} = useContext(ToDoContext);
  
  const onAppendNewItemTaskHandler: MouseEventHandler = useCallback((evt) => {
    const target: HTMLElement = evt.target as HTMLElement;
    const parent: HTMLElement | null = target.closest("li[data-id]");
    if(parent) {
      const id: string | undefined = parent.dataset.id; 
      if(id) {
        dispatch(markTaskItem(id))
      }
    }
    console.log(parent)
  }, [id, completed, text])

  return (
    <Row as={'li'} data-id={id}
      className={completed ? style.listCompleted : style.listInWork}
      onClick={onAppendNewItemTaskHandler}>
      <p>{text}</p>
    </Row>
  )
}

export default React.memo(ListItem)