import { FormEventHandler, MouseEventHandler, RefObject } from "react";
import { Item } from "../../model/Item";

interface ItemTypes {
  id: string,
  completed: boolean,
  text: string,
  onClickHandler: MouseEventHandler
}

interface ItemBlockType {
  onClickHandler: MouseEventHandler,
  itemList: Item[]
}

interface FormTypes {
  inputRef: RefObject<HTMLInputElement>,
  onSubmitHandler: FormEventHandler
}

interface StateType {
  list: Item[]
}

export type {FormTypes, ItemTypes, StateType, ItemBlockType}