'use strict';

/**
 * Calls a defined callback function on each element of an array, and returns an array that contains the results.
 * @param {Array} array
 * @param {Function} callback
 * @returns {any}
 */
function find(array, callback) {
  for (let i = 0; i < array.length; i++) {
    if (callback(array[i], i, array)) {
      return array[i];
    }
  }

  return;
}

module.exports = find;
