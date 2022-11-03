import { render, screen } from "@testing-library/react"
import FilterPanel from "./FilterPanel"

export default describe("Filter panel/ Render", () => {
  it('Correct render. All key elements exists ', () => {
    const {container} = render(<FilterPanel count={1} showPanel={true} onCheckedClear={() => {} } onRadioClick={() => {}} />);
    expect(container.querySelectorAll('input').length).toEqual(3);
    screen.debug();
    expect(container.querySelector('.task-count')).toBeInTheDocument();
    expect(container.querySelector('.clear')).toBeInTheDocument();
  })

})