import { render, screen } from "@testing-library/react"
import { Item } from "../../model/Item";

import ListItemBlock from "./ListItemBlock"

export default describe("ListItemBlock render.", () => {
  it("correct render", () => {
    const itemList: Item[] = [new Item('some text'), new Item('just string')]
    render(<ListItemBlock/>);
    expect(screen.getByText(/some text/i)).toBeInTheDocument();
    expect(screen.getByText(/just string/i)).toBeInTheDocument();
  })

  it("Checked and unchecked task. Appending class", () => {
    // const itemList: Item[] = [new Item('some text'), new Item('just string')]
    // const {container} = render(<ListItemBlock onClickHandler={() => {}} itemList={itemList} />);
    // userEvent.click(container.querySelectorAll(".list-in-work")[0]);
    // expect(container.querySelector('.list-completed')).toBeInTheDocument()
  })
})