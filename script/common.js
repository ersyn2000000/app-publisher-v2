$(document).ready(function() {
    
    var swiperTwo = new Swiper('.expertise__container', {
        slidesPerView: 3,
        spaceBetween: 30,
        slidesPerView: 'auto',
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
    });

    var swiper = new Swiper('.swiper-container', {
        slidesPerView: 3,
        spaceBetween: 30,
        slidesPerView: 'auto',
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
    });

    $('[data-fancybox]').fancybox();

    /* Кнопка НА ВЕРХ
    ====================================*/   
    let delay = 1000; 

    $('.upIcon').click(function () { 

        $('body, html').animate({
            scrollTop: 0
        }, delay);
    });

    /* js__disabled
    ====================================*/
    $('.js_disabled').on('change', function() {
        var _this = $(this).parent('.form').find('.js-send');
        if (_this.attr('disabled')) {
            _this.removeAttr('disabled');
        } else {
            _this.attr('disabled', 'disabled');
        }
    });


    $('.header__btn').on('click', function() {
        $('body').addClass('body-hidden');
        $('.wrapper').addClass('wrapper-blur');
        $('.hide__menu').slideToggle();
    });

    $('.hide__close').on('click', function() {
        $('body').removeClass('body-hidden');
        $('.wrapper').removeClass('wrapper-blur');
        $('.hide__menu').slideToggle();
    });

    $('.js-btn').on('click', function() {
        $('body').addClass('body-hidden');
        $('.wrapper').addClass('wrapper-blur');
        $('#modal').slideDown();
    });

    $('.js-close-modal').on('click', function() {
        $('body').removeClass('body-hidden');
        $('.wrapper').removeClass('wrapper-blur');
        $('.hide__menu').slideUp();
        $('#modal').slideUp();
    });

    $('#thanks .thanks__close').on('click', function() {
        $('#thanks').slideUp();
        $('body').removeClass('body-hidden');
        $('.wrapper').removeClass('wrapper-blur');
        $('.hide__menu').slideUp();
        $('#modal').slideUp();
    });

    $('.help__input').on('click', function() {
        $(this).parent('label').find('.help__choose').slideToggle();
        //            console.log($(this).parent());
    });

    $('.help__value').on('click', function() {
        $('.help__input').val($(this).text());
    });
    
    $('.js-nav').on('click', function(e) {
        e.preventDefault();

        var currentBlock = $(this).attr("href"),
            currentBlockOffset = $(currentBlock).offset().top;
        
        $('.hide__menu').slideUp();
        $('.wrapper').removeClass('wrapper-blur');
        $('body').removeClass('body-hidden');

        $("html, body").animate({
            scrollTop: currentBlockOffset - 20
        }, 500);
    });

    /*******************/

    $('.budget__input').on('click', function() {
        $(this).parent('label').find('.budget__choose').slideToggle();
    });

    $('.budget__value').on('click', function() {
        $('.budget__input').val($(this).text());
    });
    
});