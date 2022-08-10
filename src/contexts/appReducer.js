import { SIZE } from "./actions";

export const initialState = {
  size: "",
};
export const appReducer = (state, action) => {
  switch (action.type) {
    case SIZE:
      return { ...state, size: action.value };

    default:
      return {
        ...state,
      };
  }
};
