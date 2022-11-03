import { Dispatch, FormEvent, FormEventHandler, MouseEvent, MouseEventHandler, SetStateAction } from "react";
import { Item } from "../model/Item";
import { RadioType } from "./types/constants";
import { StateType } from "./types/propTypes";

type StateDispatch = Dispatch<SetStateAction<StateType>>;

/**
 * Wrapper under form changes handler.
 * Run when user tap enter after text input 
 * @param setState 
 * @returns 
 */
function createChangeFormHandler(setState: StateDispatch): FormEventHandler {

  return (evt: FormEvent) => {
    evt.preventDefault();

    const target: HTMLFormElement = evt.target as HTMLFormElement;
    const input: HTMLInputElement = target[0] as HTMLInputElement;
    const formData: FormData = new FormData(target);
    const inputValue: string | undefined = formData.get("inputValue")?.toString();

    input.value = "";

    if (inputValue) {
      const item: Item = new Item(inputValue);
      setState((prevState: StateType) => ({ list: [...prevState.list, item] }))
    }
  }
}


/**
 * Wrapper under handler for marking item like completed.
 * @param setState StateDispatch
 * @returns MouseEventHandler
 */
function createItemClickHandler(setState: StateDispatch): MouseEventHandler {
  return (evt: MouseEvent<HTMLElement>) => {
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
}

/**
 * Wrapper under handler clearing completed item
 * @param setState {@type StateDispatch}
 * @returns MouseEventHandler
 */
function createCheckedClearingHandler(setState: StateDispatch): MouseEventHandler {
  return () => {
    setState((prevState: StateType) => ({
      list: prevState.list.filter((item: Item) => !item.completed)
    }))
  }
}

/**
 * Wrapper under Handler for filter panel radio.
 * Iterate at list and mark it hide or show
 * @param setState {@type StateDispatch}
 * @returns FormEventHandler
 */
function createChangeFilterRadio(setState: StateDispatch): FormEventHandler {
  return (evt: FormEvent) => {
    const radio: HTMLInputElement = evt.target as HTMLInputElement;
    setState((prevState: StateType) => {

      return {
        list: prevState.list.map((item: Item) => {
          switch (radio.getAttribute("id")) {
            case RadioType.COMPLETED: {
              !item.completed ? item.hide() : item.toShow();
              break;
            }
            case RadioType.UNCOMPLETED: {
              item.completed ? item.hide() : item.toShow();
              break;
            }
            default: {
              item.toShow();
            }
          }
          return item;
        })
      }
    })
  }
}

  export { createChangeFormHandler, createItemClickHandler, createCheckedClearingHandler, createChangeFilterRadio };