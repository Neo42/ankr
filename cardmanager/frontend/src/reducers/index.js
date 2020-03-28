import { combineReducers } from 'redux';
import cards from './cards';
import errors from './errors';
import messages from './messages';
import auth from './auth';

export default combineReducers({
  cards, errors, messages, auth,
});
