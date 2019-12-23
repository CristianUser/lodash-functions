"use strict";

/**
 * Calls a defined callback function on each element of an array, and returns an array that contains the results.
 * @param {Array} array
 * @param {Function} callback
 * @returns {Array}
 */
function filter(array, callback) {
  const newArray = [];

  for (let i = 0; i < array.length; i++) {
    if (callback(array[i], i, array)) {
      newArray.push(array[i]);
    }
  }

  return newArray;
}

module.exports = filter;
