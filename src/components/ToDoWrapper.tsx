import React, { createRef, FormEvent, FormEventHandler, MouseEvent, MouseEventHandler, RefObject, SetStateAction, useState } from 'react'
import { Item } from '../model/Item';
import FilterPanel from './filter-panel/FilterPanel';
import Header from './header/Header';
import ListItemBlock from './list-item/ListItemBlock';
import ToDoForm from './todo-form/ToDoForm';
import { StateType } from './types/propTypes';


function ToDOWrapper() {
  const [state, setState] = useState<StateType>({
    list: []
  })
  const inputRef: RefObject<HTMLInputElement> = createRef();

  const onChangeFormHandler: FormEventHandler = (evt: FormEvent) => {
    evt.preventDefault();
    const formData: FormData = new FormData(evt.target as HTMLFormElement)
    const inputValue: string | undefined = formData.get("inputValue")?.toString();

    if (inputValue) {
      const item: Item = new Item(inputValue);
      setState((prevState: StateType) => ({ list: [...prevState.list, item] }))
    }
  }

  const onItemClickHandler: MouseEventHandler = (evt: MouseEvent) => {
    const target: HTMLElement = evt.target as HTMLElement;
    const parent: HTMLElement | null = target.closest("div[data-id]");

    if (parent) {
      setState((prevState: StateType) => {

        for (let item of prevState.list) {
          if (item.id === parent.dataset.id) {
            item.mark()
            return ({ list: [...prevState.list] })
          }
        }
        return prevState;
      })
    }
  }

  return (
    <>
      <Header />
      <ToDoForm inputRef={inputRef} onSubmitHandler={onChangeFormHandler} />
      <FilterPanel />
      <ListItemBlock onClickHandler={onItemClickHandler} itemList={state.list} />
    </>

  )
}

export default ToDOWrapper
