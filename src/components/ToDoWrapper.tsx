import React, { createRef, FormEventHandler, MouseEventHandler, RefObject, useState } from 'react'
import { Item } from '../model/Item';
import FilterPanel from './filter-panel/FilterPanel';
import { createChangeFilterRadio, createChangeFormHandler, createCheckedClearingHandler, createItemClickHandler } from './handlers';
import Header from './header/Header';
import ListItemBlock from './list-item/ListItemBlock';
import ToDoForm from './todo-form/ToDoForm';
import { StateType } from './types/propTypes';


function ToDOWrapper() {
  const [state, setState] = useState<StateType>({
    list: []
  })

  const inputRef: RefObject<HTMLInputElement> = createRef();

  const onChangeFormHandler: FormEventHandler = createChangeFormHandler(setState);

  const onItemClickHandler: MouseEventHandler = createItemClickHandler(setState);

  const onCheckedClearingHandler: MouseEventHandler = createCheckedClearingHandler(setState);

  const onChangeFilterRadio: FormEventHandler = createChangeFilterRadio(setState);

  const filteredList: Item[] = state.list.filter((item: Item) => item.show);

  return (
    <>
      <Header />
      <ToDoForm inputRef={inputRef} onSubmitHandler={onChangeFormHandler} />
      <FilterPanel
        showPanel={!!state.list.length}
        count={filteredList.length}
        onCheckedClear={onCheckedClearingHandler}
        onRadioClick={onChangeFilterRadio} />
      <ListItemBlock onClickHandler={onItemClickHandler} itemList={filteredList} />
    </>
  )
}

export default React.memo(ToDOWrapper);
