"use strict";

const input = document.querySelector('input'),
      button = document.querySelector('button');

button.addEventListener('click', () => {
    let newInp = document.createElement('input');
    newInp.style.cssText ='display: block; margin-top: 10px';
    document.body.append(newInp);
});

input.addEventListener('blur', () => {
    let newInp = input.cloneNode();
    newInp.style.cssText ='display: block; margin-top: 10px';
    document.body.append(newInp);    
});