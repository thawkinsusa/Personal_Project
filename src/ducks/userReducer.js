import axios from 'axios';
import { SIGNUP, LOGIN, GET_USER, LOGOUT, GET_USERS } from './actionTypes';

const initialState = {
  users:[],
  user: {},
  error: false,
  redirect: false
};

export const logout = () => {
  return {
    type: LOGOUT,
    payload: axios.delete('/api/logout')
  };
};

export const signup = (user_name, user_password, user_email, user_image, user_join_date) => {
  let data = axios
    .post('/api/signup', { user_name, user_password, user_email, user_image, user_join_date })
    .then(res => res.data);
  return {
    type: SIGNUP,
    payload: data
  };
};

export const login = (user_name, user_password) => {
  let data = axios
    .post('/api/login', { user_name, user_password })
    .then(res => res.data);
  return {
    type: LOGIN,
    payload: data
  };
};

export const getUser = () => {
  let data = axios.get('/api/user').then(res => res.data);
  return {
    type: GET_USER,
    payload: data
  };
};
export const getUsers = () => {
  let data = axios.get('/api/users').then(res => res.data);
  return {
    type: GET_USERS,
    payload: data
  };
};


export default function (state = initialState, action) {
  let { type, payload } = action;
  switch (type) {
    case SIGNUP + '_FULFILLED':

      return { user: payload, redirect: false, error: false };
    case SIGNUP + '_REJECTED':
      return { ...state, error: payload };
    case LOGIN + '_FULFILLED':
      return {
        user: payload,
        error: false,
        redirect: false
      };
    case LOGOUT + '_FULFILLED':
      return { ...state, user: {} }
    case LOGIN + '_REJECTED':
      return { ...state, error: payload };
    case GET_USER + '_PENDING':
      return { ...state, redirect: false, error: false };
    case GET_USER + '_FULFILLED':
      return { ...state, user: payload, error: false };
    case GET_USER + '_REJECTED':
      return { ...state, redirect: true, error: payload };
    case GET_USERS + '_PENDING':
      return { ...state, redirect: false, error: false };
    case GET_USERS + '_FULFILLED':
      return { ...state, users: payload, error: false };
    case GET_USERS + '_REJECTED':
      return { ...state, redirect: true, error: payload };

    default:
      return state;
  }
}
