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

    userEvent.type(screen.getByRole('textbox'), "This is just task{enter}");
    userEvent.type(screen.getByRole('textbox'), "This is just task{enter}");
    userEvent.type(screen.getByRole('textbox'), "This is just task{enter}");

    userEvent.click(screen.getAllByRole('radio')[1]);

    expect(screen.queryByText(/This is just task/i)).not.toBeInTheDocument();
  })

  it("Create 1 user task, click it and filter by completed", () => {
    render(<App />);

    userEvent.type(screen.getByRole('textbox'), "This is just task{enter}");
    userEvent.click(screen.queryByText(/This is just task/i))

    userEvent.click(screen.getAllByRole('radio')[1]);

    expect(screen.queryByText(/This is just task/i)).toBeInTheDocument();
  })

  it("Create 3 user tasks, click one and clear by uncomplete", () => {
    const {container} = render(<App />);

    userEvent.type(screen.getByRole('textbox'), "First{enter}");
    userEvent.type(screen.getByRole('textbox'), "Second{enter}");
    userEvent.type(screen.getByRole('textbox'), "Third{enter}");
    userEvent.click(screen.queryByText(/First/i));

    userEvent.click(container.querySelector(".clear.col"));

    expect(container.querySelectorAll('.list-in-work').length).toEqual(2);
  })

  it("Create 3 user tasks, click some filters and check count on board", () => {
    const {container} = render(<App />);

    userEvent.type(screen.getByRole('textbox'), "First{enter}");
    userEvent.type(screen.getByRole('textbox'), "Second{enter}");
    userEvent.type(screen.getByRole('textbox'), "Third{enter}");
    userEvent.type(screen.getByRole('textbox'), "Fourth{enter}");
    userEvent.type(screen.getByRole('textbox'), "Fifth{enter}");
    userEvent.click(screen.queryByText(/First/i));
    userEvent.click(screen.queryByText(/Fourth/i));

    expect(container.querySelector(".task-count")?.textContent).toEqual('5')
    // userEvent.click(screen.queryByText(/Fourth/i));
    userEvent.click(screen.getAllByRole('radio')[1]);

    expect(container.querySelector(".task-count")?.textContent).toEqual('2');

    userEvent.click(screen.getAllByRole('radio')[2]);

    expect(container.querySelector(".task-count")?.textContent).toEqual('3');

    userEvent.click(screen.getAllByRole('radio')[0]);

    expect(container.querySelector(".task-count")?.textContent).toEqual('5');
  })
})
