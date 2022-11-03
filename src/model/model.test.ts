import { Item } from "./Item";

export default describe("Model tests", () => {
  it("Item correct mark", () => {
    const item: Item = new Item('text');
    item.hide();
    item.mark();
    expect(item.show).toBeFalsy();
    expect(item.completed).toBeTruthy();
  });
})