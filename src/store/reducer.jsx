const defaultState = {
  inputValue: "write something",
  list: ["go to school", "intership"],
};

export default (state = defaultState, action) => {
  //reducer only can receive state
  if (action.type === "changeInput") {
    let newState = JSON.parse(JSON.stringify(state));
    newState.inputValue = action.value;
    return newState;
  }
  if (action.type === "addItem") {
    let newState = JSON.parse(JSON.stringify(state));
    newState.list.push(newState.inputValue);
    newState.inputValue = "";
    return newState;
  }
  return state;
};
