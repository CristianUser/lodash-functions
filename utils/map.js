'use strict';

/**
 * Calls a defined callback function on each element of an array, and returns an array that contains the results.
 * @param {Array} array
 * @param {Function} callback
 * @returns {Array}
 */
function map(array, callback) {
  const newArray = [];

  for (let i = 0; i < array.length; i++) {
    newArray[i] = callback(array[i], i, array);
  }

  return newArray;
}

module.exports = map;
