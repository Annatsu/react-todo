// React
import React from 'react';
import PropTypes from 'prop-types';


const FilterButton = ({ changeFilter, filter, children }) => (
  <button onClick={() => changeFilter(filter)}>
    {children}
  </button>
);


FilterButton.propTypes = {
  changeFilter: PropTypes.func,
  filter: PropTypes.number.isRequired
};


export default FilterButton;
