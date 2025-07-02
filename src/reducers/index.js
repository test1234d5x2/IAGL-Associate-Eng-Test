import { ADD_TODO, FETCH_TODOS } from "../actions/types";

export default function(state = {}, action) {
  switch (action.type) {
    case FETCH_TODOS:
      return { data: action.payload };
    case ADD_TODO:
      return { };
    default:
      return state;
  }
}