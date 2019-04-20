'use strict';


let money = +prompt('Ваш бюджет на месяц', ''),
    time = prompt('Введите дату в формате YYYY-MM-DD', '');

console.log(money);
console.log(time);

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    savings: false
};

let answer1 = +prompt('Введите обязательную статью расходов в этом месяце?');
let answer2 = +prompt('Во сколько обойдется?');
appData.expenses[answer1] = answer2;

console.log(appData);

alert(money / 30);