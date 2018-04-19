/**
 * Shows all the todos in the App's state.
 *
 * @export
 * @constant
 */
export const FILTER_SHOW_ALL = 0;


/**
 * Only display the completed todos.
 *
 * @export
 * @constant
 */
export const FILTER_SHOW_COMPLETED = 1;


/**
 * Only display the uncompleted todos.
 *
 * @export
 * @constant
 */
export const FILTER_SHOW_UNCOMPLETED = 1;


/**
 * @default
 * @export
 */
const defaultExport = {
  filters: {
    FILTER_SHOW_ALL,
    FILTER_SHOW_COMPLETED,
    FILTER_SHOW_UNCOMPLETED
  }
};

export default defaultExport;
module.exports = defaultExport;
