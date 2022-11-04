import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import userEvent from '@testing-library/user-event';

describe("App/ correct render", () => {
  it("find header text", async () => {
    render(<App />);
    expect(await screen.findByText(/to-do list/i)).toBeInTheDocument();
  })

  it("Find input field", async () => {
    render(<App />);
    expect(await screen.findByPlaceholderText(/What's need to be done?/i)).toBeInTheDocument()
  })

  it("Find mock block", () => {
    const {container} = render(<App />);
    expect(container.querySelector(".list-is-empty")).toBeInTheDocument()
  })
})

describe("App / Append task", () => {
  it("Create user task", async () => {
    render(<App />);

    userEvent.type(screen.getByRole('textbox'), "This is just task{enter}");
    expect(await screen.findByText(/This is just task/i)).toBeInTheDocument();
  })

  it("Create some user task and filter by completed", () => {
    render(<App />);

    userEvent.type(screen.getByRole('textbox'), "This is just task{enter}This is just task{enter}This is just task{enter}");

    userEvent.click(screen.getAllByRole('radio')[1]);

    expect(screen.queryByText(/This is just task/i)).not.toBeInTheDocument();
  })

  it("Create 1 user task, click it and filter by completed", () => {
    render(<App />);

    userEvent.type(screen.getByRole('textbox'), "This is just task{enter}");
    userEvent.click(screen.queryByText(/This is just task/i) as HTMLElement)

    userEvent.click(screen.getAllByRole('radio')[1]);

    expect(screen.queryByText(/This is just task/i)).toBeInTheDocument();
  })

  it("Create 3 user tasks, click one and clear by uncomplete", () => {
    const {container} = render(<App />);

    userEvent.type(screen.getByRole('textbox'), "First{enter}Second{enter}Third{enter}");
    userEvent.click(screen.queryByText(/First/i) as HTMLElement);

    userEvent.click(container.querySelector(".clear.col") as HTMLElement);

    expect(container.querySelectorAll('.list-in-work').length).toEqual(2);
  })

  it("Create 3 user tasks, click some filters and check count on board", () => {
    const {container} = render(<App />);

    userEvent.type(screen.getByRole('textbox'), "First{enter}Second{enter}Third{enter}Fourth{enter}Fifth{enter}");

    userEvent.click(screen.queryByText(/First/i) as HTMLElement);
    userEvent.click(screen.queryByText(/Fourth/i) as HTMLElement);

    expect(container.querySelector(".task-count")?.textContent).toEqual('5')
    userEvent.click(screen.getAllByRole('radio')[1]);

    expect(container.querySelector(".task-count")?.textContent).toEqual('2');

    userEvent.click(screen.getAllByRole('radio')[2]);

    expect(container.querySelector(".task-count")?.textContent).toEqual('3');

    userEvent.click(screen.getAllByRole('radio')[0]);

    expect(container.querySelector(".task-count")?.textContent).toEqual('5');
  })
})
