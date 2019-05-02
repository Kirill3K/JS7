'use strict';

let startBtn = document.querySelector('#start'),
    budgetValue = document.querySelector('.budget-value'),
    dayBudgetValue = document.querySelector('.daybudget-value'),
    levelValue = document.querySelector('.level-value'),
    expensesValue = document.querySelector('.expenses-value'),
    optionalExpensesValue = document.querySelector('.optionalexpenses-value'),
    incomeValue = document.querySelector('.income-value'),
    monthSavingsValue = document.querySelector('.monthsavings-value'),
    yearSavingsValue = document.querySelector('.yearsavings-value'),

    expencesItem = document.querySelectorAll('.expenses-item'),
    expencesBtn = document.getElementsByTagName('button')[0],
    optionalExpensesBtn = document.getElementsByTagName('button')[1],
    countBtn = document.getElementsByTagName('button')[2],
    optionalExpencesItem = document.querySelectorAll('.optionalexpenses-item'),
    chooseIncome = document.querySelector('.choose-income'),
    checkSaving = document.querySelector('#savings'),
    sumValue = document.querySelector('.choose-sum'),
    percentValue = document.querySelector('.choose-percent'),
    yearValue = document.querySelector('.year-value'),
    monthValue = document.querySelector('.month-value'),
    dayValue = document.querySelector('.day-value');

let money, time;

expencesBtn.disabled = true;
expencesBtn.style.backgroundImage = 'none';
optionalExpensesBtn.disabled = true;
optionalExpensesBtn.style.backgroundImage = 'none';
countBtn.disabled = true;
countBtn.style.backgroundImage = 'none';
    
startBtn.addEventListener('click', function() {
	time = prompt('Введите дату в формате YYYY-MM-DD', ''); 
    money = +prompt('Ваш бюджет на месяц', '');

	while(isNaN(money) || money == '' || money == null){
		money = prompt('Ваш бюджет на месяц', '');
	}
	appData.budget = money;
    appData.timeData = time;
    budgetValue.textContent = money.toFixed();
    yearValue.value = new Date(Date.parse(time)).getFullYear();
    monthValue.value = new Date(Date.parse(time)).getMonth() +1;
    dayValue.value = new Date(Date.parse(time)).getDate();

    expencesBtn.disabled = false;
    expencesBtn.style.backgroundImage = '';
    optionalExpensesBtn.disabled = false;
    optionalExpensesBtn.style.backgroundImage = '';
    countBtn.disabled = false;
    countBtn.style.backgroundImage = '';
});

expencesBtn.addEventListener('click', function() {
    let sum = 0;

    for (let i = 0; i < expencesItem.length; i++) {
        let a = expencesItem[i].value,
            b = expencesItem[++i].value;
    
        if ((typeof(a)) === 'string' && a != null && b != null
        && a != '' && b != '' && a.length < 50 && b.length <50) {
            appData.expenses[a] = b;
            sum += +b;
        } else {
            i--;
        }
    }
    expensesValue.textContent = sum;
});

optionalExpensesBtn.addEventListener('click', function() {
    for (let i = 0; i < optionalExpencesItem.length; i++) {
        let opt = optionalExpencesItem[i].value;
        appData.optionalExpenses[i] = opt;
        optionalExpensesValue.textContent += appData.optionalExpenses[i] + ' ';
    }
});

countBtn.addEventListener('click', function() {

    if (appData.budget != undefined) {
        appData.moneyPerDay = (appData.budget - +expensesValue.textContent / 30).toFixed();
        console.log(appData.expenses);
        dayBudgetValue.textContent =  appData.moneyPerDay; 
    
        if (appData.moneyPerDay < 100){
            levelValue.textContent = 'Небольшой уровень достатка';
        } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 1000){
            levelValue.textContent = 'Средний уровень достатка';
        } else if (appData.moneyPerDay > 1000){
            levelValue.textContent = 'Высокий уровень достатка';
        } else {
            levelValue.textContent = 'Произошла ошибка';
        }
    } else {
        dayBudgetValue.textContent = 'Произошла ошибка';
    }
});

chooseIncome.addEventListener('input', function() {
    let items = chooseIncome.value;
    appData.income = items.split(', ');
    incomeValue.textContent = appData.income;
});

checkSaving.addEventListener('click', function(){
    if (appData.savings == true) {
        appData.savings = false;
    } else {
        appData.savings = true;
    }
});

sumValue.addEventListener('input', function() {
    if (appData.savings == true) {
        let sum = +sumValue.value,
            percent = +percentValue.value;

        appData.monthIncome = sum/100/12*percent;
        appData.yearIncome = sum/100*percent;

        monthSavingsValue.textContent = appData.monthIncome.toFixed(1);
        yearSavingsValue.textContent = appData.yearIncome.toFixed(1);
    }
});

percentValue.addEventListener('input', function() {
    if (appData.savings == true) {
        let sum = +sumValue.value,
            percent = +percentValue.value;
        
        appData.monthIncome = sum/100/12*percent;
        appData.yearIncome = sum/100*percent;

        monthSavingsValue.textContent = appData.monthIncome.toFixed(1);
        yearSavingsValue.textContent = appData.yearIncome.toFixed(1);
    }
});
    
let appData = {
    budget: money,
    expenses: {},
    optionalExpenses: {},
    income: [],
    timeData: time,
    savings: false,
};