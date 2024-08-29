//check for type
const isNumber = value => typeof value === 'number';


//array
const myArray = [
    'hello', 42, true, 3, null, 51, undefined, -10, { name: 'Alice', age: 30 }, 0, 'good', -25
];

//- створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
const rectSquare = (sideA, sideB) => isNumber(sideA) && isNumber(sideB) ? sideA * sideB : undefined;

console.log(rectSquare(20,30));

//- створити функцію яка обчислює та повертає площу кола з радіусом r
const circleSquare = r => isNumber(r) ? Math.PI * r**2 : undefined;
console.log(circleSquare(10));

//- створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
const cylinderSquare = (radius, height) => isNumber(radius) && isNumber(height) ? 2 * Math.PI * radius * (radius + height) : undefined;
console.log(cylinderSquare(4,10));

//- створити функцію яка приймає масив та виводить кожен його елемент
const showArray = arr => {
    if(Array.isArray(arr)){
        for (const item of arr) {
            console.log(item);
        }
    }
}
showArray(myArray);

//- створити функцію яка створює параграф з текстом та виводить його через document.write. Текст задати через аргумент
let arg = "Hello world!";
const showArg = arg => document.write(`<p>${arg}</p>`)
showArg(arg);

//- створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
const showArg2 = arg => {
    document.write(`<ul>
        <li>${arg}</li>
        <li>${arg}</li>
        <li>${arg}</li>
    </ul>`)}
showArg2(arg);

//- створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий.
// Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
const showArg3 = (arg, i) => {
    document.write(`<ul>`);
    for (let j = 0; j < i; j++) {
        document.write(`<li>${arg}</li>`)
    }
    document.write(`</ul>`);
}
showArg3(arg, 10);

//- створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
const listMaker = arr => {
    document.write(`<ul>`);
    for (const obj of arr) {
        document.write(`<li>${obj}</li>`)
    }
}
listMaker(myArray);

//- створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
const people = [
    {
        id: 1,
        name: 'Alice',
        age: 30
    },
    {
        id: 2,
        name: 'Bob',
        age: 25
    },
    {
        id: 3,
        name: 'Charlie',
        age: 28
    },
    {
        id: 4,
        name: 'David',
        age: 24
    },
    {
        id: 5,
        name: 'Eve',
        age: 29
    }
];
const showObjects = obj => {
    for (const item of obj) {
        document.write(`<div>
        Id: ${item.id}, Name: ${item.name}, Age: ${item.age}; 
    </div>`);
    }
}
showObjects(people);

//- створити функцію яка повертає найменьше число з масиву
const findMin = arr => {
    let min;
    for (let i = 0; i < arr.length; i++) {
        if(isNumber(arr[i])){
            if (min === undefined || arr[i] < min) {
                min = arr[i];
            }
        }
    }
    document.write(`Min item: ${min}`);
}
findMin(myArray);

//- створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13
let myArrayOfNumbers = [45, 12, 78, 34, 23, 56, 90, 11, 2, 67, 33, 5, 100, 88, 41, 9, 66, 73, 28, 60];
const sumArrayItems = arr => {
    let sum = 0;
    for (const obj of arr) {
        sum+=obj;
    }
    document.write(`<div>Array items sum: ${sum}</div>`);
}
sumArrayItems(myArrayOfNumbers);

//- створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індексах
const mySwap = (arr, index1, index2) => {
    [arr[index1], arr[index2]] = [arr[index2], arr[index1]];
}
showArray(myArrayOfNumbers);
mySwap(myArrayOfNumbers, 0, 1);
showArray(myArrayOfNumbers);

//- Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
const exchange = (sumUAH, currencyValues, exchangeCurrency) => {
    let exchangeAmount =0;
    for(const obj of currencyValues){
        if(obj.currency === exchangeCurrency){
            exchangeAmount = sumUAH / obj.value;
        }
    }
    document.write(`<div>${exchangeAmount.toFixed(2)}</div>`)
}
exchange(10000,[{currency:'USD',value:25},{currency:'EUR',value:42}],'USD') 
