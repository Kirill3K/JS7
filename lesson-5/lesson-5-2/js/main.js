'use strict';

let startCalc = document.querySelector('#start'),
    budgetValue = document.querySelectorAll('.budget-value'),
    dayBudgetValue = document.querySelectorAll('.daybudget-value'),
    levelValue = document.querySelectorAll('.level-value'),
    expensesValue = document.querySelectorAll('.expenses-value'),
    optionalExpensesValue = document.querySelectorAll('.optionalexpenses-value'),
    incomeValue = document.querySelectorAll('.income-value'),
    monthSavingsValue = document.querySelectorAll('.monthsavings-value'),
    yearSavingsValue = document.querySelectorAll('.yearsavings-value'),
    input = document.querySelectorAll('.expenses-item'),
    conf1 = document.getElementsByTagName('button')[0],
    conf2 = document.getElementsByTagName('button')[1],
    calc = document.getElementsByTagName('button')[2],
    optExp = document.querySelectorAll('.optionalexpenses-item'),
    chooseIncome = document.querySelector('.choose-income'),
    check = document.querySelector('#savings'),
    sum = document.querySelector('#sum'),
    percent = document.querySelector('#percent'),
    year = document.querySelector('.year'),
    month = document.querySelector('.month'),
    day = document.querySelector('.day');

console.log(startCalc);
console.log(budgetValue);
console.log(dayBudgetValue);
console.log(levelValue);
console.log(expensesValue);
console.log(optionalExpensesValue);
console.log(incomeValue);
console.log(monthSavingsValue);
console.log(yearSavingsValue);
console.log(input);
console.log(conf1);
console.log(conf2);
console.log(calc);
console.log(optExp);
console.log(chooseIncome);
console.log(check);
console.log(sum);
console.log(percent);
console.log(year);
console.log(month);
console.log(day);