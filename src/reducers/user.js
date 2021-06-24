//  Import dispatch types here...
import {
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT_SUCCESS,
  LOGOUT_FAIL,
  AUTHENTICATE_SUCCESS,
  AUTHENTICATE_FAIL,
} from "../actions/types";

// set up initial state here
const initState = {
  name: "",
  currentLongitude: "",
  currentLatitude: "",
  picture: "",
  isAuthenticated: false,
};

export default function (state = initState, action) {
  const { type, payload } = action;

  switch (type) {
    case AUTHENTICATE_SUCCESS:
      return {
        ...state,
        isAuthenticated: payload,
      };
    case AUTHENTICATE_FAIL:
      return {
        ...state,
        isAuthenticated: payload,
      };
    default:
      return state;
  }
}
