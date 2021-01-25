/* Mobile menu */
$(document).ready(function(){
    if ($(window).width() < 768) {
        $('.header__nav-button').click(function(){
            $('.header__list').slideToggle(300);
            return false;
        });
}

});

/* Select */
$(document).ready(function(){
    $('.order__form-select').click(function(){
        $(this).toggleClass('open');
        $('.options',this).toggleClass('open');
        });

        $('.options li').click(function(){
        var selection = $(this).text();
        var dataValue = $(this).attr('data-value');
        $('.selected-option span').text(selection);
        $('.order__form-select').attr('data-selected-value',dataValue);
    });
});