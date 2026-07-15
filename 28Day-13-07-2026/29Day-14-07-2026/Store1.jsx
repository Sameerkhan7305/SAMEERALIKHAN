import { configureStore } from "@reduxjs/toolkit";

const initialVoteState = {
  votes: 0
};

function voteReducer(state = initialVoteState, action) {

  if (action.type === "vote/increase") {
    return {
      votes: state.votes + 1
    };
  }

  return state;
}

const basicStore = configureStore({
  reducer: voteReducer
});

export default basicStore;