import { RadioType } from "../constant";
import { AnyAction } from "../types";
import { ACTIONS } from "./actions/actions";

const setInputTyping = (count: number): AnyAction => ({
  type: ACTIONS.TYPE_INPUT,
  payload: {
    count
  }
})

const createNewTaskItem = (text: string): AnyAction => ({
  type: ACTIONS.SUBMIT_INPUT,
  payload: {
    text
  }
})

const createFilterTag = (filterTag: RadioType): AnyAction => ({
  type: ACTIONS.FILTERED_RADIO,
  payload: {
    filterTag
  }
})


const reactByClearClick = (): AnyAction => ({
  type: ACTIONS.CLEAR_COMPLETED_ITEM,
  payload: {}
})

const markTaskItem = (itemID: string): AnyAction => ({
  type: ACTIONS.CLICK_TO_ITEM,
  payload: {
    itemID
  }
}) 

export {setInputTyping, createNewTaskItem, reactByClearClick, markTaskItem, createFilterTag}