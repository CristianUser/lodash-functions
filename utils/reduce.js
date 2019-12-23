"use strict";

/**
 * Calls a defined callback function on each item and returns one value as result of the iteration of the callback
 * @param {Array} array
 * @param {Function} callback
 * @param {any} initialValue
 * @returns {Array}
 */
function reduce(array, callback, initialValue) {
  let beforeValue = initialValue,
    currentValue;

  for (let i = 0; i < array.length; i++) {
    currentValue = array[i];
    beforeValue = callback(beforeValue, currentValue);
  }

  return beforeValue;
}

module.exports = reduce;
