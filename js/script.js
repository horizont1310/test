"use strict";

function factorial(num) {
    if (num <= 0) {
        return 1;
    } else {
        if (!Number.isInteger(num) || typeof(num) != 'number') {
            return 'Введите цело число';
        } else {
            return num * factorial(num - 1);
        }    
    }
}  
   

console.log(factorial(5));