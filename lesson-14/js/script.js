$(document).ready(function() {
    $('.main_btna, .main_btn, .main_nav li:eq(1)').on('click', function() {
        $('.overlay').fadeIn();
        $('.modal').slideDown();
    });
    $('.close').on('click', function(){
        $('.overlay').fadeOut();
        $('.modal').slideUp();
    });
});