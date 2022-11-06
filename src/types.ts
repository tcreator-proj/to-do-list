import { Item } from "./model/Item";

interface ItemTypes {
  id: string,
  completed: boolean,
  text: string
}

interface RadioButtonType {
  name: string
}

interface ToDoState {
  orderedItem: string[],
  items: Map<string, Item>
}

interface ProgressbarState {
  inputCount: number
}

interface AnyAction {
  type: string,
  payload: any
}

export type { ToDoState, AnyAction, ProgressbarState, RadioButtonType, ItemTypes };