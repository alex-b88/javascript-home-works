// - Створити змінні. Присвоїти кожному з них значення: 'hello','owu','com', 'ua', 1, 10, -999, 123, 3.14, 2.7, 16, true, false.
//     Вивести кожну змінну за допомогою: console.log
//
// - Створити 3 змінних firstName, middleName, lastName, наповнити їх своїм ПІБ. З'єднати їх в одну змінну person (Не об'єкт, просто за допомоги конкатенації)
//
// - За допомогою оператора typeof визначити типи наступних змінних та вивести їх в консоль.
//     let a = 100; let b = '100'; let c = true;
//
// Додаткове для тих хто цікавився prompt`oм
// - За допомогою 3х різних prompt() отримати 3 слова які являються вашими Імям, По-Батькові та роками. та вивести в консоль

let word1 = 'hello'
console.log(word1);
let word2 = 'owu'
console.log(word2);
let word3 = 'com'
console.log(word3);
let word4 = 'ua'
console.log(word4);

let num1 = 1
console.log(num1);
let num2 = 10
console.log(num2);
let num3 = -999
console.log(num3);
let num4 = 123
console.log(num4);
let num5 = 3.14
console.log(num5);
let num6 = 2.7
console.log(num6);
let num7 = 16
console.log(num7);

let flag1 = true
let flag2 = false
console.log(flag1);
console.log(flag2);

let firstName = 'Oleksandr'
let middleName = 'Andreevich'
let lastName = 'Bak'
let space = ' '
let person = firstName + space + middleName+ space + lastName
console.log(person);

let a = 100;
let b = '100';
let c = true;

console.log(typeof a);
console.log(typeof b);
console.log(typeof c);

firstName = prompt("Enter your name");
lastName = prompt("Enter your last name");
let age = prompt("Enter your age");

console.log('Hello' + space + firstName + space +lastName + space + 'your age: '+ age);