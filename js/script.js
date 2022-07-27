'use strict';

 let str = '123456';

 function toRearrange(text) {
   let arr = text.split('');
   let arrNew = [];// сюда будем добавлять пары 21, 43 и т.д.

   for (let i = 0; i < arr.length; i += 2) { // нарезаем пары
     let temp = arr.slice(i, i + 2).reverse(); // маленький массив из очередных 2 элеметов, поменянных местами
     arrNew = arrNew.concat(temp); // push() тут не подходит
   }

 str = arrNew.join('');
 return str;
 }

console.log(toRearrange(str));