"use strict";

// ⁡⁢⁣⁢Заполните массив 10-ю ⁡⁣⁣⁢иксами⁡ ⁡⁢⁣⁢с помощью цикла⁡

function ex() {
  let arr = [];

  for (let i = 0; i < 10; i++) {
    arr[i] = "x";
  }
  console.log(arr);
}

//⁡⁢⁣⁢Заполните массив 10-ю случайными числами (дробями) от 0 до 1 с помощью цикла. Дроби округляйте до двух знаков в дробной части⁡

function exx() {
  let arr = [];

  for (let i = 0; i < 10; i++) {
    arr[i] = (Math.random() * (1 - 0)).toFixed(2);
  }
  console.log(arr);
}

//⁡⁢⁣⁢Заполните массив 10-ю случайными числами от 1 до 10 с помощью цикла⁡

function adss() {
  let arr = [];

  for (let i = 0; i < 10; i++) {
    arr[i] = Math.floor(Math.random() * (10 - 1) + 1);
  }
  console.log(arr);
}

//⁡⁢⁣⁢Дан массив с числами. С помощью цикла выведите только те элементы массива, которые больше нуля и меньше 10-ти⁡

function asd() {
  let arr = [0, 2, 4, 3, 7, 33, 333, 3333, 14];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0 && arr[i] < 10) {
      console.log(arr[i]);
    }
  }
}

//⁡⁢⁣⁢Найдите все года от ⁡⁣⁣⁢1 до 2022⁡⁢⁣⁢, сумма цифр которых равна ⁡⁣⁣⁢13⁡⁡

function getDigits(num) {
  return String(num).split("");
}

function getDigitsSum(num) {
  let sum = 0;
  for (let i = 0; i < num.length; i++) {
    //Не просто i = 0, а let i = 0. У меня при первом запуске браузер лёг)
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
  for (let i = 1; i <= 2022; i++) {
    //Тоже самое let i

    if (summa(i) == 13) {
      // summa(i) (⁡⁢​‌‍‌⁣круглые скобки​⁡), а не квадратные
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

let str = "first name is your name";

function ucfirst(str) {
  str = str.split(" ");
  let toUpp,
    nStr = "";
  for (let i = 0; i < str.length; i++) {
    toUpp = str[i][0].toUpperCase();
    nStr += str[i].replace(str[i][0], toUpp) + " ";
  }
  return nStr;
}
console.log(ucfirst(str));

//⁡⁢⁣⁢Сделайте функцию⁡ ⁡⁢⁢⁡⁢⁣⁣inArray⁡⁡⁢⁣⁢, которая определяет, есть в массиве элемент с заданным текстом или нет. Функция первым параметром должна принимать текст элемента, а вторым - массив, в котором делается поиск. Функция должна возвращать true или fa⁡⁢⁣⁢lse⁡

let arr = ["yes", "no", "or", "bee"];

function inArray(str, arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == str) {
      return true;
    }
  }
  return false;
}
console.log(inArray("or", arr));

//  ⁡⁢⁣⁢Дана строка, например, ⁡⁣⁣⁢'123456'⁡⁢⁣⁢. Сделайте из нее⁡ ⁡⁣⁣⁢'214365'⁡⁢⁣⁢.⁡

function nnu() {
  let str = "123456";

  function toRearrange(text) {
    let arr = text.split("");
    let arrNew = []; // сюда будем добавлять пары 21, 43 и т.д.

    for (let i = 0; i < arr.length; i += 2) {
      // нарезаем пары
      let temp = arr.slice(i, i + 2).reverse(); // маленький массив из очередных 2 элеметов, поменянных местами
      arrNew = arrNew.concat(temp); // push() тут не подходит
    }

    str = arrNew.join("");
    return str;
  }

  console.log(toRearrange(str));
}

// ⁡⁢⁣⁢Дан массив с числами. Выведите последовательно его элементы используя⁡ ⁡⁣⁣⁢рекурсию⁡⁡ ⁡⁢⁣⁢и не используя цикл⁡

function rec() {
  let arr = [1, 2, 4, 5];

  function a(arr) {
    for (let i = 0; i < arr.length; i++) {
      if (arr.length != 0) {
        arr[i] = a(arr[i]);
      }
    }
    return arr;
  }

  console.log(a(arr));
}
// ⁡⁢⁢⁡⁣⁢⁣Другой пример (из задачника)⁡⁡

function func(arr) {
  alert(arr[0]);
  arr.splice(0, 1);
  if (arr.length > 0) {
    func(arr);
  }
}

// ⁡⁢⁣⁢Дано число. Сложите его цифры. Если сумма получилась более 9-ти, опять сложите его цифры. И так, пока сумма не станет однозначным числом (9 и менее) ⁡⁢⁣⁢с помощью рекурсии⁡

function less() {
  let arr = 12351;

  function str(num) {
    num = num.toString();
    return num.split("");
  }

  function sumDigits(num) {
    let sum = 0;
    for (let i = 0; i < num.length; i++) {
      sum += +num[i];
    }
    return sum;
  }

  function digitsSum(num) {
    return sumDigits(str(num));
  }

  function result(num) {
    let sum = digitsSum(num);
    if (sum >= 10) {
      return result(sum);
    }
    return sum;
  }
  console.log(result(arr));
}

// ⁡⁢⁢⁢Методы прототипов⁡

/* ⁡⁣⁢⁣Object.create(proto, [descriptors])⁡ – создаёт пустой объект со свойством ⁡⁢⁢⁢[[Prototype]]⁡, указанным как proto, и необязательными дескрипторами свойств ⁡⁢⁢⁢descriptors⁡. */
/* ⁡⁣⁢⁣Object.getPrototypeOf(obj)⁡ – возвращает свойство ⁡⁢⁢⁢[[Prototype]]⁡ объекта ⁡⁢⁢⁢obj⁡. */
/* ⁡⁣⁢⁣Object.setPrototypeOf(obj, proto)⁡ – устанавливает свойство ⁡⁢⁢⁢[[Prototype]]⁡ объекта ⁡⁢⁢⁢obj⁡ как ⁡⁢⁢⁢proto⁡. */

function proto() {
  let animal = {
    eats: true,
  };

  // создаём новый объект с прототипом animal
  let rabbit = Object.create(animal);

  alert(rabbit.eats); // true

  alert(Object.getPrototypeOf(rabbit) === animal); // получаем прототип объекта rabbit

  Object.setPrototypeOf(rabbit, {}); // заменяем прототип объекта rabbit на {}
}

// ⁡⁣⁢⁢​‌‍‌Упражнение по написанию кода 13​⁡

function thirteen() {
  const shoppingMallData = {
    shops: [
      {
        width: 10,
        length: 5,
      },
      {
        width: 15,
        length: 7,
      },
      {
        width: 20,
        length: 5,
      },
      {
        width: 8,
        length: 10,
      },
    ],
    height: 5,
    moneyPer1m3: 30,
    budget: 50000,
  };

  function isBudgetEnough(data) {
    let space = 0;
    let volume = 0;
    data.shops.forEach((shop) => {
      space += shop.width * shop.length;
    });

    volume = data.height * space;
    if (data.budget - volume * data.moneyPer1m3 >= 0) {
      return "Бюджета достаточно";
    } else {
      return "Бюджета недостаточно";
    }
  }

  console.log(isBudgetEnough(shoppingMallData));
}

//⁡⁣⁢⁢​‌‌‍Задача​⁡:
/* ⁡⁣⁢⁢У вас есть список учеников, которые хотят поиграть в игру:
const students = ['Peter', 'Andrew', 'Ann', 'Mark', 'Josh', 'Sandra', 'Cris', 'Bernard', 'Takesi', 'Sam'];
Но команд может быть только 3 по 3 человека. Напишите функцию sortStudentsByGroups, которая принимает в себя массив строк.
Внутри она сначала сортирует имена по алфавиту. Затем распределяет учеников по 3 человека в 3 группы по алфавитному порядку. Эти группы должны быть массивами. Как итог, функция возвращает новый массив с тремя командами и строкой как 4й элемент.⁡ */

function students() {
  const students = [
    "Peter",
    "Andrew",
    "Ann",
    "Mark",
    "Josh",
    "Sandra",
    "Cris",
    "Bernard",
    "Takesi",
    "Sam",
    "Ta",
  ];

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
    return [
      a,
      b,
      c,
      `Оставшиеся студенты: ${res.length === 0 ? "-" : res.join(", ")}`,
    ];
  }

  console.log(sortStudentsByGroups(students));
}


//⁡⁣⁢⁢Это одна из классических задач в программировании на формирование самых разных фигур при помощи кода.⁡ ​‌‌⁡⁣⁢⁢​‌‌‌Создание⁡ ⁡⁣⁣⁢пирамиды⁡ ⁡⁣⁢⁢из⁡ ⁡⁣⁣⁢'*'

let lines = 10;
let star = '';

for (let i = 0; i <= lines; i++) {
  for (let j = 0; j < lines - i; j++) {
    star += " ";
  }
  for (let k = 0; k < 2 * i + 1; k++) {
    star += "*";
  }
  star += " " + "\n";
}
console.log(star);