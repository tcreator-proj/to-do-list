import { Item } from '../../model/Item'
import { ItemBlockType } from '../types/propTypes'
import ListItem from './list-item/ListItem';
import style from './list-block-item.module.css';
import { Row } from 'react-bootstrap';
import React from 'react';

function ListItemBlock(props: ItemBlockType) {
  return (
    <Row>
      {!props.itemList.length
        ? <div className={style['list-is-empty']}>╮(￣_￣)╭</div>
        : props.itemList
          .map((item: Item) => <ListItem id={item.id} completed={item.completed}
            text={item.text} onClickHandler={props.onClickHandler} key={item.id} />)}
    </Row>
  )
}

export default React.memo(ListItemBlock)