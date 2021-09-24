/* eslint-disable no-unused-vars */
import axios from 'axios';
import actionTypes from './actionTypes';

export function loadCharacters(url) {
  return async (dispatch) => {
    try {
      const { data } = await axios(url);
      dispatch({
        type: actionTypes.LOAD_CHARACTERS,
        data,
      });
    } catch (error) {
      dispatch({
        type: actionTypes.API_ERROR,
      });
    }
  };
}
export function loadSearchedCharacters(searchTerm, filterBy) {
  return async (dispatch) => {
    try {
      let url = process.env.REACT_APP_SWAPI;
      url += `${filterBy}/?search=${searchTerm}`;

      const { data } = await axios(url);

      dispatch({
        type: actionTypes.LOAD_CHARACTERS,
        data,
      });
    } catch (error) {
      dispatch({
        type: actionTypes.API_ERROR,
      });
    }
  };
}

export function loadPlanet(url) {
  return async (dispatch) => {
    try {
      const { data } = await axios(url);
      let planetResidents = await axios.all((data.residents.map(
        (residentUrl) => axios.get(residentUrl),
      )));

      planetResidents = planetResidents.map((response) => response.data);

      const planetObj = {
        ...data,
        planetResidents,
      };

      dispatch({
        type: actionTypes.LOAD_PLANET,
        planetObj,
      });
    } catch (error) {
      dispatch({
        type: actionTypes.API_ERROR,
      });
    }
  };
}
