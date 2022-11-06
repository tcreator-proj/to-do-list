import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event";
import { createRef, RefObject } from "react";
import ToDoForm from "./ToDoForm";

export default describe("ListItem render.", () => {
  it("Work handler by submit event with 6 symbols", () => {
    const ref: RefObject<HTMLInputElement> = createRef();

    const handler = jest.fn();

    render(<ToDoForm />);

    userEvent.type(screen.getByRole('textbox'), "eeeeee{Enter}")
    expect(handler).toBeCalledTimes(1);
  })

  it("Work handler by submit event with over 100 symbols", () => {
    const ref: RefObject<HTMLInputElement> = createRef();
    const str: string = "eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee"
    const handler = jest.fn(() => {
      expect(str).not.toEqual(ref.current?.value)
    });

    render(<ToDoForm />);

    userEvent.type(screen.getByRole('textbox'), str + "{Enter}")
  })
})
