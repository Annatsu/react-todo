// React
import React, { Fragment } from "react";
import PropTypes from "prop-types";


// Application's Components
import FilterButton from "./FilterButton";


// Application's constants
import Constants from "../constants";


// HOC for the FilterButton components.
const FilterButtons = ({ changeFilter, children }) => {
  const _children = React.cloneElement(children, { changeFilter });

  console.log('children', children)
  console.log('_children', _children)

  return (
    <div>
      {_children}
    </div>
  );
}


const FilterableList = ({ filter, changeFilter, children }) => {
  const _children = React.cloneElement(children, { filter });

  console.log('filterable children', children);
  console.log('filterable _children', _children);

  return (
    <Fragment>

      <div>
        {_children}
      </div>

      <FilterButtons changeFilter={changeFilter}>
        <FilterButton filter={Constants.filters.FILTER_SHOW_ALL}>Show All</FilterButton>
        <FilterButton filter={Constants.filters.FILTER_SHOW_COMPLETED}>Show Completed</FilterButton>
        <FilterButton filter={Constants.filters.FILTER_SHOW_UNCOMPLETED}>Show Uncompleted</FilterButton>
      </FilterButtons>

    </Fragment>
  );
};


FilterableList.propTypes = {
  filter: PropTypes.number.isRequired,
  changeFilter: PropTypes.func.isRequired
};


export default FilterableList;
