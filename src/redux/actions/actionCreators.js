import axios from 'axios';
import actionTypes from './actionTypes';

export async function loadCharacters() {
  return async (dispatch) => {
    const url = process.env.REACT_APP_SWAPI;

    try {
      const { data } = await axios(url);

      dispatch({
        type: actionTypes.LOAD__CHARACTERS,
        data,
      });
    } catch (error) {
      dispatch({
        type: actionTypes.API_ERROR,
      });
    }
  };
}

export async function loadPlanet(url) {
  return async (dispatch) => {
    try {
      const { data } = await axios(url);

      dispatch({
        type: actionTypes.LOAD_PLANET,
        data,
      });
    } catch (error) {
      dispatch({
        type: actionTypes.API_ERROR,
      });
    }
  };
}
