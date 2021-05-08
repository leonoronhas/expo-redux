import { SIGN_UP, SIGN_IN, LOADING } from "./types";
import axios from "../../middleware/http-config";

export const signUp = (email, password) => {
  return async (dispatch) => {
    try {
      dispatch({ type: LOADING });
      const res = await axios.post(`user/auth/signup`, {
        email,
        password,
      });

      // Error handling?

      dispatch({
        type: SIGN_UP,
        payload: res.data,
      });
      dispatch({ type: LOADING });
    } catch (error) {
      dispatch({ type: LOADING });
    }
  };
};

export const signIn = (email, password) => {
  return async (dispatch) => {
    try {
      dispatch({ type: LOADING });
      const res = await axios.post(`user/auth/login`, {
        email,
        password,
      });

      // Error handling?

      dispatch({
        type: SIGN_IN,
        payload: res.data,
      });
      dispatch({ type: LOADING });
    } catch (err) {
      dispatch({ type: LOADING });
    }
  };
};
