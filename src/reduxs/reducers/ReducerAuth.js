import {
  LOGIN_SUCCESS,
  LOGIN_ERROR,
  SIGNOUT_SUCCESS,
  SIGNUP_SUCCESS,
  SIGNUP_ERROR,
} from '../constants/Constants';

const INITIAL_STATE = {
  authError: null,
};

const handleErrorAuth = (state, action) => ({
  ...state,
  authError: action.error.message,
});

const handleSuccessAuth = (state, action) => ({
  ...state,
  authError: null,
});

const ReducerAuth = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LOGIN_ERROR:
    case SIGNUP_ERROR:
      return handleErrorAuth(state, action);
    case LOGIN_SUCCESS:
    case SIGNUP_SUCCESS:
      return handleSuccessAuth(state, action);
    case SIGNOUT_SUCCESS:
      return state;
    default:
      return state;
  }
};

export default ReducerAuth;
