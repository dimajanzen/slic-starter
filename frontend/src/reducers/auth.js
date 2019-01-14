import {
  LOGIN_REQUEST,
  LOGIN_FAILURE,
  LOGIN_SUCCESS,
  LOGIN_VALIDATED,
  LOGOUT_SUCCESS,
  SIGNUP_REQUEST,
  SIGNUP_FAILURE,
  SIGNUP_SUCCESS
} from '../actions/auth'

const defaultState = {
  loggingIn: false,
  loginFailed: false
}

export default (state = defaultState, { type, meta, payload, error }) => {
  switch (type) {
    case LOGIN_REQUEST:
      return {
        ...state,
        loggingIn: true,
        authenticated: false,
        loginError: null
      }
    case LOGIN_SUCCESS:
    case LOGIN_VALIDATED:
      return {
        ...state,
        loggingIn: false,
        authenticated: true,
        loginError: null
      }
    case LOGIN_FAILURE:
      return {
        ...state,
        loggingIn: false,
        authenticated: false,
        loginError: error
      }
    case LOGOUT_SUCCESS:
      return {
        ...state,
        authenticated: false
      }
    case SIGNUP_REQUEST:
      return {
        ...state,
        signingUp: true,
        loginError: null
      }
    case SIGNUP_SUCCESS:
      // TODO - Add post-signup authentication
      return {
        ...state,
        signingUp: false,
        signupError: null
      }
    case SIGNUP_FAILURE:
      return {
        ...state,
        signingUp: false,
        signupError: error
      }
    default:
      return state
  }
}
