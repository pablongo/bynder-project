import actionTypes from '../actions/actionTypes';

export default function planetReducer(planet = {}, action) {
  let newPlanet = planet;
  switch (action.type) {
    case actionTypes.LOAD_PLANET:
      newPlanet = action.data;
      break;

    default:
      break;
  }
  return newPlanet;
}
