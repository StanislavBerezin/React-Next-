import * as actionTypes from "./actions";

const initialState = {
  persons: [],
  inside_reducer: "I am inside of a reducer"
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.DO_SOMETHING_1:
      console.log(state.inside_reducer);
      return state;
    case actionTypes.DO_SOMETHING_2:
      return state;
    default:
      return state;
  }
};

export default reducer;
