// React
import React, { Fragment } from "react";
import PropTypes from "prop-types";


// Application's Components
import FilterButton from "./FilterButton";


// Application's constants
import Constants from "../constants";


// HOC for the FilterButton components.
const FilterButtons = ({ changeFilter, children, ...restProps }) => {
  const _children = React.Children.toArray(children).map((child, i) => React.cloneElement(child, { changeFilter, ...restProps }));

  return (
    <div>
      {_children}
    </div>
  );
};


const FilterableList = ({ filter, changeFilter, children, ...restProps }) => {
  const _children = React.Children.toArray(children).map((child, i) => React.cloneElement(child, { filter, ...restProps }));

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
