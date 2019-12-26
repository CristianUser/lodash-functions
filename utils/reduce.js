'use strict';

/**
 * Calls a defined callback function on each item and returns one value as result of the iteration of the callback
 * @param {Array} array
 * @param {Function} callback
 * @param {any} initialValue
 * @returns {any}
 */
function reduce(array, callback, initialValue) {
  let previousValue = initialValue || array[0],
    currentValue;

  for (let i = (initialValue) ? 0 : 1; i < array.length; i++) {
    currentValue = array[i];
    previousValue = callback(previousValue, currentValue);
  }

  return previousValue;
}

module.exports = reduce;
