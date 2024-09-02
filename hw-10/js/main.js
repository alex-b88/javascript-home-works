//- Створити довільний елемент з id = text та створити кнопку.Використовуючи JavaScript, зробіть так,
// щоб при натисканні на кнопку зникав елемент з id="text".

function hideText (){
    let myBlock = document.getElementById("text");
    myBlock.style.display = "none";
}

//- створити інпут який приймає вік людини та кнопку яка підтверджує дію.При натисканні на кнопку зчитати
// інформацію з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача

function submitAge () {
    let age = document.getElementById("ageField").value;
    if (age < 18){
        document.getElementById("ageField").value = "Your age is under 18";
        document.getElementById("ageField").style.border = "1px solid red";
    }
    else if(age > 18){
        document.getElementById("ageField").value = "Your age is over 18";
        document.getElementById("ageField").style.border = "1px solid green";
    }
    else{
        document.getElementById("ageField").value = "Enter a digit";
        document.getElementById("ageField").style.border = "1px solid red";
    }

    setTimeout(()=>{
        document.getElementById("ageField").value = "";
        document.getElementById("ageField").style.border = "";
    }, 2000)
}

//Стоврити форму з трьома полями для name,sruname,age та кнопкою. При натисканні на кнопку зчитати данні з полів,
// та вивести об'єкт в документ. Іншими словами : заповниои форму, натиснули кнопку, під формою з'явився блок з вашим об'єктом

let form1 = document.forms.form1;
form1.addEventListener('submit', (eventObject) =>{
    eventObject.preventDefault();
    console.log(form1.elements['name'].value);
    createBlock(form1.elements['name'].value, form1.elements['surname'].value, form1.elements['age'].value);
})

function createBlock(name, surname, age){
    let div = document.createElement("div");
    div.classList.add("entred-data");
    div.innerHTML = `
        <p>Name: ${name}</p>
        <p>Surname: ${surname}</p>
        <p>Age: ${age}</p>
    `;
    form1.insertAdjacentElement('afterend', div);
}

//є сторінка, на якій є блок, я кому знаходиьтся цифра. написати код, який при кожному перезавантажені сторінки
// буде додавати до неї +1
document.addEventListener('DOMContentLoaded', ()=>{
    let reloads = localStorage.getItem('reloads') || 0;
    let reloadCounter = document.getElementById('counter');
    reloadCounter.innerText = reloads;
    localStorage.setItem('reloads', ++reloads);
})

//Є сторінка index.html (назва довільна), при відвідуванні якої в локальне сховще, в масив sessionsList зберігається
// інформація про дату та час відвідування сторінки. Є  сторінка sessionsListPage.html (назва довільна), при відвідуванні якої потрібно відмалювати всю інформацію про відвідування сторінки index.html. Інфу НЕ виводити в консоль, а малювати в DOM
    document.addEventListener('DOMContentLoaded', ()=>{
        let sessionsList = JSON.parse(localStorage.getItem('sessions')) || [];
        sessionsList.push(getCurrentTime());
        localStorage.setItem('sessions', JSON.stringify(sessionsList));
    })

function getCurrentTime() {
    let nowTime = new Date();
    const hours = nowTime.getHours().toString().padStart(2, '0');
    const minutes = nowTime.getMinutes().toString().padStart(2, '0');
    const seconds = nowTime.getSeconds().toString().padStart(2, '0');
    return `${hours}:${minutes}:${seconds}`;
}

//створити конвертор ваги з кг в фунти. данні заповнюються через інпут. При введенні даних обрахунок стається миттєво,
// без натискань додаткових кнопок

let form2 = document.forms.form2;
let inputKg = form2.querySelector('input[name="kg"]');


inputKg.addEventListener('input', (event) => {
    const pounds = document.querySelector('.form2 .equals');
    pounds.innerText = `${(inputKg.value*2.2).toFixed(2)} pounds`;
})

//В localStorage зберігаються масиви. Вам потрібно зробити функцію, які дістає потрібний вам масив з localStorage та додає
// в нього об'єкт сигнатура функції -
// addToLocalStorage(arrayName:string,objToAdd:any{}):void

function addToLocalStorage(arrayName, obj){
    let array = JSON.parse(localStorage.getItem(arrayName)) || [];
    array.push(obj);
    localStorage.setItem(arrayName, JSON.stringify(array));
}
let client ={
    name: 'elvis',
    surname: 'prestly'
}

addToLocalStorage('arrayList', '5');
addToLocalStorage('arrayList', -4);
addToLocalStorage('arrayList', true);
addToLocalStorage('arrayList', client);
addToLocalStorage('arrayList', false);

// Створити 3 інпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
// При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.

let form3 = document.forms.form3;
form3.addEventListener('submit', (eventObject) =>{
    eventObject.preventDefault();
    let table = document.createElement('table');
    table.classList.add('table1');
    let rows = form3.elements['horizontal'].value;
    let colums = form3.elements['vertical'].value;
    let data = form3.elements['data'].value;
    console.log(rows, colums, data);
    for (let i = 0; i < colums; i++) {
        let row = document.createElement('tr');
            for (let j = 0; j < rows; j++) {
                let cell = document.createElement('td');
                cell.innerText = data;
                row.appendChild(cell);
            }
        table.appendChild(row);
    }
    document.body.appendChild(table);
})