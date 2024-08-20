//- Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)

function User(id, name, surname , email, phone){
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
}

let usr = new User(1, "John", "Doe", "john.doe@example.com", "1234567890");

let arrayOfUsers = [];
arrayOfUsers.push(new User(1, "John", "Doe", "john.doe@example.com", "1234567890"));
arrayOfUsers.push(new User(2, "Jane", "Smith", "jane.smith@example.com", "0987654321"));
arrayOfUsers.push(new User(3, "Alice", "Johnson", "alice.johnson@example.com", "2345678901"));
arrayOfUsers.push(new User(4, "Bob", "Brown", "bob.brown@example.com", "3456789012"));
arrayOfUsers.push(new User(5, "Charlie", "Davis", "charlie.davis@example.com", "4567890123"));
arrayOfUsers.push(new User(6, "David", "Miller", "david.miller@example.com", "5678901234"));
arrayOfUsers.push(new User(7, "Eve", "Wilson", "eve.wilson@example.com", "6789012345"));
arrayOfUsers.push(new User(8, "Frank", "Moore", "frank.moore@example.com", "7890123456"));
arrayOfUsers.push(new User(9, "Grace", "Taylor", "grace.taylor@example.com", "8901234567"));
arrayOfUsers.push(new User(10, "Henry", "Anderson", "henry.anderson@example.com", "9012345678"));

//- Взяти масив з  User[] з попереднього завдання, та відфільтрувати, залишивши тільки об'єкти з парними id (filter)
let arrayOfUsersWithOddIds = arrayOfUsers.filter((obj)=>obj.id%2 === 0);
console.log(arrayOfUsers);
console.log(arrayOfUsersWithOddIds);

//- Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
arrayOfUsers.sort((obj1, obj2)=> obj2.id - obj1.id) //отсортировал в обратном порядке, т.к. массив создан с ид по порядку
console.log(arrayOfUsers);

//- створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client

class Client {
    constructor(id, name, surname , email, phone, order) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
        this.order = order;
    }
}

let arrayOfClients = [];
arrayOfClients.push(new Client(1, "John", "Doe", "john.doe@example.com", "1234567890", 6));
arrayOfClients.push(new Client(2, "Jane", "Smith", "jane.smith@example.com", "0987654321", 9));
arrayOfClients.push(new Client(3, "Alice", "Johnson", "alice.johnson@example.com", "2345678901", 21));
arrayOfClients.push(new Client(4, "Bob", "Brown", "bob.brown@example.com", "3456789012", 8));
arrayOfClients.push(new Client(5, "Charlie", "Davis", "charlie.davis@example.com", "4567890123", 1));
arrayOfClients.push(new Client(6, "David", "Miller", "david.miller@example.com", "5678901234", 12));
arrayOfClients.push(new Client(7, "Eve", "Wilson", "eve.wilson@example.com", "6789012345", 45));
arrayOfClients.push(new Client(8, "Frank", "Moore", "frank.moore@example.com", "7890123456", 31));
arrayOfClients.push(new Client(9, "Grace", "Taylor", "grace.taylor@example.com", "8901234567", 55));
arrayOfClients.push(new Client(10, "Henry", "Anderson", "henry.anderson@example.com", "9012345678", 0));

//- Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)
arrayOfClients.sort((obj1, obj2) => obj1.order-obj2.order);
console.log(arrayOfClients);

//- Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
//     -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
//     -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
//     -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
//     -- changeYear (newValue) - змінює рік випуску на значення newValue
//     -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

function Car(model, manufacturer, year, maxSpeed, engine){
    this.model = model;
    this.manufacturer = manufacturer;
    this.year = year;
    this.maxSpeed = maxSpeed;
    this.engine = engine;

    this.drive = () => {
        console.log(`Driving with ${this.maxSpeed} speed per hour`);
    }
    this.info = function (){
        console.log(`Model: ${this.model}, Manufacturer: ${this.manufacturer}, Year: ${this.year}, Max Speed: ${this.maxSpeed}`);
    }
    this.increaseMaxSpeed = (newValue) => {
        this.maxSpeed +=newValue;
    }
}

Car.prototype.changeYear = function (newValue) {
    this.year = newValue;
}

Car.prototype.addDriver = function (driver) {
    this.driver = driver;
}


//- (Те саме, тільки через клас)
class anotherCar{
    constructor(model, manufacturer, year, maxSpeed, engine) {
        this.model = model;
        this.manufacturer = manufacturer;
        this.year = year;
        this.maxSpeed = maxSpeed;
        this.engine = engine;
    }
    drive = () => {
        console.log(`Driving with ${this.maxSpeed} speed per hour`);
    }
    info = function (){
        console.log(`Model: ${this.model}, Manufacturer: ${this.manufacturer}, Year: ${this.year}, Max Speed: ${this.maxSpeed}`);
    }
    increaseMaxSpeed = (newValue) => {
        this.maxSpeed +=newValue;
    }
}
anotherCar.prototype.changeYear = function (newValue) {
    this.year = newValue;
}

anotherCar.prototype.addDriver = function (driver) {
    this.driver = driver;
}

//-створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
// За допомоги циклу знайти яка попелюшка повинна бути з принцом.
// Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку

function Cinderella(name, age, sizeOfFoot){
    this.name = name;
    this.age = age;
    this.sizeOfFoot = sizeOfFoot;
}

function Prince(name, age, shoeSize){
    this.name = name;
    this.age = age;
    this.shoeSize = shoeSize;
}

let arrayOfCinderellas = [
    new Cinderella("Anna", 18, 37),
    new Cinderella("Elsa", 19, 35),
    new Cinderella("Belle", 20, 36),
    new Cinderella("Cinderella", 21, 39),
    new Cinderella("Ariel", 22, 41),
    new Cinderella("Rapunzel", 23, 40),
    new Cinderella("Tiana", 24, 38),
    new Cinderella("Snow White", 25, 34),
    new Cinderella("Jasmine", 26, 33),
    new Cinderella("Aurora", 27, 42)
];

let prince = new Prince("Charming", 25, 37);

// function findCinderella(arr, prince){
//     return arr.find(cinderella => cinderella.sizeOfFoot === prince.shoeSize);
// }
// console.log(findCinderella(arrayOfCinderellas, prince));

arrayOfCinderellas.findIndex((cinderella) => {
    if(cinderella.sizeOfFoot === prince.shoeSize){
        console.log(cinderella);
    }
})

//Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку
let shoeSize = arrayOfCinderellas.find(obj => obj.sizeOfFoot===42);
console.log(shoeSize);

//*Через Array.prototype. створити власний foreach, filter

let arr = [3, 17, 6, 8, 13, 19, 2, 11, 14, 5, 7, 1, 15, 12, 10, 0, 18, 9, 4, 20];

Array.prototype.myFilter = function (min, max){
        let tmpArr =[];
        for (const obj of this) {
            if(obj>=min && obj<=max){
                tmpArr.push(obj);
            }
        }
        return tmpArr;
}
let newArr = arr.myFilter(10, 20);
console.log(newArr);


Array.prototype.myForEach = function (fn){
    let item = this;
    for (const obj of item) {
            fn(obj);
    }
}

arr.myForEach((arr)=> console.log(arr));














