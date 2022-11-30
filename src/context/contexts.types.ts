import { Item } from "../model/Item"

interface ProgressbarState {
  inputCount: number
}

interface ToDoState {
  orderedItem: string[],
  items: Map<string, Item>
}

export type {ProgressbarState, ToDoState}