"use strict";

const students = ['Peter', 'Andrew', 'Ann', 'Mark', 'Josh', 'Sandra', 'Cris', 'Bernard', 'Takesi', 'Sam', 'Ta'];

function sortStudentsByGroups(arr) {
    arr.sort();
    const a = [],
          b = [],
          c = [],
          res = [];

    for (let i = 0; i < arr.length; i++) {
        if (i < 3) {
            a.push(arr[i]);
        } else if (i < 6) {
            b.push(arr[i]);
        } else if (i < 9) {
            c.push(arr[i]);
        } else {
            res.push(arr[i]);
        }
    }
    return [a, b,  c, `Оставшиеся студенты: ${res.length === 0 ? '-' : res.join(', ')}`];
}

console.log(sortStudentsByGroups(students));