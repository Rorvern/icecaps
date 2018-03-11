$(document).ready(() => {
    $('.social-media').hide();
    $('#share').on('click', () => {
        $('.social-media').slideToggle();
    })
    $('#reset').on('click', () => {
        initializeCanvas();
    })
})

