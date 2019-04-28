'use string';

let ul = document.querySelector('.menu'), 
    li = document.querySelectorAll('.li'),
    list = document.createElement('li'),
    menuItem = document.querySelectorAll('.menu-item'),
    title = document.querySelector('.title'),
    advert = document.querySelector('.adv'),
    col = document.querySelectorAll('.column')[1],
    answer = document.querySelector('.prompt');

ul.appendChild(list);
list.classList.add('menu-item');
list.innerHTML = 'Пятый пункт';
ul.insertBefore(menuItem[2], menuItem[1]);

document.body.style.backgroundImage = 'url(img/apple_true.jpg)';

title.innerHTML = 'Мы продаём подлинную технику Apple';

col.removeChild(advert);

answer.innerHTML = prompt('Как вы относитесь к технике Apple?', '');