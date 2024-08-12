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
    if(Array.isArray(arr)){
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
    if(isNumber(count)){
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
    if(Array.isArray(arg)){
        document.write(`<ul>`);
        for (const item of arg) {
            document.write(`<li>${item}</li>`);
        }
        document.write(`</ul>`);
    }
}
showArray2(4,6,8,true, false, -2, "hello", true, "five");

//- створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.