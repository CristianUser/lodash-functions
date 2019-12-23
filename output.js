'use strict';

const testObject = {
  user: {
    name: {
      first: "Cristian"
    },
    likes: [
      {
        name: "Music",
        value: "music"
      },
      {
        name: "Dance",
        value: "dance"
      }
    ]
  }
};
console.log(JSON.stringify(testObject))