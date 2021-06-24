//  Basic log in/ log out auth
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAIL = "LOGIN_FAIL";
export const LOGOUT_SUCCESS = "LOGOUT_SUCCESS";
export const LOGOUT_FAIL = "LOGOUT_FAIL";

// If auth success and user is logged in: set to true
export const AUTHENTICATE_SUCCESS = "AUTHENTICATE_SUCCESS";
export const AUTHENTICATE_FAIL = "AUTHENTICATE_FAIL";

// Load user info, like location hist, profile, name, etc
export const USER_SUCCESS = "USER_SUCCESS";
export const USER_FAIL = "USER_FAIL";

// Location was retrieved, update current location
export const GET_LOCATION_SUCCESS = "GET_LOCATION";
export const GET_LOCATION_FAIL = "GET_LOCATION_FAIL";

// Reach out to OpenWeather through server to retrieve weather info
export const GET_GEO_WEATHER_SUCCESS = "GET_GEO_WEATHER_SUCCESS";
export const GET_GEO_WEATHER_FAIL = "GET_GEO_WEATHER_FAIL";

// Reach out to OpenWeather, but with all location history
export const GET_ALL_WEATHER_SUCCESS = "GET_ALL_WEATHER_SUCCESS";
export const GET_ALL_WEATHER_FAIL = "GET_ALL_WEATHER_FAIL";
