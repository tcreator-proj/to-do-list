import { render, screen } from "@testing-library/react"
import Header from "./Header"

test("Header. Correct render", () => {
  render(<Header />);
  expect(screen.getByText(/to-do list/i)).toBeInTheDocument();
})