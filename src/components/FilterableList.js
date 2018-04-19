// React
import React, { Fragment } from "react";
import PropTypes from "prop-types";


// Application's Components
import FilterButton from "./FilterButton";


// Application's constants
import Constants from "../constants";

const FilterableList = ({ filter, changeFilter, children }) => {


FilterableList.propTypes = {
  filter: PropTypes.number.isRequired,
  changeFilter: PropTypes.func.isRequired
};


export default FilterableList;
