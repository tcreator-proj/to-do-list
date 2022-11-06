import { render, screen } from "@testing-library/react"
import { ToDoContext } from "../../context/contexts";
import FilterPanel from "./FilterPanel"

describe("Filter panel/ Render", () => {
  test('Correct render. All key elements must be exists', () => {
    const state = {
      orderedItem: ["dsd"],
      items: new Map(),
    }
    const dispatch = () => {};
    
    const {container} = render(<ToDoContext.Provider value={{state, dispatch}}><FilterPanel /></ToDoContext.Provider>);

    expect(container.querySelectorAll('input').length).toEqual(3);
    expect(container.querySelector('.task-count')).toBeInTheDocument();
    expect(container.querySelector('.clear')).toBeInTheDocument();
  })

})