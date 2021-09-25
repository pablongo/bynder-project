import actionTypes from '../actions/actionTypes';

export default function charactersReducer(characters = {}, action) {
  let newCharacters = characters;
  switch (action.type) {
    case actionTypes.LOAD_CHARACTERS:
      newCharacters = { ...action.data };
      break;

    case actionTypes.API_ERROR:
      break;

    default:
      break;
  }
  return newCharacters;
}
