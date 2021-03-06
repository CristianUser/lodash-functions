'use strict';

const _isUndefined = require('./isUndefined');

/**
 * Returns property value
 * @param {Object} object
 * @param {string} path properties path
 * @param {any} defaultValue used to return in case not found
 * @returns {Object} value
 */
function get(object, path, defaultValue) {
  path = path.replace('[', '.').replace(']', '');
  const pathArray = path.split('.');

  for (let i = 0; i < pathArray.length; i++) {
    try {
      object = object[pathArray[i]];
    } catch (error) {
      return defaultValue;
    }
  }
  return _isUndefined(object) ? defaultValue : object;
}

module.exports = get;
