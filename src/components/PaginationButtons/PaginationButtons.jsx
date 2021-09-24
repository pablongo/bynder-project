import React from 'react';
import { useDispatch } from 'react-redux';
import { PropTypes } from 'prop-types';

import { loadCharacters } from '../../redux/actions/actionCreators';

export default function PaginationButtons({ previous, next }) {
  const dispatch = useDispatch();

  function handlePaginationClick(page) {
    dispatch(loadCharacters(page));
  }

  return (
    <div className="pagination-container">
      <button
        disabled={!previous}
        type="button"
        onClick={() => handlePaginationClick(previous)}
      >
        Prev
      </button>
      <button
        disabled={!next}
        type="button"
        onClick={() => handlePaginationClick(next)}
      >
        Next
      </button>
    </div>
  );
}

PaginationButtons.defaultProps = {
  previous: PropTypes.string,
  next: PropTypes.string,
};

PaginationButtons.propTypes = {
  previous: PropTypes.string,
  next: PropTypes.string,
};
