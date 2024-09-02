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
