import * as actions from "./index";

describe('index actions', () => {
  it('should successfully change user name', () => {
    expect(actions.changeName("Mike")).toEqual({
      type: "CHANGE_NAME",
      name: "Mike"
    });
  });
});
