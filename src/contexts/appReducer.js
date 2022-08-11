import { SIZE, USER_DATA } from "./actions";

export const initialState = {
  size: "",
  userData: null,
};
export const appReducer = (state, action) => {
  switch (action.type) {
    case SIZE:
      return { ...state, size: action.value };
    case USER_DATA:
      return { ...state, userData: action.value };
    default:
      return {
        ...state,
      };
  }
};
