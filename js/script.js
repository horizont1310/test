"use strict";

let countriesSelect = document.querySelector("#countries-select"),
    citiesSelect = document.querySelector("#cities-select");

const data = {
  Ukraine: ['Kharkiv', 'Kyiv', 'Lviv'],
  Canada: ['Ottava', 'Toronto', 'Cambridge'],
  UK: ['London', 'Oxford', 'Liverpul']
};

const countries = Object.keys(data);
addOption(countriesSelect, countries);

let defaultCities = data[countries[0]];
addOption(citiesSelect, defaultCities);

countriesSelect.addEventListener("change", function () {
  let cities = data[this.value];
  citiesSelect.length = 0;
  addOption(citiesSelect, cities);
});

function addOption(select, arr) {
  for (let i = 0; i < arr.length; i++) {    
    select.add(new Option(arr[i]));
  }
}