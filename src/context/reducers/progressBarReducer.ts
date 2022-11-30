import { ACTIONS } from "../actions/actions";
import { ProgressbarState } from "../contexts.types";

const progressbarInitialState: ProgressbarState = {
  inputCount: 0
}

function progressBarReducer(state: ProgressbarState, action: any) {
  const {type, payload} = action;
  switch(type) {
    case ACTIONS.TYPE_INPUT: {
      state.inputCount = payload.count;
      return {...state}
    }
    default: {
      return state;
    }
  }
}

export {progressBarReducer, progressbarInitialState};