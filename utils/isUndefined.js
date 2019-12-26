'use strict';

/**
 * Checks if the value is undefined
 * @param {Object} value value to check
 * @returns {boolean}
 */
function isUndefined(value) {
  return typeof value === 'undefined';
}

module.exports = isUndefined;
