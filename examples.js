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

//⁡⁣⁢⁢Это одна из классических задач в программировании на формирование самых разных фигур при помощи кода.⁡ ​‌‌⁡⁣⁢⁢​‌‌‌Создание⁡ ​‌‌‍⁡⁣⁣⁢пирамиды⁡​ ⁡⁣⁢⁢из⁡ ⁡⁣⁣​‌‌‍⁡⁣⁣⁢'*'⁡​

let lines = 10;
let star = "";

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

//⁡⁣⁢⁢Создайте функцию, которая будет вычислять объем и площадь полной поверхности куба (тоже базовая математика, иногда используется в создании анимаций). Эта функция принимает в себя целое число со значением длины ребра куба. Ответ выведите в формате строки, который изображен в примерах.⁡
//⁡⁣⁢⁢Если в функцию попал неправильный аргумент или вычислить значения невозможно - вернуть строку "При вычислении произошла ошибка"⁡

function calculateVolumeAndArea(num) {
  let volume = num ** 3;
  let area = 6 * num ** 2;
  if (typeof num != "number" || num <= 0 || !Number.isInteger(num)) {
    return "При вычислении произошла ошибка";
  }
  return `Объем куба: ${volume}, площадь всей поверхности: ${area}`;
}

console.log(calculateVolumeAndArea(5));

//⁡⁣⁢⁢Напишите функцию, которая будет определять номер купе по переданному ей номеру места. Наглядно:⁡
/* ⁡⁣⁢⁢Функция принимает только целое число от 1 до 36.Если переданный аргумент не число, отрицательное или дробное - возвращается сообщение:⁡
⁡⁢⁢⁣"Ошибка. Проверьте правильность введенного номера места"⁡
⁡⁣⁢⁢Если число 0 или больше 36, то сообщение:⁡ ⁡⁢⁢⁣"Таких мест в вагоне не существует"⁡ */

function compartment(num) {
  if (
    typeof num != "number" ||
    typeof num == "string" ||
    !Number.isInteger(num)
  ) {
    return "Ошибка. Проверьте правильность введенного номера места";
  } else if (num == 0 || num < 0 || num > 36) {
    return "Таких мест в вагоне не существует";
  } else {
    for (let i = 4; i <= 36; i = i + 4) {
      if (num <= i) {
        return Math.ceil(i / 4);
      }
    }
  }
}

console.log(compartment(33));

// ⁡⁣⁢⁢Замыкание, пример с счетчиком⁡

function createCounter() {
  let counter = 0;

  const myFunction = function () {
    counter = counter + 1;
    return counter;
  };

  return myFunction;
}

const increment = createCounter();
const c1 = increment();
const c2 = increment();
const c3 = increment();

console.log(c1, c2, c3);

//⁡⁣⁢⁢Создайте функцию, которая принимает в себя целое число минут и ⁡⁣⁣⁢возвращает время в нужном формате строки⁡⁣⁢⁢. (Смотри пример). Обратите внимание на окончание слова "час" - оно меняется в зависимости от цифры. Если вместо аргумента приходит не число, дробное или отрицательное число - функция возвращает строку "Ошибка, проверьте данные"⁡

function getTimeFromMinutes(minutesTotal) {
  if (
    typeof minutesTotal !== "number" ||
    minutesTotal < 0 ||
    !Number.isInteger(minutesTotal)
  ) {
    return "Ошибка, проверьте данные";
  }

  const hours = Math.floor(minutesTotal / 60);
  const minutes = minutesTotal % 60;

  let hoursStr = "";

  switch (hours) {
    case 0:
      hoursStr = "часов";
      break;
    case 1:
      hoursStr = "час";
      break;
    case 2:
    case 3:
    case 4:
      hoursStr = "часа";
      break;
    default:
      hoursStr = "часов";
  }

  return `Это ${hours} ${hoursStr} и ${minutes} минут`;
}
getTimeFromMinutes(180);

//⁡⁢⁢⁣Здесь объект счётчика создан с помощью функции-конструктора.(Несомненно, он отлично будет работать.Обе вложенные функции были созданы с одним и тем же внешним лексическим окружением, так что они имеют доступ к одной и той же переменной count)⁡

function Counter() {
  let count = 0;

  this.up = function () {
    return ++count;
  };

  this.down = function () {
    return --count;
  };
}

let counter = new Counter();

alert(counter.up()); // 1
alert(counter.up()); // 2
alert(counter.down()); // 1

//⁡⁢⁢⁣Напишите функцию sum, которая работает таким образом: sum(a)(b) = a+b.⁡

function sum(a) {
  return function (b) {
    return a + b; // берёт "a" из внешнего лексического окружения
  };
}
console.log(sum(1)(2));

// ​‌‌‍⁡⁣⁢⁢рекурсия⁡​

function pow(x, n) {
  let result = 1;

  for (let i = 0; i < n; i++) {
    result *= x;
  }
  return result;
}

function Npow(x, n) {
  if (n === 1) {
    return x;
  } else {
    return x * Npow(x, n - 1);
  }
}

console.log(pow(2, 2));
console.log(Npow(2, 5));

// ​‌‌‍⁡⁣⁢⁢Факториал⁡​

function factorial(num) {
  if (num <= 0) {
    return 1;
  } else {
    if (!Number.isInteger(num) || typeof num != "number") {
      return "Введите цело число";
    } else {
      return num * factorial(num - 1);
    }
  }
}

console.log(factorial(5));

/* ⁡⁢⁢⁣Задание:

В каждой книге есть n страниц с номерами страниц от 1 до n. Написать функцию amountOfPages, аргумент которой summary составляется путем сложения количества цифр всех номеров страниц. Эта функция возвращает число - количество страниц n в книге. Чтобы было понятно что такое количество цифр, давайте рассмотрим примеры.

Пример:

Если на входе функции summary = 25, то на результат должен быть 17. Всего в числах от 1 до 17 содержится 25 цифр: 1234567891011121314151617.

Функция на вход как раз принимает это общее количество цифр, а возвращает конечное число, то есть последнюю страницу книги.⁡ */

function amountOfPages(summary) {
  let result = "";
  let n = 0;

  for (let i = 1; i <= summary; i++) {
    result += i;
    if (result.length === summary) {
      n = i;
      break;
    }
  }

  return n;
}
amountOfPages(25);

/* ⁡⁢⁢⁣Задание:

Панграмма — это предложение, в котором каждая буква алфавита встречается хотя бы по одному разу без повторений. Например, предложение «The quick brown fox jumps over the lazy dog» является панграммой, поскольку в нем хотя бы один раз используются буквы от A до Z (регистр значения не имеет).

Напишите функцию isPangram, которая принимает в себя строку и возвращает логическое значение. Если строка является панграммой - вернется true, если нет - false.⁡ */

function isPangram(string) {
  string = string.toLowerCase();
  return "abcdefghijklmnopqrstuvwxyz".split("").every(function (x) {
    return string.indexOf(x) !== -1;
  });
}

//⁡⁣⁢⁢работа с датами⁡
function data() {
  let date = new Date(),
    hour = date.getHours(),
    minutes = date.getMinutes(),
    sec = date.getSeconds(),
    day = date.getDate(),
    NumbOfDay = date.getDay(),
    month = date.getMonth(),
    year = date.getFullYear();

  function now(day) {
    let days = [
      "sunday",
      "monday",
      "tuesday",
      "wednesday",
      "thursday",
      "friday",
      "saturday",
    ];
    return days[day];
  }

  alert(now(NumbOfDay));
}

// ⁡⁣⁢⁢Узнать старую дату⁡

function oldDate() {
  let oldDate = new Date(2015, 0, 7);
  let thatDay = oldDate.getDay();

  function now(day) {
    let days = [
      "sunday",
      "monday",
      "tuesday",
      "wednesday",
      "thursday",
      "friday",
      "saturday",
    ];
    return days[day];
  }

  alert(now(thatDay));
}

//⁡⁣⁢⁢Вывести текущий месяц⁡

let months = [
  "янв",
  "фев",
  "мар",
  "апр",
  "май",
  "июн",
  "июл",
  "авг",
  "сен",
  "окт",
  "ноя",
  "дек",
];
let date = new Date();
let month = date.getMonth();
alert(months[month]);

// ⁡⁣⁢⁢Сделать таймер с двумя кнопками(старт таймера(она будет и запускать с того же места))⁡

let inputStart = document.querySelector("#start"),
  inputEnd = document.querySelector("#end"),
  div = document.querySelector("#div");

inputStart.addEventListener("click", () => {
  function start() {
    div.textContent = parseInt(div.textContent) + 1;
  }
  let time = setInterval(start, 1000);

  inputEnd.addEventListener("click", () => {
    let end = clearInterval(time);
  });
});

// ⁡⁣⁢⁢Таймер с выведением текущего времени⁡

function timer() {
  let pTimer = document.querySelector("#timer");

  function time() {
    const date = new Date();
    let hour = date.getHours(),
      minutes = date.getMinutes(),
      sec = date.getSeconds();

    function getZero(num) {
      if (num >= 0 && num < 10) {
        return `0${num}`;
      } else {
        return num;
      }
    }

    pTimer.textContent = `${getZero(hour)}:${getZero(minutes)}:${getZero(sec)}`;
  }
  let timer = setInterval(time, 1000);
}

// ⁡⁣⁢⁢тайме с отсчетом в обратную сторону⁡

function ti() {
  let timer = document.querySelector("#timer"),
    endTime = document.querySelector("#timerEnd"),
    startTimer = document.querySelector("#tap");

  endTime.style.display = "none";

  startTimer.addEventListener("click", () => {
    function start() {
      let value = parseInt(timer.textContent);

      if (value == 0) {
        endTime.style.display = "block";
        clearInterval(star);
      } else {
        timer.textContent = value - 1;
      }
    }
    let star = setInterval(start, 500);
  });
}

// ⁡⁣⁢⁢простой слайдер через таймер⁡

function sl() {
  let imgs = ["img/1.png", "img/2.png", "img/3.png"];
  let slider = document.querySelector("#slider");
  let img = slider.querySelector("img");

  img.src = imgs[0];
  let i = 1;
  let timer = setInterval(function () {
    img.src = imgs[i];

    i++;

    if (i == imgs.length) {
      i = 0;
    }
  }, 1000);
}

// ⁡⁣⁢⁢мой слайдер на 3 картинки⁡
//⁡⁢⁣⁢HTML⁡
{
  /* <div class="slider">
<img src="">
<img src="">
<img src="">
</div> */
}
function ebanina() {
  let wrapper = document.querySelector(".slider"),
    img = wrapper.querySelectorAll("img"),
    tap = document.querySelector(".tap");

  function slide() {
    for (let i = 0; i < img.length; i++) {
      img[i].src = `img/${i + 1}.png`;
      if (i == 3) {
        break;
      }
    }
  }
  slide();

  function nextSlide() {
    function first() {
      img[0].src = `img/${2}.png`;
      img[1].src = `img/${3}.png`;
      img[2].src = `img/${1}.png`;
    }
    function ssecond() {
      img[0].src = `img/${3}.png`;
      img[1].src = `img/${1}.png`;
      img[2].src = `img/${2}.png`;
    }
    function third() {
      img[0].src = `img/${1}.png`;
      img[1].src = `img/${2}.png`;
      img[2].src = `img/${3}.png`;
    }
    let f = setTimeout(first, 500);
    let g = setTimeout(ssecond, 1000);
    let a = setTimeout(third, 1500);
  }

  tap.addEventListener("click", () => {
    let timer = setInterval(nextSlide, 1500);
  });
}

// ⁡⁢⁢⁣Работа с⁡ ⁡⁢⁣⁢this⁡

function User(name, id) {
  this.name = name;
  this.id = id;
  this.human = true;
  this.hello = function () {
    console.log(`Hello ${this.name}`);
  };
}

User.prototype.exit = function () {
  console.log(`User ${this.name} left`);
};

const ivan = new User("Ivan", 28);
const alex = new User("Alex", 20);

ivan.exit();

ivan.hello();
alex.hello();

console.log(ivan, alex);

/* function getSum(a, b) {
  function sum() {
      console.log(this.a);
      return a + b;
  }

  console.log(sum());
}

getSum(4, 5); */

// ⁡⁢⁢​‌‌‌⁡⁢⁢⁣JSON⁡​⁡

function json() {
  const user = {
    name: "Ivan",
    tel: "+38098383838",
  };

  console.log(JSON.stringify(user)); // переводит для работы с сервером
  console.log(JSON.parse(JSON.stringify(user))); // переделывает то, что должно прийти с сервера
}

// ⁡⁢⁢⁣Создание глубокой копии⁡

function clone() {
  const user = {
    name: "Ivan",
    tel: "+38098383838",
    parent: {
      mom: "Ann",
      dad: "Mike",
    },
  };

  const clone = JSON.parse(JSON.stringify(user));
}

// ⁡⁢⁢⁣Методы перебора массивов⁡

function methods() {
  // Задачи:

  // 1) У вас есть список фильмов с рейтингом в виде массива объектов. Напишите функцию showGoodFilms, которая будет принимать этот массив, а возвращать будет массив объектов только с теми фильмами, у которых рейтинг больше или равен 8.
  // P.S. Это довольно типичная задача в программировании. Вспомните, на самых разных сайтах можно так фильтровать любые товары/фильмы/сериалы...

  // 2) Напишите функцию showListOfFilms, которая будет принимать этот же массив, а возвращать будет строку, которая содержит названия фильмов через запятую.
  // Пример:
  // showListOfFilms(films) => "Titanic, Die hard 5, Matrix, Some bad film"

  // 3) Напишите функцию setFilmsIds, которая будет принимать этот же массив, а возвращать будет такой же массив с фильмами, но у каждого фильма будет новое поле id. Значение этого поля установите по нумерации фильма.
  // Пример:
  // setFilmsIds(films)  => [   { name: 'Titanic', rating: 9, id: 0 },   { name: 'Die hard 5', rating: 5, id: 1 },   { name: 'Matrix', rating: 8, id: 2 },   { name: 'Some bad film', rating: 4, id: 3 } ]

  // 4) Запишите результат предыдущей функции в переменную tranformedArray. Напишите функцию checkFilms, которая будет проверять, что в каждом из фильмов есть поле id. Если это так - функция возвращает true. Очевидно, что сейчас условие должно выполняться, если мы передаем checkFilms(tranformedArray); :)

  // P.S. Вот тут вы столкнетесь с интересным моментом, который я хочу, чтобы вы запомнили. Внимательно проследите за тем, что происходит внутри коллбэка и что будет проверяться. Дополнительно расписал этот момент в комментариях в ответах.

  const films = [
    {
      name: "Titanic",
      rating: 9,
    },
    {
      name: "Die hard 5",
      rating: 5,
    },
    {
      name: "Matrix",
      rating: 8,
    },
    {
      name: "Some bad film",
      rating: 4,
    },
  ];

  // function showGoodFilms(arr) {
  //     return arr.filter(film => film.rating >= 8);
  // }
  // console.log(showGoodFilms(films));

  // function showListOfFilms(arr) {
  //     return arr.map(film => film.name).reduce((sum, current) => `${sum}, ${current}`);
  // }
  // console.log(showListOfFilms(films));

  function setFilmsIds(arr) {
    return arr.map((film, i) => {
      film.id = i;
      return film;
    });
  }

  const tranformedArray = setFilmsIds(films);

  function checkFilms(arr) {
    return arr.every((film) => film.id || film.id === 0);
    // return arr.every(film => film.id || film.id === 0 ? true : false);
  }
  console.log(checkFilms(films));
}

// ⁡⁢⁢⁣Вторая звдвча на Методы перебора массивов⁡

function methods() {
  // Задачи:

  // 1) У вас есть небольшой массив с данными о доходах каждой торговой точки. Напишите функцию getPositiveIncomeAmount, которая принимает этот массив данных и возвращает сумму только положительных значений из каждого объекта. (число)
  // Пример:
  // getPositiveIncomeAmount(funds) => 13300

  // 2) Напишите функцию getTotalIncomeAmount, которая тоже принимает этот массив данных. Если хотя бы один из объектов содержит отрицательное значение поля amount, то функция возвращает сумму всех значений. (число) Если таких значений нет - запускается функция getPositiveIncomeAmount с тем же массивом данных.
  // Пример:
  // getTotalIncomeAmount(funds) => -500

  const funds = [
    { amount: -1400 },
    { amount: 2400 },
    { amount: -1000 },
    { amount: 500 },
    { amount: 10400 },
    { amount: -11400 },
  ];

  const getPositiveIncomeAmount = (data) => {
    return data
      .filter((item) => item.amount > 0)
      .reduce((sum, current) => sum + current.amount, 0);
  };
  console.log(getPositiveIncomeAmount(funds));

  const getTotalIncomeAmount = (data) => {
    return data.some((item) => item.amount < 0)
      ? data.reduce((sum, current) => sum + current.amount, 0)
      : getPositiveIncomeAmount(data);
  };
  getTotalIncomeAmount(funds);
}

//⁡⁣⁢⁢Даны картинки. Привяжите к каждой картинке событие, чтобы по клику на картинку алертом выводился ее src⁡

function src() {
  const slider = document.querySelector(".slider"),
    img = document.querySelectorAll("img");

  img.forEach((el) => {
    el.addEventListener("click", () => alert(el.getAttribute("src")));
  });
}

//⁡⁣⁢⁢Даны ссылки. Привяжите всем ссылкам событие - по наведению на ссылку в атрибут title запишется ее текст.⁡

function writeTitleLink() {
  const slider = document.querySelector(".slider"),
    links = slider.querySelectorAll("a");

  links.forEach((el) => {
    el.addEventListener("mouseover", function () {
      this.title = this.href;
    });
  });
}

//⁡⁣⁢⁢Дополните предыдущую задачу: после первого наведению на ссылку следует отвязать от нее событие, которое добавляет href в конец текста⁡

function addBefore() {
  const slider = document.querySelector(".slider"),
    links = slider.querySelectorAll("a");

  links.forEach((el) => {
    el.addEventListener("mouseover", function my() {
      this.innerHTML += ` (${this.href}) `;
      this.removeEventListener("mouseover", my);
    });
  });
}

//⁡⁣⁢⁢Привяжите всем инпутам следующее событие - по потери фокуса каждый инпут выводит свое value в абзац с id="test"⁡

function mouseout() {
  const input = document.querySelectorAll("input"),
    paragraph = document.querySelector("#test");

  input.forEach((item) => {
    item.addEventListener("mouseout", function out() {
      paragraph.innerHTML = this.value;
    });
  });
}

// ⁡⁣⁢⁢Для всех инпутов сделайте так, чтобы они выводили свой value алертом при нажатии на любой из них, но только по первому нажатию. Повторное нажатие на инпут не должно вызывать реакции.⁡

function mouseClick() {
  const input = document.querySelectorAll("input");

  input.forEach((item) => {
    item.addEventListener("click", function out() {
      alert(this.value);
      this.removeEventListener("click", out);
    });
  });
}

//⁡⁣⁢⁢Даны абзацы с числами. По нажатию на абзац в нем должен появится квадрат числа, которое он содержит⁡

function square() {
  const input = document.querySelectorAll("p");

  input.forEach((item) => {
    item.addEventListener("mouseover", function () {
      this.innerHTML = this.innerHTML * this.innerHTML;
    });
  });
}

//⁡⁣⁢⁢Даны инпуты. Сделайте так, чтобы все инпуты по потери фокуса проверяли свое содержимое на правильное количество символов. Сколько символов должно быть в инпуте, указывается в атрибуте data-length. Если вбито правильное количество, то граница инпута становится зеленой, если неправильное - красной⁡
//HTML
//    <input type="text" data-length="4" />
//<input type="text" data-length="7" />
//<input type="text" data-length="9" />

function borderColor() {
  const input = document.querySelectorAll("input");

  input.forEach((item) => {
    item.addEventListener("blur", function () {
      this.value.length <= this.dataset.length
        ? (item.style.borderColor = "green")
        : (item.style.borderColor = "red");
    });
  });
}

//⁡⁣⁢⁢Даны дивы. По первому нажатию на каждый див он красится красным фоном, по второму красится обратно и так далее каждый клик происходит чередование фона. Сделайте так, чтобы было две функции: одна красит в красный цвет, другая в зеленый и они сменяли друг друга через removeEventListener⁡

function changeColorDiv() {
  const div = document.querySelectorAll("div");

  div.forEach((item) => {
    item.addEventListener("mouseover", function () {
      this.style.backgroundColor === "white"
        ? (this.style.background = "red")
        : (this.style.background = "white");
    });
  });
}

// ⁡⁣⁢⁢Дан элемент #elem. Найдите его соседа снизу его соседа снизу (следующий элемент за соседним) и добавьте ему в конец текст '!'.⁡

function nextElementSibling() {
  const before = document.querySelector("#before");

  before.nextElementSibling.nextElementSibling.insertAdjacentHTML(
    "beforeend",
    "!"
  );
}

// ⁡⁣⁢⁢Дан массив. Создайте ul через createElement, затем вставьте каждый элемент этого массива в отдельную li внутри этой ul, затем вставьте эту ul в конец body.⁡

function createElement() {
  const button = document.querySelector("button");

  const arr = ["First", "Second", "Third", "Four", "Five"];

  button.addEventListener("click", () => {
    let ul = document.createElement("ul");
    arr.forEach((item) => {
      let li = document.createElement("li");
      li.append(item);
      ul.append(li);
    });
    document.body.appendChild(ul);
  });
}

//⁡⁣⁢⁢Дан инпут. В него вводится число. По потери фокуса сделайте так, чтобы каждая цифра вставилась в новый инпут. Инпутов для цифр изначально не существует, они должны создаться в процессе работы скрипта.⁡

function blurInput() {
  const input = document.querySelector("input");

  input.addEventListener("blur", () => {
    let newInp = input.cloneNode(true);
    newInp.style.cssText = "display: block; margin-top: 10px";
    document.body.append(newInp);
  });
}

//⁡⁣⁢⁢Дан элемент #elem. По клику на него увеличьте его ширину 3 раза⁡

function width() {
  let element = document.querySelector(".element"),
    button = document.querySelector("button");

  button.addEventListener("click", () => {
    element.style.width = element.scrollWidth * 3 + "px";
  });
}

// ⁡⁣⁢⁢Координаты мыши по ⁡⁢⁣⁣X Y⁡⁡

{
  const body = document.querySelector(".body");

  body.addEventListener("mousemove", (e) => {
    body.innerHTML = `X: ${e.clientX} Y: ${e.clientY}`;
  });
}

//⁡⁣⁢⁢вводите текст в инпут и по мере ввода вы будете видеть код нажатой клавиши и саму клавишу:⁡

{
  const input = document.querySelector("input");
  let val = document.querySelector(".val");

  input.addEventListener("keyup", (e) => {
    input.value = "";
    val.innerHTML = `Это клавиша: ${e.key}, её код: ${e.keyCode}`;
  });
}

// ⁡⁣⁢⁢квадрат путешествует по всему окну, где кликнешь⁡

{
  let box = document.querySelector(".box");

  window.addEventListener("click", (e) => {
    box.style.left = e.clientX - 6 + "px";
    box.style.top = e.clientY - 50 + "px";
  });
}

//⁡⁣⁢⁢Дан элемент. Сделайте так, чтобы по клику на него он красился в красный цвет, но только если в момент клика нажата клавиша⁡ ⁡⁣⁣⁢Ctrl⁡.

{
  let box = document.querySelector(".box");

  box.addEventListener("click", (e) => {
    e.ctrlKey === true
      ? (box.style.background = "red")
      : (box.style.background = "blue");
  });
}

//⁡⁣⁢⁢Дан элемент. Сделайте так, чтобы при клике на него и нажатой клавише ⁡⁣⁣⁢Ctrl⁡ ⁡⁣⁢⁢- в его текст записывалось '1', при нажатой клавише⁡ ⁡⁣⁣⁢Alt⁡ ⁡⁣⁢⁢- '2', а при нажатой клавише ⁡⁡⁣⁣⁢Shift⁡ ⁡⁣⁢⁢- '3'.⁡

{
  let element = document.querySelector(".element");

  element.addEventListener("click", (e) => {
    if (e.altKey === true) {
      element.innerHTML = "2";
    } else if (e.ctrlKey === true) {
      element.innerHTML = "1";
    } else if (e.shiftKey === true) {
      element.innerHTML = "3";
    } else {
      element.innerHTML = "Нажми на Ctrl, Alt, Shift";
    }
  });
}

// Дан инпут. В него вводится текст и нажимается клавиша Enter (ее код имеет номер 13). Сделайте так, чтобы по нажатию Enter введенный текст попадал в абзац под инпутом, а содержимое инпута очищалось.

{
  let input = document.querySelector("input"),
    p = document.querySelector("p");

  input.addEventListener("keydown", (e) => {
    if (e.code === "Enter") {
      p.innerHTML = input.value;
      input.value = "";
    }
  });
}

//⁡⁣⁢⁢Дана таблица с юзерами с двумя колонками: имя и фамилия. Под таблицей сделайте форму, с помощью которой можно будет добавить нового юзера в таблицу. Сделайте так, чтобы при клике на любую ячейку появлялся prompt, с помощью которого можно изменить текст ячейки. Задачу решите с помощью делегирования (то есть событие должно быть навешано на table).⁡

{
  let user = document.querySelector(".user"),
    input = document.querySelector("input");

  input.addEventListener("keydown", (e) => {
    if (e.code === "Enter") {
      let li = document.createElement("li");
      li.innerHTML = input.value;
      user.insertAdjacentElement("beforeend", li);

      let newBtn = function () {
        let button = document.createElement("button");
        button.innerHTML = "Remove";
        li.insertAdjacentElement("beforeend", button);
        button.addEventListener("click", (e) => {
          e.target.closest("li").remove();
          li.removeEventListener("click", newList);
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
}

// ⁡⁣⁢⁢На странице расположено несколько форм. В них есть инпуты, в инпутах числа. Дана кнопка. По нажатию на эту кнопку циклом переберите все формы на странице, затем циклом переберите все инпуты в каждой форме и найдите сумму чисел из всех этих инпутов.⁡

{
  const button = document.querySelector("button");

  button.addEventListener("click", (e) => {
    e.preventDefault();
    let count = [];
    let result = 0;
    const form = document.querySelectorAll("form");
    form.forEach((elem) => {
      const input = elem.querySelectorAll("input");
      input.forEach((item) => {
        count.push(+item.value);
      });
    });
    for (let i = 0; i < count.length; i++) {
      result += count[i];
    }
    alert(result);
  });
}

// ⁡⁣⁢⁢Дан селект. Дан инпут. По изменению селекта выведите текст выбранного пункта в инпут.⁡

{
  let select = document.querySelector("select"),
    input = document.querySelector("input");

  select.addEventListener("change", () => (input.value = select.value));
}

// ⁡⁣⁢⁢Дан селект. Дан инпут. Дана кнопка. Сделайте так, чтобы в инпут можно было ввести число, нажать на кнопку и в селекте становился выбранным пункт с⁡ ⁡⁣⁢⁢этим номером.⁡

{
  let select = document.querySelector("select"),
    input = document.querySelector("input"),
    button = document.querySelector("button");

  button.addEventListener("click", () => {
    select.selectedIndex = +input.value - 1;
  });
}

//⁡⁣⁢⁢Дан селект со списком стран. Сделайте так, чтобы при выборе страны рядом появлялся еще и селект со списком городов из этой страны.⁡

function countries() {
  let countriesSelect = document.querySelector("#countries-select"),
    citiesSelect = document.querySelector("#cities-select");

  const data = {
    Ukraine: ["Kharkiv", "Kyiv", "Lviv"],
    Canada: ["Ottava", "Toronto", "Cambridge"],
    UK: ["London", "Oxford", "Liverpul"],
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
}

//⁡⁣⁢⁢Даны 3 селекта: с днем, с месяцем и годом. Сделайте так, чтобы некорректную дату нельзя было выбрать.⁡

function data() {
  let yearSelect = document.querySelector("#year-select"),
    monthSelect = document.querySelector("#month-select"),
    daySelect = document.querySelector("#day-select");

  let date = new Date(),
    currentYear = date.getFullYear(),
    currentMonth = date.getMonth() + 1,
    currentDay = date.getDate();

  fillSelect(yearSelect, range(currentYear - 10, currentYear + 10));
  fillSelect(monthSelect, range(1, 12));
  fillSelect(daySelect, range(1, 31));

  yearSelect.value = currentYear;
  monthSelect.value = currentMonth;
  daySelect.value = currentDay;

  yearSelect.addEventListener("change", selectChangeHandle);
  monthSelect.addEventListener("change", selectChangeHandle);
  daySelect.addEventListener("change", selectChangeHandle);

  yearSelect.addEventListener("focus", selectFocusHandle);
  monthSelect.addEventListener("focus", selectFocusHandle);
  daySelect.addEventListener("focus", selectFocusHandle);

  function selectChangeHandle() {
    if (checkkDate(yearSelect.value, monthSelect.value, daySelect.value)) {
    } else {
      this.value = this.dataset.default;
    }
  }

  function selectFocusHandle() {
    this.dataset.default = this.value;
  }

  function fillSelect(select, arr) {
    arr.forEach(function (elem) {
      select.add(new Option(elem));
    });
  }

  function range(from, to) {
    let result = [];

    for (let i = from; i <= to; i++) {
      result.push(i);
    }

    return result;
  }

  function checkkDate(year, month, day) {
    let date = new Date(year, month - 1, day);
    return (
      date.getFullYear() == year &&
      date.getMonth() == month - 1 &&
      date.getDate() == day
    );
  }
}
