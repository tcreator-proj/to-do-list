import React, { MouseEventHandler, useContext } from 'react'
import { Row } from 'react-bootstrap';
import { ToDoContext } from '../../../context/contexts';
import { markTaskItem } from '../../../context/actionCreators';
import style from './list-item.module.css';
import { ItemTypes } from '../../../types';

function ListItem({ id, completed, text }: ItemTypes) {
  const {dispatch} = useContext(ToDoContext);
  
  const onAppendNewItemTaskHandler: MouseEventHandler = (evt) => {
    const target: HTMLElement = evt.target as HTMLElement;
    const parent: HTMLElement | null = target.closest("div[data-id]");
    if(parent) {
      const id: string | undefined = parent.dataset.id; 
      if(id) {
        dispatch(markTaskItem(id))
      }
    }
  } 

  return (
    <Row data-id={id}
      className={completed ? style.listCompleted : style.listInWork}
      onClick={onAppendNewItemTaskHandler}>
      <div></div>
      <p>{text}</p>
    </Row>
  )
}

export default React.memo(ListItem)