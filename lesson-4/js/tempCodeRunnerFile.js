chooseIncome: function(){
    let items = prompt('Способы доп. заработка? (Перечислите через запятую)','');
    while(isNaN(items) || items == '' || items == null){
        items = prompt('Способы доп. заработка? (Перечислите через запятую)','');
    }