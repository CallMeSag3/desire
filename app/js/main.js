$(function () {

    $('.header__btn').on('click', function () {
        $('.burger').removeClass('burger--closed');
    });

    $('.burger-close').on('click', function () {
        $('.burger').addClass('burger--closed');
    });

    $('.header__btn-menu').on('click', function () {
        $('.menu-list').toggleClass('menu-list--open');
    });

    $('.top__slider').slick({
        dots: true,
        arrows: false,
        fade: true,
        autoplay: true,
    });

    $('.contact-slider').slick({
        slidesToShow: 10,
        slidesToScroll: 10,
        dots: true,
        arrows: false,
        responsive: [
            {
                breakpoint: 1700,
                settings: {
                    slidesToShow: 8,
                    slidesToScroll: 8,
                }
            },
            {
                breakpoint: 1000,
                settings: {
                    slidesToShow: 6,
                    slidesToScroll: 6,
                }
            },
            {
                breakpoint: 840,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 5,
                }
            },
            {
                breakpoint: 650,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 4,
                }
            },
            {
                breakpoint: 580,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    autoplay: true,
                }
            },
            {
                breakpoint: 492,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    autoplay: true,
                }
            },


        ]
    })

    $('.article-slider__box').slick({
        prevArrow: '<button type="button" class="blog__slider-arrow blog__slider-arrowleft"><img src="./img/blogpost/blogpost/Path.svg" alt="arrowPrev"></button>',
        nextArrow: '<button type="button" class="blog__slider-arrow blog__slider-arrowright"><img src="./img/blogpost/blogpost/next.svg" alt="arrowNext"></button>',
    })

    var mixer = mixitup('.gallery__inner', {
        load: {
            filter: '.furniture'
        }
    });

    if ($(window).width() > 580) {
        $('.inspiration').on('hover', function () {
            $('.inspiration__item-line').css("animation-play-state", "running");
        });
    }
    else {
        $('.inspiration').on('hover', function () {
            $('.inspiration__item-line').css("animation-play-state", "revert");
        });
    }

    $('.pagination__list-num-two').on('hover', function () {
        $('.pagination__arrow--disabled').css('opacity', '1')
        $('.pagination__arrow--disabled').css('pointer-events', 'all')
    });

    if ($(window).width() < 580) {
        $('.how-item--measurements').appendTo($('.how-items__row'));
    }

});

$("html,body").css("overflow-x", "hidden")






