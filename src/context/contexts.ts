import React, { createContext } from "react";
import { ProgressbarState, ToDoState } from "../types";

type Context = {
  state: ToDoState,
  dispatch: React.Dispatch<any>;
};

type ProgressbarContextType = {
  state: ProgressbarState,
  dispatch: React.Dispatch<any>;
};

export const ToDoContext = createContext<Context>({} as Context);
export const ProgressbarContext = createContext<ProgressbarContextType>({} as ProgressbarContextType);