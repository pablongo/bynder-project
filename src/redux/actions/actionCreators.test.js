import axios from 'axios';
import { loadCharacters, loadSearchedCharacters, loadPlanet } from './actionCreators';
import actionTypes from './actionTypes';

jest.mock('axios');

describe('Given a loadCharacters function', () => {
  describe('When is invoked', () => {
    describe('And resolves', () => {
      test('Then should call dispatch with LOAD_CHARACTERS', async () => {
        const dispatch = jest.fn();
        axios.mockResolvedValue({ data: [] });

        await loadCharacters()(dispatch);

        expect(dispatch).toHaveBeenCalledWith({
          type: actionTypes.LOAD_CHARACTERS,
          data: [],
        });
      });
    });
    describe('And rejectes', () => {
      test('Then should call dispatch with API_ERROR', async () => {
        const dispatch = jest.fn();
        axios.mockRejectedValue({ data: [] });

        await loadCharacters()(dispatch);

        expect(dispatch).toHaveBeenCalledWith({
          type: actionTypes.API_ERROR,
        });
      });
    });
  });
});

describe('Given a loadSearchedCharacters function', () => {
  describe('When is invoked', () => {
    describe('And resolves', () => {
      test('Then should call dispatch with LOAD_CHARACTERS', async () => {
        const dispatch = jest.fn();
        axios.mockResolvedValue({ data: [] });

        await loadSearchedCharacters()(dispatch);

        expect(dispatch).toHaveBeenCalledWith({
          type: actionTypes.LOAD_CHARACTERS,
          data: [],
        });
      });
    });
    describe('And rejectes', () => {
      test('Then should call dispatch with API_ERROR', async () => {
        const dispatch = jest.fn();
        axios.mockRejectedValue({ data: [] });

        await loadSearchedCharacters()(dispatch);

        expect(dispatch).toHaveBeenCalledWith({
          type: actionTypes.API_ERROR,
        });
      });
    });
  });
});

describe('Given a loadPlanet function', () => {
  describe('When is invoked', () => {
    describe('And resolves', () => {
      test('Then should call dispatch with LOAD_CHARACTERS', async () => {
        const dispatch = jest.fn();

        axios.mockResolvedValue({ data: { residents: [] } });
        axios.all.mockResolvedValue([]);

        await loadPlanet()(dispatch);

        expect(dispatch).toHaveBeenCalledWith({
          type: actionTypes.LOAD_PLANET,
          planetObj: {
            planetResidents: [],
            residents: [],
          },
        });
      });
    });
    describe('And rejectes', () => {
      test('Then should call dispatch with API_ERROR', async () => {
        const dispatch = jest.fn();
        axios.all.mockRejectedValue({ data: [] });

        await loadPlanet()(dispatch);

        expect(dispatch).toHaveBeenCalledWith({
          type: actionTypes.API_ERROR,
        });
      });
    });
  });
});
