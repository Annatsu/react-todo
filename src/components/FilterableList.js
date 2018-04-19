// React
import React from 'react';
import PropTypes from 'prop-types';


const FilterableList = ({ filter, children }) => React.cloneElement(children, { filter });


FilterableList.propTypes = {
    filter: PropTypes.number.isRequired
};


export default FilterableList;
