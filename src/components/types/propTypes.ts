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

interface RadioButtonType {
  name: string
}

interface FilterPanelType {
  count: number,
  showPanel: boolean,
  onCheckedClear: MouseEventHandler,
  onRadioClick: FormEventHandler
}

interface ProgressbarType {
  count: number
}

export type {FormTypes, ItemTypes, StateType, ItemBlockType, RadioButtonType, FilterPanelType, ProgressbarType}