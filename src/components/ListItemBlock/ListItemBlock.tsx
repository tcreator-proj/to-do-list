import { Item } from '../../model/Item'
import ListItem from './ListItem/ListItem';
import style from './ListItemBlock.module.css';
import { Row } from 'react-bootstrap';
import { useContext, useCallback} from 'react';
import { ToDoContext } from '../../context/contexts';

function ListItemBlock() {
  const { state } = useContext(ToDoContext);

  const createItemList = useCallback((itemID: string) => {
    const item: Item | undefined = state.items.get(itemID)
    if (item && item.show) {
      const { id, text, completed } = item;
      return <ListItem id={id} completed={completed} text={text} key={id} />
    }
  }, [state.orderedItem.length])

  return (
    <Row as={"ul"}>
      {!state.orderedItem.length
        ? <div className={style.listIsEmpty}>╮(￣_￣)╭</div>
        : state.orderedItem.map(createItemList)}
    </Row>
  )
}

export default ListItemBlock;