$('.burger-menu').on('click', function () {
    $(this).toggleClass('show');
    $('header ul').toggleClass('show')
});

$('header ul a').on('click', function () {
    $('.burger-menu').removeClass('show');
    $('header ul').removeClass('show')
});