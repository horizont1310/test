"use strict";

let user = document.querySelector(".user"),
  input = document.querySelector("input");

input.addEventListener("keydown", (e) => {
  if (e.code === "Enter") {
    let li = document.createElement("li");
    li.innerHTML = input.value;
    user.insertAdjacentElement("beforeend", li);

    let newBtn = function() {
      let button = document.createElement("button");
      button.innerHTML = "Remove";
      li.insertAdjacentElement("beforeend", button);    
      button.addEventListener("click", (e) => {
        e.target.closest("li").remove();
        li.removeEventListener('click', newList);
      });
    };    

    let newList = function () {
      let newValue = prompt("Debag", "");
      li.innerHTML = newValue;
      newBtn();
    };
    li.addEventListener("click", newList);

    input.value = "";
    newBtn();
  }
});