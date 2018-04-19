/**
 * Shows all the todos in the App's state.
 *
 * @constant
 */
const FILTER_SHOW_ALL = 0;


/**
 * Only display the completed todos.
 *
 * @constant
 */
const FILTER_SHOW_COMPLETED = 1;


/**
 * Only display the uncompleted todos.
 *
 * @constant
 */
const FILTER_SHOW_UNCOMPLETED = 2;


/**
 * The default export is an object containing all of the constants definition.
 *
 * @export
 */
export default {
  filters: {
    FILTER_SHOW_ALL,
    FILTER_SHOW_COMPLETED,
    FILTER_SHOW_UNCOMPLETED
  }
};
