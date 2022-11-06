import React from 'react';
import { render, screen, cleanup } from '@testing-library/react';
import App from './App';
import userEvent from '@testing-library/user-event';
import { ToDoContext } from './context/contexts';

const state = {
  orderedItem: [],
  items: new Map(),
}
const dispatch = () => {};

test("finding header text", async () => {
  render(<ToDoContext.Provider value={{state, dispatch}}><App /> </ToDoContext.Provider>)
  expect(await screen.findByText(/to-do list/i)).toBeInTheDocument();
})

test("Finding input field", async () => {
  render(<ToDoContext.Provider value={{state, dispatch}}><App /> </ToDoContext.Provider>)
  expect(await screen.findByPlaceholderText(/What's need to be done?/i)).toBeInTheDocument()
})

test("Finding mock block", () => {
  const {container} =render(<ToDoContext.Provider value={{state, dispatch}}><App /> </ToDoContext.Provider>)

  expect(container.querySelector(".listIsEmpty")).toBeInTheDocument()
})

test("appending user task", async () => {
  render(<ToDoContext.Provider value={{state, dispatch}}><App /> </ToDoContext.Provider>)

  userEvent.type(screen.getByRole('textbox'), "This is just task{enter}");
  expect(await screen.findByText(/This is just task/i)).toBeInTheDocument();
})

test("Create some user task and filter by completed", () => {
  render(<ToDoContext.Provider value={{state, dispatch}}><App /> </ToDoContext.Provider>)

  userEvent.type(screen.getByRole('textbox'), "This is just task{enter}This is just task{enter}This is just task{enter}");

  userEvent.click(screen.getAllByRole('radio')[1]);

  expect(screen.queryByText(/This is just task/i)).not.toBeInTheDocument();
})

test("Create 3 user tasks, click one and clear by uncomplete", () => {
  const {container} = render(<ToDoContext.Provider value={{state, dispatch}}><App /> </ToDoContext.Provider>)

  userEvent.type(screen.getByRole('textbox'), "First{enter}Second{enter}Third{enter}");
  userEvent.click(screen.queryByText(/First/i) as HTMLElement);

  userEvent.click(container.querySelector(".clear.col") as HTMLElement);

  expect(container.querySelectorAll('.listInWork').length).toEqual(2);
})

