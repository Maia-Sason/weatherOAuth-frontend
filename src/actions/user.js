import axios from "axios";
import {
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT_SUCCESS,
  LOGOUT_FAIL,
  AUTHENTICATE_SUCCESS,
  AUTHENTICATE_FAIL,
  USER_SUCCESS,
  USER_FAIL,
} from "./types";

export const loginFacebook = () => {
  window.open("http://localhost:3003/login/facebook", "_self");
};

export const login = () => async (dispatch) => {
  try {
    const res = await axios.get(`/login/facebook`);
    if (res.data.error) {
      dispatch({
        type: LOGIN_FAIL,
      });
    } else {
      dispatch({
        type: LOGIN_SUCCESS,
      });
    }
  } catch (err) {
    dispatch({
      type: LOGIN_FAIL,
    });
  }
};

export const checkAuthenticated = () => async (dispatch) => {
  const config = {
    credentials: "include",
  };

  try {
    const res = await axios.get(`/auth`, config);
    if (res.data.error) {
      dispatch({
        type: AUTHENTICATE_FAIL,
        payload: false,
      });
    } else {
      dispatch({
        type: AUTHENTICATE_SUCCESS,
        payload: true,
      });
    }
  } catch (err) {
    dispatch({
      type: AUTHENTICATE_FAIL,
      payload: false,
    });
  }
};
