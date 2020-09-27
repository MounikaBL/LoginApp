import { userConstants } from '../_constants';

let user = JSON.parse(localStorage.getItem('user'));
const initialState = user ? { loggingIn: true, user, error: false } : {};

export function authentication(state = initialState, action) {
  switch (action.type) {
    case userConstants.LOGIN_REQUEST:
      return {
        loggingIn: true,
        user: action.user,
        error: false
      };
    case userConstants.LOGIN_SUCCESS:
      return {
        loggingIn: true,
        user: action.user,
        error: false
      };
    case userConstants.LOGIN_FAILURE:
      return {
        ...state,
        loggingIn: false,
        error: action.error
      };
    case userConstants.LOGOUT:
      return {};
    default:
      return state
  }
}