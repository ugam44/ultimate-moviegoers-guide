import name from "./name";
import { CHANGE_NAME } from "../actions";
describe('name reducer', () => {
  it('should handle initial state', () => {
    expect(name(undefined, {})).toEqual("World");
  });

  it('should handle name change', () => {
    expect(
      name("", {type: CHANGE_NAME, name: "Mike"})
    ).toEqual("Mike");
  });
})
