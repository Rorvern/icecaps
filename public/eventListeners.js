$(document).ready(() => {
    $('.email').hide();
    $('#share').on('click', () => {
        $('.email').slideToggle();
    })
    $('#reset').on('click', () => {
        initializeCanvas();
    })
    $('.submit').on('click', () => {
        //send da email
    })
})