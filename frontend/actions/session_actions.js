import * as SessionAPIUtil from "../util/session_api_util";
export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const RECEIVE_ERRORS = "RECEIVE_ERRORS";

export const receiveCurrentUser = currentUser => ({
  type: RECEIVE_CURRENT_USER,
  currentUser
});

export const receiveErrors = errors => ({
  type: RECEIVE_ERRORS,
  errors
});

export const login = user => dispatch =>
  SessionAPIUtil.login(user).then(
    currentUser => dispatch(receiveCurrentUser(currentUser)),
    errs => dispatch(receiveErrors(errs))
  );

export const signup = user => dispatch =>
  SessionAPIUtil.signup(user).then(
    currentUser => dispatch(receiveCurrentUser(currentUser)),
    errs => dispatch(receiveErrors(errs))
  );

export const logout = () => dispatch =>
  SessionAPIUtil.logout().then(
    () => {
      dispatch(receiveCurrentUser(null));
    },
    errs => dispatch(receiveErrors(errs))
  );
