"use strict";

/**
 * Returns property value
 * @param {Object} object
 * @param {string} path properties path
 * @param {any} defaultValue used to return in case not found
 */
function get(object, path, defaultValue) {
  path = path.replace("[", ".").replace("]", "");
  const pathArray = path.split(".");
  for (let i = 0; i < pathArray.length; i++) {
    try {
      object = object[pathArray[i]];
    } catch (error) {
      return defaultValue;
    }
  }
  return object;
}

module.exports = get;
