//- створити блок,
// - додати йому класи wrap, collapse, alpha, beta
// - додати стилі(довільні значення) : колір фону, колір тексту, розмір тексту
// - додати цей блок в body.
// - клонувати його повністю, та додати клон в body.


let div = document.createElement('div');
div.classList.add('wrap', 'collapse', 'alpha', 'beta');
div.classList.toggle('myStyle');
div.innerHTML = '<h2>Hello</h2>';
document.body.appendChild(div);
let div2 = div.cloneNode(true);
document.body.appendChild(div2);
console.log(div === div2);

//- Є масив:
// ['Main','Products','About us','Contacts']
// Зробити ul в середині якої будуть лежати елементи масиву (кожен в своєму li)
let arr = ['Main','Products','About us','Contacts'];
let ul = document.createElement('ul');
for (const obj of arr) {
    let li = document.createElement('li');
    li.innerText = obj;
    ul.appendChild(li);
}
document.body.appendChild(ul);

//- Є масив
// Для кожного елементу масиву зробити блок в якому вивести інформацію про title та monthDuration
// Завдання робити через цикли.

let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

for (const obj of coursesAndDurationArray) {
    let div = document.createElement('div');
    div.innerHTML = `<h4>${obj.title}</h4><p>${obj.monthDuration} months</p>`;
    document.body.appendChild(div);
}

//- Є масив
// За допомоги скріпта для кожного елементу масиву зробити <div class='item'> ,  в якому буде <h1 class='heading'>  з title  елементу, та <p class='description'> з monthDuration елементу.
// Завдання робити через цикли.

for (const obj of coursesAndDurationArray) {
    let div = document.createElement('div');
    div.classList.add('item');
    let h1 = document.createElement('h1');
    h1.classList.add('heading');
    h1.innerText = obj.title;
    let p = document.createElement('p');
    p.classList.add('description');
    p.innerText = obj.monthDuration;
    div.appendChild(h1);
    div.appendChild(p);
    document.body.appendChild(div);
}