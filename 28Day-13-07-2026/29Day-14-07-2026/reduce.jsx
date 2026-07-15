function counterReducer(state, action) {

  if (action.type === "counter/increaseByAmount") {
    return {
      value: state.value + action.payload
    };
  }

  return state;
}