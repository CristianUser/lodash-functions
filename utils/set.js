'use strict';

function isNumber(value) {
    return (parseInt(value) >= 0 || parseInt(value) <= 0);
}

function isUndefined(value) {
 return typeof value === 'undefined'
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

        if (isUndefined(object[pathArray[i]])) {
            eval(`object${newPath} = ${objOrArray(pathArray[i+1])}`)
        }
    }
    eval(`object${newPath} = JSON.parse('${JSON.stringify(value)}')`)
}

module.exports = set;
