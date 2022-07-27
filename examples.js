'use strict';

//⁡⁢⁣⁢Найдите все года от ⁡⁣⁣⁢1 до 2022⁡⁢⁣⁢, сумма цифр которых равна ⁡⁣⁣⁢13⁡⁡

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

    if (summa(i) == 13) { // summa(i) (⁡⁢​‌‍‌⁣круглые скобки​⁡), а не квадратные
      arrYear.push(i);
    }
  }
  return arrYear;
}
console.log(yearSum());

//⁡⁢⁣⁢Сделайте функцию ⁡⁢⁢⁡⁢⁣⁣getDivisors⁡⁡⁢⁣⁢, которая параметром принимает число и возвращает массив его делителей (чисел, на которое делится данное число).⁡⁡

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

//⁡⁢⁣⁢Дана строка. Сделайте заглавным первый символ каждого слова этой строки. Для этого сделайте вспомогательную функцию⁡ ⁡⁢⁣⁣ucfirst⁡⁡⁡⁢⁣⁡⁢⁣⁢, которая будет получать строку, делать первый символ этой строки заглавным и возвращать обратно строку с заглавной первой буквой⁡ 

let str = 'first name is your name';

function ucfirst(str) {
  str = str.split(' ');
  let toUpp,
    nStr = '';
  for (let i = 0; i < str.length; i++) {
    toUpp = str[i][0].toUpperCase();
    nStr += str[i].replace(str[i][0], toUpp) + ' ';
  }
  return nStr;
}
console.log(ucfirst(str));

//⁡⁢⁣⁢Сделайте функцию⁡ ⁡⁢⁢⁡⁢⁣⁣inArray⁡⁡⁢⁣⁢, которая определяет, есть в массиве элемент с заданным текстом или нет. Функция первым параметром должна принимать текст элемента, а вторым - массив, в котором делается поиск. Функция должна возвращать true или fa⁡⁢⁣⁢lse⁡

let arr = ['yes', 'no', 'or', 'bee'];

function inArray(str, arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == str) {
      return true;
    }
  }
  return false;
}
console.log(inArray('or', arr));

//  ⁡⁢⁣⁢Дана строка, например, ⁡⁣⁣⁢'123456'⁡⁢⁣⁢. Сделайте из нее⁡ ⁡⁣⁣⁢'214365'⁡⁢⁣⁢.⁡

function nnu() {
  let str = '123456';

  function toRearrange(text) {
    let arr = text.split('');
    let arrNew = []; // сюда будем добавлять пары 21, 43 и т.д.

    for (let i = 0; i < arr.length; i += 2) { // нарезаем пары
      let temp = arr.slice(i, i + 2).reverse(); // маленький массив из очередных 2 элеметов, поменянных местами
      arrNew = arrNew.concat(temp); // push() тут не подходит
    }

    str = arrNew.join('');
    return str;
  }

  console.log(toRearrange(str));
}