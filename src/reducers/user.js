//  Import dispatch types here...
import {
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT_SUCCESS,
  LOGOUT_FAIL,
  USER_SUCCESS,
  USER_FAIL,
  AUTHENTICATE_SUCCESS,
  AUTHENTICATE_FAIL,
  GET_LOCATION_SUCCESS,
  GET_LOCATION_FAIL,
} from "../actions/types";

// set up initial state here
const initState = {
  name: "",
  currentLongitude: "",
  currentLatitude: "",
  picture: "",
  isAuthenticated: false,
  error: "",
};

export default function (state = initState, action) {
  const { type, payload } = action;

  switch (type) {
    case AUTHENTICATE_SUCCESS:
      return {
        ...state,
        isAuthenticated: payload,
        error: "",
      };
    case USER_SUCCESS:
      return {
        ...state,
        name: payload.firstName,
        picture: payload.picture,
      };
    case GET_LOCATION_SUCCESS:
      return {
        ...state,
        currentLatitude: payload[0],
        currentLongitude: payload[1],
        error: "",
      };
    case GET_LOCATION_FAIL:
      return {
        ...state,
        error: payload,
      };
    case AUTHENTICATE_FAIL:
    case USER_FAIL:
    default:
      return state;
  }
}