import actionTypes from '../actions/actionTypes';

export default function charactersReducer(characters = [], action) {
  const newCharacters = characters;
  switch (action.type) {
    case actionTypes.LOAD__CHARACTERS:

      break;
    case actionTypes.API_ERROR:

      break;

    default:
      break;
  }
  return newCharacters;
}
