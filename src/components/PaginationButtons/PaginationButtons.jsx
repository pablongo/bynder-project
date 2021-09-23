/* eslint-disable react/prop-types */
import React from 'react';
import { useDispatch } from 'react-redux';

import { loadCharacters } from '../../redux/actions/actionCreators';

export default function PaginationButtons({ previous, next }) {
  const dispatch = useDispatch();

  function handlePaginationClick(page) {
    dispatch(loadCharacters(page));
  }

  return (
    <>
      <button
        type="button"
        onClick={() => handlePaginationClick(previous)}
      >
        Prev
      </button>
      <button
        type="button"
        onClick={() => handlePaginationClick(next)}
      >
        Next
      </button>
    </>
  );
}
