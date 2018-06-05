import merge from 'lodash/merge';
import RECEIVE_CURRENT_USER from '../actions/session_actions';

export const usersReducer = (state= {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return merge({}, state, {[action.user]: action.user});
    default:
      return state;
  }
};
