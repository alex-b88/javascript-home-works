// - Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль
    let array = ['black', 1 , 'white', 2, true, 'yellow', false, 0, 'blue', 3.14, -50];
    for (let i = 0; i < array.length; i++)
    {
        console.log(array[i]);
    }

// Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.

    let book1 ={
        title: 'Title 1',
        pageCount: 200,
        genre: 'horror'
    }

    let book2 ={
        title: 'Title 2',
        pageCount: 130,
        genre: 'comedy'
    }

    let book3 ={
        title: 'Title 3',
        pageCount: 100,
        genre: 'drama'
    }

//- Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" - являється  масивом.
// Кожен автор має поля name та age.

    let book4 ={
        title: 'Title 4' ,
        pageCount: 90,
        genre: 'learning',
        authors: [
            {name: 'name1', age: 40}
        ]
    }

    let book5 ={
        title: 'Title 5' ,
        pageCount: 10,
        genre: 'history',
        authors: [
            {name: 'name 2', age: 70}
        ]
    }

    let book6 ={
        title: 'Title 6' ,
        pageCount: 4,
        genre: 'programming',
        authors: [
            {name: 'name 3', age: 170}
        ]
    }

//- Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password. Вивести в консоль пароль кожного користувача

    let users =[
        {name: 'name1', username: 'user1', pass:'user15$56'},
        {name: 'name2', username: 'user2', pass:'54643'},
        {name: 'name3', username: 'user3', pass:'hjuykf'},
        {name: 'name4', username: 'user4', pass:'43gu'},
        {name: 'name5', username: 'user5', pass:'gf&dgdf'},
        {name: 'name6', username: 'user6', pass:'aaaerggh'},
        {name: 'name7', username: 'user7', pass:'bbdhgr1'},
        {name: 'name8', username: 'user8', pass:'ssss3345'},
        {name: 'name9', username: 'user9', pass:'fff3556'},
        {name: 'name10', username: 'user10', pass:'lse5667'},
    ]

    for (let i=0; i<users.length; i++){
        console.log(users[i].pass);
    }

//- описати масив, в якому буде зберігатись інформація про температуру вранці, вдень і ввечері за термін в 7 днів. Як зробити цей масив - вам потрібно
// подумати. Нормальних варіантів опису - 2. Варіант, коли в вас буде одновимірний масив з 21 значенням вичключаємо одразу

    let degrees =[
        {
            sunday: {
                morning: 9,
                noon: 17,
                evening: 19}
        },
        {
            monday: {
                morning: -2,
                noon: 5,
                evening: 11}
        },
        {
            tuesday: {
                morning: 24,
                noon: 30,
                evening: 40}
        },
        {
            wednesday: {
                morning: 11,
                noon: 32,
                evening: 155}
        },
        {
            thursday: {
                morning: -20,
                noon: -15,
                evening: -10}
        },
        {
            friday: {
                morning: 0,
                noon: 10,
                evening: 16}
        },
        {
            saturday: {
                morning: 14,
                noon: 15,
                evening: 16}
        },
    ]

    for(let day of degrees){
        for(let dayName in day){
            console.log(`${dayName}:`);
            console.log(`Morning: ${day[dayName].morning}`);
            console.log(`Noon: ${day[dayName].noon}`);
            console.log(`Evening: ${day[dayName].evening}`);
        }
    }

//- Є змінна х, якій ви надаєте довільне числове значення.
// Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3

    let x = +prompt('enter a dig:');
    (x!==0) ? console.log('Correct!') : console.log('Incorrect!');

//- Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).

    let time = +prompt('enter minutes')

    if(time>=0 && time<=15){
        console.log('First part of an hour');
    }
    else if(time>15 && time<=30){
        console.log('Second part of an hour');
    }
    else if(time>30 && time<=45){
        console.log('Third part of an hour');
    }
    else if(time>45 && time<=59){
        console.log('Fourth part of an hour');
    }
    else{
        console.log('Out of range');
    }

//- У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).

    let day = +prompt('enter a dig');

    if(day>=1 && day<=10){
        console.log('First decade');
    }
    else if(day>10 && day<=20){
        console.log('Second decade');
    }
    else if(day>20 && day<=31){
        console.log('Third decade');
    }
    else{
        console.log('Out of range');
    }

//- Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано
// на цей день (можна замість плану на день, назву дня англійською).

    let numberOfDay = +prompt('Enter a day number');

    switch (numberOfDay){
        case 1:{
            console.log('Monday');
            break;
        }
        case 2:{
            console.log('Tuesday');
            break;
        }
        case 3:{
            console.log('Wednesday');
            break;
        }
        case 4:{
            console.log('Thursday');
            break;
        }
        case 5:{
            console.log('Friday');
            break;
        }
        case 6:{
            console.log('Saturday');
            break;
        }
        case 7:{
            console.log('Sunday');
            break;
        }
        default:{
            console.log('Wrong day number!');
        }
    }

//- Користувач вводить або має два числа.
// Потрібно знайти та вивести максимальне число з тих двох .
// Також потрібно врахувати коли введені рівні числа.

    let n = +prompt('Enter first num');
    let k = +prompt('Enter second num');

    if(n>k){
        console.log(`Max dig: ${n}`);
    }
    else if(n<k){
        console.log(`Max dig: ${k}`);
    }
    else {
        console.log('Numbers are equals');
    }

//- є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код який,
//  буде присвоювати змінній х значення "default" якщо ви намагаєтесь присвоїти в неї falsy-значення (хибноподібні, тобто ті, які приводиться до false,
//  а це 0 null undefined і тд).

    let b = prompt('Enter something');

    if(!b){
        b = 'default';
    }
    console.log(b);


// - з файлу arrays.js (лежить в папці 2023 plan) взяти масив coursesAndDurationArray. За допомоги іф перевірити кожен його елемент на тривалість
// навчання. У випадку якщо тривалість довша за 5 місяців вивести в консоль "Супер".

    let coursesAndDurationArray = [
        {title: 'JavaScript Complex', monthDuration: 5},
        {title: 'Java Complex', monthDuration: 6},
        {title: 'Python Complex', monthDuration: 6},
        {title: 'QA Complex', monthDuration: 4},
        {title: 'FullStack', monthDuration: 7},
        {title: 'Frontend', monthDuration: 4}
    ];

    for (let course of coursesAndDurationArray){
        if(course.monthDuration > 5){
            console.log(`\"${course.title}\" duration: ${course.monthDuration} SUPER!!!`);
        }
    }