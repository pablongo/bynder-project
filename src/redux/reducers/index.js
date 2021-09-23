import { combineReducers } from 'redux';
import charactersReducer from './charactersReducer';
import planetReducer from './planetReducer';

export default combineReducers({
  characters: charactersReducer,
  planet: planetReducer,
});
