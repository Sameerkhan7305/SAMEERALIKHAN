function counterReducer(state, action) {

  if (action.type === "counter/increment") {
    return {
      value: state.value + 1
    };
  }

  return state;
}