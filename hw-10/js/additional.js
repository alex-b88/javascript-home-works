//*** (подібне було вище, але...будьте уважні в другій частині) створити сторінку з довільним блоком, в середині якого є значення "100грн"
// при перезавантаженні сторінки до значаення додається по 10грн, але !!!
//  зміна ціни відбувається тільки на перезавантаження, які відбулись пізніше ніж 10 секунд після попереднього.
//  При перезавантаженні, яке відбулось раніше ніж минуло 10 секунд - нічого не відбувається

document.addEventListener('DOMContentLoaded', () => {
    let summ = Number(localStorage.getItem('summ') || 100);
    let value = document.getElementsByClassName('nominal')[0];
    value.innerText = `${summ}`;
    setTimeout(()=>{
        summ = summ + 10;
        localStorage.removeItem('summ');
        localStorage.setItem('summ', summ);
    },10000)
});

//***PAGINATION
// зробити масив на 100 об'єктів та дві кнопки prev next
// при завантажені сторінки з'являються перші 10 об'єктів.
// При натисканні next виводяться наступні 10 об'єктів
// При натисканні prev виводяться попередні 10 об'єктів

let names = [
    'Alice', 'Bob', 'Charlie', 'David', 'Eve', 'Frank', 'Grace', 'Homer', 'Ivy', 'Jack',
    'Kathy', 'Leo', 'Mona', 'Nina', 'Oscar', 'Paul', 'Quinn', 'Robin', 'Sam', 'Tina',
    'Uma', 'Victor', 'Wendy', 'Xander', 'Yara', 'Zane', 'Aaron', 'Bella', 'Carl', 'Donna',
    'Eli', 'Fiona', 'George', 'Hannah', 'Isaac', 'Jill', 'Kevin', 'Lily', 'Mark', 'Nora',
    'Omar', 'Pam', 'Quentin', 'Rachel', 'Steve', 'Tracy', 'Ursula', 'Vince', 'Will', 'Xenia',
    'Yvonne', 'Zach', 'Alyssa', 'Brandon', 'Claire', 'Derek', 'Emily', 'Fred', 'Gabby', 'Henry',
    'Isabel', 'Jake', 'Karen', 'Lucas', 'Megan', 'Nathan', 'Olivia', 'Peter', 'Queen', 'Ron'
];

let myArray = [];
for (let i = 0; i < names.length; i++) {
    myArray.push({id: i+1, name: names[i]})
}
let btnPrev = document.getElementById('prev');
let btnNext = document.getElementById('next');
let arrayListDiv = document.getElementsByClassName('array-list')[0];
let existingDiv = arrayListDiv.querySelector('div');
let prev = 0;
let next = 0;

document.addEventListener('DOMContentLoaded', () => {
    for (let i = 0; i < 10; i++) {
        let p = document.createElement('p');
        p.innerHTML = `id: ${myArray[i].id}, name: ${myArray[i].name}`;
        arrayListDiv.insertBefore(p, existingDiv);
    }
    buttonsStatus(prev,next);
    next = 20;
    prev = 10;
})


function showNext(){
    clearTag();
    for (let i = prev; i < next; i++) {
        let p = document.createElement('p');
        p.innerHTML = `id: ${myArray[i].id}, name: ${myArray[i].name}`;
        arrayListDiv.insertBefore(p, existingDiv);
    }
    buttonsStatus(prev,next);
    console.log(`before plus: ${prev}-${next}`);
    next += 10;
    prev += 10;
    console.log(`after plus: ${prev}-${next}`);
    console.log(`=====================`);
}

function showPrev(){
    clearTag();
    // console.log(`before minus: ${prev}-${next}`);
    // next -= 10;
    // prev -= 10;
    console.log(`after minus: ${prev}-${next}`);
    for (let i = prev; i < next; i++) {
        let p = document.createElement('p');
        p.innerHTML = `id: ${myArray[i].id}, name: ${myArray[i].name}`;
        arrayListDiv.insertBefore(p, existingDiv);
    }
    buttonsStatus(prev,next);
}

function clearTag(){
    let pList = arrayListDiv.querySelectorAll('p');
    pList.forEach(p=>p.remove());
}

function buttonsStatus(prev, next){
    if(next === myArray.length){
        btnNext.disabled = true;
    }
    else{
        btnNext.disabled = false;
    }
    if(prev === 0){
        btnPrev.disabled = true;
    }
    else{
        btnPrev.disabled = false;
    }
}