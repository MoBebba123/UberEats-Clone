import axios from 'axios'
import {
  REGISTER_USER_REQUEST,
  REGISTER_USER_SUCCESS,
  REGISTER_USER_FAIL,
  CLEAR_ERRORS,
  USER_SIGNIN_REQUEST,
  USER_SIGNIN_SUCCESS,
  USER_SIGNIN_FAIL,
  USER_SIGNOUT,
} from "../constants/userConstants";


export const signin = (email, password) => async (dispatch) => {
  dispatch({ type: USER_SIGNIN_REQUEST, payload: { email, password } });
  try {
    const { data } = await axios.post('/api/login', { email, password });
    dispatch({ type: USER_SIGNIN_SUCCESS, payload: data.user });
    localStorage.setItem('userInfo', JSON.stringify(data.user));
    console.log(data.user)
  } catch (error) {
    dispatch({
      type: USER_SIGNIN_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
// Register
export const register = (firstName, lastName, email, password) => async (dispatch) => {
  try {
    dispatch({ type: REGISTER_USER_REQUEST });

    const { data } = await axios.post(`/api/register`, { firstName, lastName, email, password });

    dispatch({ type: REGISTER_USER_SUCCESS, payload: data.user });
    dispatch({ type: USER_SIGNIN_SUCCESS, payload: data.user });

    localStorage.setItem('userInfo', JSON.stringify(data.user));
    console.log(data);
    console.log(data.user);

  } catch (error) {
    dispatch({
      type: REGISTER_USER_FAIL,
      payload: error.response.data.message,
    });
  }
};


export const signout = () => async (dispatch) => {

  await axios.get(`/api/logout`);

  localStorage.removeItem('userInfo');
  dispatch({ type: USER_SIGNOUT });
  document.location.href = '/login';
};


// Clearing Errors
export const clearErrors = () => async (dispatch) => {
  dispatch({ type: CLEAR_ERRORS });
};
