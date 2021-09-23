import React from 'react';
import { useDispatch } from 'react-redux';

import { loadCharacters } from '../../redux/actions/actionCreators';

export default function PaginationButtons() {
  const dispatch = useDispatch();

  function handlePaginationClick() {
    dispatch(loadCharacters());
  }

  return (
    <>
      <button
        type="button"
        onClick={() => handlePaginationClick()}
      >
        Prev
      </button>
      <button
        type="button"
        onClick={() => handlePaginationClick()}
      >
        Next
      </button>
    </>
  );
}
