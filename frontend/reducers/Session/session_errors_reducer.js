import {
  RECEIVE_CURRENT_USER,
  RECEIVE_SESSION_ERRORS
} from "../../actions/session_actions";

const initialState = [];

const SessionErrorsReducer = (state = initialState, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return [];
    case RECEIVE_SESSION_ERRORS:
      const newState = [];
      return newState.concat(action.errors.responseJSON);
    default:
      return state;
  }
};

export default SessionErrorsReducer;
