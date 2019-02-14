const test = (state = "World", action) => {
  switch (action.type) {
    case "CHANGE_NAME":
      return action.name
    default:
      return state;
  }
}

export default test;
