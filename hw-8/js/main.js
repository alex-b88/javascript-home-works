//Створити функцію, яка робить глибоку копію об'єкту.
// Додати перевірки на undefined, null, NaN.
// Подумати і реалізувати логіку, в якій кінцевий об'єкт буде мати функції,які в нього були до цього моменту.

function deepClone(obj) {

    function isObject(value) {
        return value && typeof value === 'object';
    }

    if (typeof obj === 'function') {
        return obj.bind({});
    }

    if (obj === null) return null;
    if (obj === undefined) return undefined;
    if (typeof obj === 'number' && isNaN(obj)) return NaN;


    if (obj instanceof Date) {
        return new Date(obj);
    }


    if (Array.isArray(obj)) {
        return obj.map(item => deepClone(item));
    }


    if (isObject(obj)) {
        const clone = {};
        for (const key in obj) {
            if (obj.hasOwnProperty(key)) {
                clone[key] = deepClone(obj[key]);
            }
        }
        return clone;
    }

    return obj;
}

const original = {
    name: "Oleg",
    age: 30,
    details: {
        hobbies: ["reading", "games"],
        address: {
            city: "Kharkiv",
            zipcode: 61000
        }
    },
    birthDate: new Date(),
    empty: null,
    notDefined: undefined,
    notANumber: NaN,
    greet: function() {
        console.log("Hello!");
    }
};

const cloned = deepClone(original);
console.log(cloned);

//- є масив
// за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration
// Зробити все ВИКЛЮЧНО за допомоги інлайн конструкції

let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

let resArr = coursesAndDurationArray.map((user, index)=>({...user, id: index+1}));
console.log(resArr);