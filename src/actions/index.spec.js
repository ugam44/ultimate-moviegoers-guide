import * as actions from "./index";

describe('index actions', () => {
  it('should successfully set the loading flag', () => {
    expect(actions.setLoading(true)).toEqual({
      type: "SET_LOADING",
      isLoading: true
    });
  });
});
