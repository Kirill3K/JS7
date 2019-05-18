$(document).ready(function() {
    $('.main_btna').on('click', function() {
        $('.overlay').animate(
            {
                opacity: 'toggle',
            }
        );
        $('.modal').animate(
            {
                height: 'toggle',
            }
        );
    });
    $('.main_btn').on('click', function() {
        $('.overlay').animate(
            {
                opacity: 'toggle',
            }
        );
        $('.modal').animate(
            {
                height: 'toggle',
            }
        );
    });
    $('.main_nav li:eq(1)').on('click', function() {
        $('.overlay').animate(
            {
                opacity: 'toggle',
            }
        );
        $('.modal').animate(
            {
                height: 'toggle',
            }
        );
    });
    $('.close').on('click', function() {
        $('.overlay').animate(
            {
                opacity: 'toggle',
            }
        );
        $('.modal').animate(
            {
                height: 'toggle',
            }
        );
    });
});