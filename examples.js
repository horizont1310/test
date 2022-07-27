'use strict';

//⁡⁢⁣⁢Найдите все года от 1 до 2022, сумма цифр которых равна 13⁡

function getDigits(num) {
  return String(num).split("");
}

function getDigitsSum(num) {
  let sum = 0;
  for (let i = 0; i < num.length; i++) { //Не просто i = 0, а let i = 0. У меня при первом запуске браузер лёг)
    sum += +num[i];
  }

  return sum;
}

function summa(n) {
  return getDigitsSum(getDigits(n));
}


// Task 4
let arrYear = [];

function yearSum() {
  for (let i = 1; i <= 2022; i++) { //Тоже самое let i

    if (summa(i) == 13) { // summa(i) (круглые скобки), а не квадратные
      arrYear.push(i);
    }
  }
  return arrYear;
}
console.log(yearSum());

//⁡⁢⁣⁢Сделайте функцию ⁡⁢⁢⁢getDivisors⁡⁢⁣⁢, которая параметром принимает число и возвращает массив его делителей (чисел, на которое делится данное число).⁡⁡

function getDivisors(num) {
  let result = [];

  for (let i = 1; i <= num; i++) {
    if (num % i == 0) {
      result.push(i);
    }
  }

  return result;
}

console.log(getDivisors(24));

//⁡⁢⁣⁢Дана строка. Сделайте заглавным первый символ каждого слова этой строки. Для этого сделайте вспомогательную функцию⁡ ⁡⁢⁢⁢ucfirst⁡⁡⁢⁣⁡⁢⁣⁢, которая будет получать строку, делать первый символ этой строки заглавным и возвращать обратно строку с заглавной первой буквой⁡ 

let str = 'first name is your name';

function ucfirst(str) {
    str = str.split(' ');
    let string = '',
        toUpp;
    for (let i = 0; i < str.length; i++) {
        toUpp = str[i][0].toUpperCase();
        console.log(toUpp);
        string += str[i].replace(str[i][0], toUpp) + ' ';
    }
    return string;
}
console.log(ucfirst(str));