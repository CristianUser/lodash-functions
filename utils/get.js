"use strict";

/**
 *
 * @param {Object} object
 * @param {string} path
 */
function get(object, path) {
  path = path.replace("[", ".").replace("]", "");
  const pathArray = path.split(".");
  for (let i = 0; i < pathArray.length; i++) {
    try {
      object = object[pathArray[i]];
    } catch (error) {
      return undefined;
    }
  }
  return object;
}

module.exports = get;
