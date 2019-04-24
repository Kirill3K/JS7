'use strict';

let money, time;

function start () {
    money = +prompt('Ваш бюджет на месяц', '');
    time = prompt('Введите дату в формате YYYY-MM-DD', '');

    while(isNaN(money) || money == '' || money == null){
        money = +prompt('Ваш бюджет на месяц', '');
    }
}

start();

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: true
};

function chooseExpenses(){
    for (let i = 0; i < 2; i++){
        let a = prompt('Введите обязательную статью расходов в этом месяце', ''),
            b = prompt('Во сколько обойдется?', '');
        if ( (typeof(a)) === 'string' && a != null && b != null
            && a != '' && b != '' && a.length < 50 && b.length <50) {
            console.log('done');
            appData.expenses[a] = b;
        } else {
            i--;
        }
    }
}
chooseExpenses();

function detectDayBudget(){
    appData.detectDayBudget = (appData.budget / 30).toFixed();
    alert('Ежедневный бюджет: ' + appData.detectDayBudget);
}
detectDayBudget();

function detectLevel(){
    if (appData.detectDayBudget < 100){
        alert('Небольшой уровень достатка');
    } else if (appData.detectDayBudget > 100 && appData.detectDayBudget < 1000){
        alert('Средний уровень достатка');
    } else if (appData.detectDayBudget > 1000){
        alert('Высокий уровень достатка');
    } else {
        alert('Произошла ошибка');
    }
}
detectLevel();

function chooseOptExpenses(){
    for (let i = 0; i < 3; i++){
        let chooseOptExpenses = prompt('Статья необязательных расходов?', '');
        if ( (typeof(chooseOptExpenses)) === 'string' && chooseOptExpenses != null && chooseOptExpenses != ''){
            appData.optionalExpenses[i] = chooseOptExpenses;
        } else {
            i--;
        }
    }
}
chooseOptExpenses();

// function checkSavings(){
//     if (appData.savings == true) {
//         let save = +prompt('Сумма накоплений?'),
//             percent = +prompt('Процент депозита?');

//         appData.monthlyIncome = save/100/12*percent;
//         alert('Ваш доход от депозита: ' + appData.monthlyIncome);
//     }
// }
// checkSavings();