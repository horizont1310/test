"use strict";

window.addEventListener("DOMContentLoaded", () => {
  const body = document.querySelector("body");
  let textNode = [];

  function recurcy(element) {
    element.childNodes.forEach((node) => {
      if (node.nodeName.match(/^H\d/)) { // ищет строку, которая начинается с H, а дальше идет какое-то число(Пр: h1, h2....)
        const obj = {
          header: node.nodeName,
          content: node.textContent
        };
        textNode.push(obj); // пушит содержимое объекты с информацией
      } else {        
        recurcy(node);
      }
    });
  }
  recurcy(body);
  
  fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(textNode)
  })
  .then(response => response.json())
  .then(json => console.log(json));
});
