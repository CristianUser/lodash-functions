'use strict';

/**
 * Calls a defined callback function on each element of an array to check if one of the elements returns true.
 * @param {Array} array
 * @param {Function} callback
 * @returns {boolean}
 */
function some(array, callback) {
  for (let i = 0; i < array.length; i++) {
    if(callback(array[i], i, array)) return true;
  }
  return false;
}

module.exports = some;
