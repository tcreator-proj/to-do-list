import { Item } from '../../model/Item'
import ListItem from './list-item/ListItem';
import style from './list-block-item.module.css';
import { Row } from 'react-bootstrap';
import React, { useContext } from 'react';
import { ToDoContext } from '../../context/contexts';

function ListItemBlock() {
  const { state } = useContext(ToDoContext);

  return (
    <Row>
      {!state.orderedItem.length
        ? <div className={style.listIsEmpty}>╮(￣_￣)╭</div>
        : state.orderedItem
          .map((itemID: string) => {
            const item: Item | undefined = state.items.get(itemID)
            if (item && item.show) {
              const { id, text, completed } = item;
              return <ListItem id={id} completed={completed} text={text} key={id} />
            }
          })}
    </Row>
  )
}

export default React.memo(ListItemBlock)