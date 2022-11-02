import React from 'react'
import { Row } from 'react-bootstrap';
import { ItemTypes } from '../../types/propTypes';
import style from './list-item.module.css';

function ListItem({id, completed, text, onClickHandler}: ItemTypes) {

  return (
    <Row data-id={id} 
      className={completed ? style['list-completed'] : style['list-in-work']}
      onClick={onClickHandler}>
      <div className=""></div>
      <p>{text}</p>
    </Row>
  )
}

export default React.memo(ListItem)