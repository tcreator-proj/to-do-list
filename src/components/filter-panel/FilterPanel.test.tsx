import { render, screen } from "@testing-library/react"
import FilterPanel from "./FilterPanel"

export default describe("Filter panel/ Render", () => {
  test('Correct render. All key elements must be exists', () => {
    const {container} = render(<FilterPanel />);
    expect(container.querySelectorAll('input').length).toEqual(3);
    expect(container.querySelector('.task-count')).toBeInTheDocument();
    expect(container.querySelector('.clear')).toBeInTheDocument();
  })

})