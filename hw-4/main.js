//check for type
function isNumber(value) {
    return typeof value === 'number';
}

//- створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
function rectSquare(sidA, sideB){
    if(isNumber(sidA) && isNumber(sideB) && sidA>0 && sideB>0){
        return sidA*sideB;
    }
}

//- створити функцію яка обчислює та повертає площу кола з радіусом r
function circleSquare(radius){
    if(isNumber(radius && radius>0)){
        return Math.PI * radius**2;
    }
}

//- створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
function cylinderSquare(radius, height){
    if(isNumber(radius) && isNumber(height) && radius>0 && height>0){
        return 2 * Math.PI * radius * (radius + height);
    }
}

//- створити функцію яка приймає масив та виводить кожен його елемент
function showArray(arr){
    if(Array.isArray(arr) && arr.length>0){
        for (const item of arr) {
            console.log(item);
        }
    }
}

//- створити функцію яка створює параграф з текстом та виводить його через document.write. Текст задати через аргумент
text = "Hello world!";
function textWithP(arg){
    document.write(`<p>${arg}</p>`);
}
textWithP(text);

//- створити функцію яка створює ul з трьома елементами li та виводить його через document.write. Текст li задати через аргумент всім однаковий
function textWithUl(arg){
    document.write(`<ul>
    <li>${arg}</li>
    <li>${arg}</li>
    <li>${arg}</li></ul>`);
}
textWithUl("Some Text");

//- створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом,
// який є числовим (тут використовувати цикл) та виводить його через document.write
function textWithUlSecond(arg, count){
    if(isNumber(count) && count>0){
        document.write(`<ul>`);
        for(let i=0; i<count; i++) {
            document.write(`<li>${arg}</li>`);
        }
        document.write(`</ul>`);
    }
}
textWithUlSecond("hello", 10);

//- створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список (ul li) та виводить його через document.write
function showArray2(...arg){
    if(Array.isArray(arg) && arg.length>0){
        document.write(`<ul>`);
        for (const item of arg) {
            document.write(`<li>${item}</li>`);
        }
        document.write(`</ul>`);
    }
}
showArray2(4,6,8,true, false, -2, "hello", true, "five");

//- створити функцію яка приймає масив об'єктів з наступними полями id,name,age, та виводить їх в документ. Для кожного об'єкту окремий блок.
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
function showObjects(array){
    if(Array.isArray(array) && array.length > 0){
        document.write(`<ul>`);
        for(const item of array) {
            document.write(`<div><b>Id:</b> ${item.id}</div>`);
            document.write(`<div><b>Name:</b> ${item.name}</div>`);
            document.write(`<div><b>Age:</b> ${item.age}</div></br>`);
        }
        document.write(`</ul>`);
    }
}
showObjects(people);

//- створити функцію яка повертає найменьше число з масиву
const myArray = [
    'hello', 42, true, 3, null, 51, undefined, -10, { name: 'Alice', age: 30 }, 0, 'good', -25
];

function findMinInArray(arr){
    if(Array.isArray(arr) && arr.length > 0){
        let min;
        for(let i=0; i<arr.length; i++){
            if(isNumber(arr[i])){
                if (min === undefined || arr[i] < min) {
                    min = arr[i];
                }
            }
        }
        document.write(`<div>Min element: ${min}</div>`);
    }
}
findMinInArray(myArray);

//- створити функцію sum(arr) яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13
function sumArrayItems(arr){
    if(Array.isArray(arr) && arr.length>0)
    {
        let sum = 0;
        for (const item of arr) {
            if(isNumber(item)){
                sum+=item;
            }
        }
        document.write(`<div>Sum: ${sum}</div>`);
    }
}
sumArrayItems(myArray);

//- створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відповідних індексах
function swap(arr, index1, index2){
    if(Array.isArray(arr) && index1>=0 && index2>=0 && index1<arr.length && index2<arr.length){
        [arr[index1], arr[index2]] = [arr[index2], arr[index1]]; //метод из c# тут тоже работает
        console.log(arr);
    }
}
swap(myArray, 1,4);

//- Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
function exchange(sumUAH, currencyValues, exchangeCurrency){
    if(isNumber(sumUAH) && sumUAH>0 && Array.isArray(currencyValues) && currencyValues.length>0){
        let exchangeAmount =0;
        for(const obj of currencyValues){
            if(obj.currency === exchangeCurrency){
                exchangeAmount = sumUAH / obj.value;
            }
        }
        document.write(`<div>${exchangeAmount.toFixed(2)}</div>`)
    }
}
exchange(10000,[{currency:'USD',value:25},{currency:'EUR',value:42}],'USD');