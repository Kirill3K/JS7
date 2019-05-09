window.addEventListener('DOMContentLoaded', function() { //скрипт запускается после загрузки ДОМ-структуры страницы

    'use strict';
    let tab = document.querySelectorAll('.info-header-tab'), //достаем классы для дальнейшего использования
        info = document.querySelector('.info-header'),
        tabContent = document.querySelectorAll('.info-tabcontent');

    function hideTabContent(a) {
        for (let i = a; i < tabContent.length; i++) {
            tabContent[i].classList.remove('show');
            tabContent[i].classList.add('hide');
        }
    }

    hideTabContent(1);

    function showTabContent(b) {
        if (tabContent[b].classList.contains('hide')) {
            tabContent[b].classList.remove('hide');
            tabContent[b].classList.add('show');
        }
    }

    info.addEventListener('click', function(event) {
        let target = event.target;
        if (target && target.classList.contains('info-header-tab')) {
            for (let i = 0; i < tab.length; i++) {
                if (target == tab[i]) {
                    hideTabContent(0);
                    showTabContent(i);
                    break;
                }
            }
        }
    });

    //Timer 

    let deadline = '2019-05-07';

    function getTimeRemaining(endtime) {
        let t = Date.parse(endtime) - Date.parse(new Date()),
            seconds = Math.floor((t/1000) % 60), //кол-во мс делим на 1000 (узнаем сколько сек) и отдаём остаток
            minutes = Math.floor((t/1000/60) % 60), //кол-во мс делим на 1000 и на 60 - кол-во минут и отдаём остаток
            hours = Math.floor((t/(1000*60*60))); //кол-во часов, без ограничений

        return { //ф-ия, кот. опр. остаток времени и вычленяет из него всё время, часы, минуты, секунды
            'total' : t,
            'hours' : hours,
            'minutes' : minutes,
            'seconds' : seconds,
            
        };
    }

    function setClock(id, endtime) { //ф-ия выставляет и запускает часы
        let timer = document.getElementById(id),
            hours = timer.querySelector('.hours'),
            minutes = timer.querySelector('.minutes'),
            seconds = timer.querySelector('.seconds'),
            timeInterval = setInterval(updateClock, 1000);

        function updateClock() {
            let t = getTimeRemaining(endtime);
                hours.textContent = t.hours;
                minutes.textContent = t.minutes;
                seconds.textContent = t.seconds;

            if (t.hours < 10) {
                hours.textContent = '0' + t.hours;
            }

            if (t.minutes < 10) {
                minutes.textContent = '0' + t.minutes;
            }

            if (t.seconds < 10) {
                seconds.textContent = '0' + t.seconds;
            }

            if (t.total <= 0) {
                clearInterval(timeInterval);
                hours.textContent = '00';
                minutes.textContent = '00';
                seconds.textContent = '00';
            }
        }

    }

    setClock('timer', deadline);

    // Modal
    let more = document.querySelector('.more'),
        overlay = document.querySelector('.overlay'),
        close = document.querySelector('.popup-close'),
        btnBlock = document.getElementById('about'),
        btns = document.querySelectorAll('description-btn');
    
    more.addEventListener('click', function() {
        overlay.style.display = 'block'; // при нажатии на оверлей, он стоновится блоком
        this.classList.add('more-splash'); // анимация для кнопки. Обращаемся к кнопке, которую нажали, путем добавления нового класса
        document.body.style.overflow = 'hidden'; // убираем прокрутку
    });

    close.addEventListener('click', function() {
        overlay.style.display = 'none'; 
        more.classList.remove('more-splash'); 
        document.body.style.overflow = '';
    });

    btnBlock.addEventListener('click', function(event) {
        if(event.target && event.target.classList.contains('description-btn')) {
            overlay.style.display = 'block';
            this.classList.add('more-splash');
            document.body.style.overflow = 'hidden';
        }
    });
});

