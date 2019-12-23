'use strict';

const _get = require('./get');

function isNumber(string) {
    return parseInt(string) >= 0;
}

function objOrArray(string) {
    if (isNumber(string)) {
        return '[]';
    } else {
        return '{}';
    }
}

/**
 * 
 * @param {Object} object 
 * @param {string} path 
 * @param {Object} value
 */
function set(object, path, value) {
    path = path.replace('[', '.').replace(']', '');

    const pathArray = path.split('.');

    let newPath = '';

    for(let i = 0; i < pathArray.length;i++) {
        newPath += `['${pathArray[i]}']`;

        if (typeof object[pathArray[i]] === 'undefined') {
            eval(`object${newPath} = ${objOrArray(pathArray[i+1])}`)
        }
    }
    eval(`object${newPath} = JSON.parse('${JSON.stringify(value)}')`)
}

module.exports = set;
