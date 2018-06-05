import * as APIUtil from '../util/session_api_util';
export const RECEIEVE_SESSION_ERRORS = 'RECEIEVE_SESSION_ERRORS';
export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
export const SIGNUP_USER = 'SIGNUP_USER';

export const login = (user) => (dispatch) => {
  return APIUtil.login(user).then(userRes => {
    return dispatch(receiveCurrentUser(userRes));
  });
};

export const logout = () => dispatch => {
  return APIUtil.logout().then(res =>  dispatch(logoutCurrentUser(res))
  );
};

export const signUp = (user) => (dispatch) => {
  return APIUtil.signupUser(user).then(res =>
    dispatch(signupUser(res))
  ).fail(err => dispatch(receiveSessionErrors(err.responseJSON)));
};

export const signupUser = user =>  ({
  type: SIGNUP_USER,
  user
});

export const receiveCurrentUser = (user) => ({
  type: RECEIVE_CURRENT_USER,
  user
});

export const logoutCurrentUser= () => ({
  type: LOGOUT_CURRENT_USER
});


export const receiveSessionErrors = errors => ({
  type: RECEIEVE_SESSION_ERRORS,
  errors
});
