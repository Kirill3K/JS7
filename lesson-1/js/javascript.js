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
    income: [],
    savings: false
};

let answer1 = +prompt('Введите обязательную статью расходов в этом месяце?'),
    answer1Second = +prompt('Введите обязательную статью расходов в этом месяце?'),
    answer2 = +prompt('Во сколько обойдется?'),
    answer2Second = +prompt('Во сколько обойдется?');

appData.expenses[answer1] = answer2;
appData.expenses[answer1Second] = answer2Second;

console.log(appData);

    alert(appData.budget / 30);