import { render, screen } from "@testing-library/react"
import ListItem from "./ListItem"

describe("ListItem render.", () => {
  it("correct render", () => {
    render(<ListItem id={"1"} completed={false} text={"Some text"} />);
    expect(screen.getByText(/Some text/i)).toBeInTheDocument();
  })
})