import { ADD_TASK, REMOVE_TASK, UPDATE_TASK } from "../Action/types";

const initialState = {
  todo: [],
};

const todoReducers = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TASK:
      return {
        ...state,
        todo: action.payload,
      };
    case REMOVE_TASK:
      const data = state?.todo?.filter((data) => data.id !== action.payload);
      return {
        ...state,
        todo: data,
      };
    case UPDATE_TASK:
      return {
        ...state,
        todo: action.payload,
      };

    default:
      return state;
  }
};

export default todoReducers;
