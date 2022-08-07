"use strict";

function sum(a) {

    return function(b) {
      return a + b; // берёт "a" из внешнего лексического окружения
    };
  
  }
console.log( sum(1)(2) );