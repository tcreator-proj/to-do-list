import { RadioType } from "../../constant";
import { Item } from "../../model/Item";
import { ACTIONS } from "../actions/actions";
import { ToDoState } from "../contexts.types";

type ItemType = Item | undefined | null;

const initialState: ToDoState = {
  orderedItem: [],
  items: new Map()
}

function toDoListReducer(state: ToDoState, action: any) {
  const { type, payload } = action;
  switch (type) {
    case ACTIONS.SUBMIT_INPUT: {
      const newItem: Item = new Item(payload.text);
      state.orderedItem.push(newItem.id);
      state.items.set(newItem.id, newItem);
      return {
        orderedItem: state.orderedItem,
        items: state.items
      }
    }
    case ACTIONS.CLEAR_COMPLETED_ITEM: {
      state.orderedItem = state.orderedItem.filter((itemID: string) => {
        const item: ItemType = state.items.get(itemID);
        if(item && item?.completed) {
          state.items.delete(item.id);
          return false;
        }
        return true;
      })
      return {
        orderedItem: state.orderedItem,
        items: state.items
      };
    }

    case ACTIONS.CLICK_TO_ITEM: {
      const {itemID} = payload;
      const item: ItemType = state.items.get(itemID);
      if(item) {
        item.mark();
      }
      console.log(itemID)
      return {
        orderedItem: state.orderedItem,
        items: state.items
      };
    }
    case ACTIONS.FILTERED_RADIO: {
      const { filterTag } = payload;
      state.orderedItem.forEach((itemID: string) => {
        const item: ItemType = state.items.get(itemID);
        if(item) {
          switch (filterTag) {
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
        }
      })
      return {
        orderedItem: state.orderedItem,
        items: state.items
      };
    }
    default: {
      return state;
    }
  }
}

export { toDoListReducer, initialState };