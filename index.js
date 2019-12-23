'use strict';

const { _filter, _get, _set } = require('./utils'),
    testArray = [ 12,5,3,6,78],
    testObject = {
        user: {
            name: {
                first : 'Cristian'
            },
            likes: [
                {
                    name: 'Music',
                    value: 'music'
                },
                {
                    name: 'Dance',
                    value: 'dance'
                }
            ]
        }
    }

console.log(_get(testObject, 'user.name.first'));
_set(testObject, 'user.friends[0].name', 'Jonh Doe')
console.log(testObject)
