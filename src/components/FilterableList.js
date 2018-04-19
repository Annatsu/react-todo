// React
import React, { Fragment } from "react";
import PropTypes from "prop-types";


const FilterableList = ({ filter, children }) => React.cloneElement(children, { filter });
// Application's Components
import FilterButton from "./FilterButton";


// Application's constants
import Constants from "../constants";

FilterableList.propTypes = {
    filter: PropTypes.number.isRequired
};


export default FilterableList;
