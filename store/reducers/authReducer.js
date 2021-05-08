import { SIGN_UP, SIGN_IN, LOADING } from "../actions/types";

let initialState = {
  loggedIn: false,
  userId: "",
  user: {},
  token: "",
  loading: false,
};

export default authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SIGN_UP:
      return {
        ...state,
        user: action.payload.user,
        userId: action.payload.user._id,
      };
    case SIGN_IN:
      return {
        ...state,
        user: action.payload.user,
        userId: action.payload.user._id,
        token: action.payload.user.token,
      };
    case LOADING:
      return {
        ...state,
        loading: !state.loading,
      };
    default:
      return state;
  }
};
