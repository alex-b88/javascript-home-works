//- Знайти та вивести довижину настипних стрінгових значень
//     'hello world', 'lorem ipsum', 'javascript is cool'
let stringArray = [`hello world`, 'lorem ipsum', 'javascript is cool'];
stringArray.forEach(obj => console.log(obj.length));

//- Перевести до великого регістру наступні стрінгові значення
//       'hello world', 'lorem ipsum', 'javascript is cool'
let toUpperCase = stringArray.map( obj => obj.toUpperCase());
console.log(toUpperCase);


//- Перевести до нижнього регістру настипні стрінгові значення
//       'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'
let toLowerCase = toUpperCase.map(obj => obj.toLowerCase());
console.log(toLowerCase);

//- Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.
let dirtyString = ` dirty string   `;
let cleanString = dirtyString.trim();
console.log(cleanString);

//- Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//     let str = 'Ревуть воли як ясла повні';
//     let arr = stringToarray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']
let str = 'Ревуть воли як ясла повні';
let arrayFormString = str.split(' ')
console.log(arrayFormString);
console.log(str);

//- є масив чисел [10,8,-7,55,987,-1011,0,1050,0]. за допомоги map перетворити
// всі об'єкти в масиві на стрінгові.
let arrayWithNumbers = [10,8,-7,55,987,-1011,0,1050,0];
let arrayWithStrings = arrayWithNumbers.map(obj => obj.toString());
console.log(typeof(arrayWithStrings[5]));


// - створити функцію sortNums(array,direction), яка прймає масив чисел, та сортує його від більшого до меньшого,
// або навпаки в залежності від значення аргументу direction.
// let nums = [11,21,3];
// sortNums(nums,'ascending') // [3,11,21]
// sortNums(nums,'descending') // [21,11,3]

let sortNums = (array, direction) =>{
    if(direction === 'asc'){
        array.sort((num1,num2) => num1 - num2);
    }
    else if(direction === 'desc'){
        array.sort((num1, num2) => num2 - num1);
    }
    else return array;
}
sortNums(arrayWithNumbers, 'asc')
console.log(arrayWithNumbers);
sortNums(arrayWithNumbers, 'desc')
console.log(arrayWithNumbers);

//- є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];

let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

//  -- відсортувати його за спаданням за monthDuration
coursesAndDurationArray.sort((num1, num2) => num2.monthDuration - num1.monthDuration);
console.log(coursesAndDurationArray);

//  -- відфільтрувати, залишивши тільки курси з тривалістю більше 5 місяців
coursesAndDurationArray = coursesAndDurationArray.filter(course => course.monthDuration>5);
console.log(coursesAndDurationArray);

//  -- за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration}

coursesAndDurationArray = coursesAndDurationArray.map((course,index) =>{
    let obj ={
        id: index+1,
        title: course.title,
        monthDuration: course.monthDuration
    }
    return obj;
})
console.log(coursesAndDurationArray);

//описати колоду карт (від 6 до туза без джокерів)

const suits = ['Hearts', 'Clubs', 'Diamonds', 'Spades'];
const vals = ['6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
const color = [`red`, `black`];

let deck = [];

suits.forEach(suit => {
    vals.forEach(value => {
        let obj ={
            suit: suit,
            value: value,
            color: color[suits.indexOf(suit) % 2]
        }
        deck.push(obj);
    });
});
console.log(deck);

//  - знайти піковий туз
let cardNumber = deck.findIndex(card => card.suit === 'Spades' && card.value === 'A')
console.log(deck[cardNumber]);

//  - всі шістки
let allOfsixs = deck.filter(card => card.value ==='6')
console.log(allOfsixs);

//  - всі червоні карти
let listOfReds = deck.filter(card => card.color==='red');
console.log(listOfReds);

//  - всі буби
let listOfDiamonds = deck.reduce((accumulator, card) =>{
    if(card.suit === 'Diamonds')
        accumulator.push(card);
    return accumulator;
}, []);
console.log(listOfDiamonds);

//  - всі трефи від 9 та більше
let rangsFilter = (value) =>{
    const rangs = ['10', 'J', 'Q', 'K', 'A'];
    return rangs.includes(value);
}

let listOfClubsMoreThan9 = deck.filter(card =>(
    card.suit === 'Clubs' && rangsFilter(card.value)))
console.log(listOfClubsMoreThan9);

//Взяти описану колоду карт, та за допомоги reduce упакувати всі карти по "мастях" в об'єкт
let cardsSuits = deck.reduce((accumulator, card)=>{
    switch (card.suit){
        case 'Spades':{
            accumulator.spades.push(card);
            break;
        }
        case 'Diamonds':{
            accumulator.diamonds.push(card);
            break;
        }
        case 'Hearts':{
            accumulator.hearts.push(card);
            break;
        }
        case 'Clubs':{
            accumulator.clubs.push(card);
            break;
        }
    }
    return accumulator;
},{
    spades:[],
    diamonds:[],
    hearts:[],
    clubs:[]
})
console.log(cardsSuits);

// взяти з arrays.js масив coursesArray
// --написати пошук всіх об'єктів, в яких в modules є sass
// --написати пошук всіх об'єктів, в яких в modules є docker
let coursesArray = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'git',
            'java core',
            'java advanced']
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'python core',
            'python advanced']
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'node.js',
            'python',
            'java']
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
    }
];

const searchFunction = (arr, option) => {
     console.log(arr.filter((course) => course.modules.includes(option)));
}
searchFunction(coursesArray, 'docker');
searchFunction(coursesArray, 'sass');