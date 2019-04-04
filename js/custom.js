$(window).load(function () {
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent)) {
        $('body').addClass('ios');
    } else {
        $('body').addClass('web');
    }

    $('body').removeClass('loaded');
});

/* viewport width */
function viewport() {
    var e = window,
        a = 'inner';

    if (!('innerWidth' in window)) {
        a = 'client';
        e = document.documentElement || document.body;
    }
    return {width: e[a + 'Width'], height: e[a + 'Height']}
}

/* viewport width */
$(function () {
    /* placeholder*/
    /*$('input, textarea').each(function () {
        var placeholder = $(this).attr('placeholder');
        $(this).focus(function () {
            $(this).attr('placeholder', '');
        });
        $(this).focusout(function () {
            $(this).attr('placeholder', placeholder);
        });
    });*/
    /* placeholder*/

    $('.button-nav').click(function () {
        $(this).toggleClass('active'),
            $('.main-nav-list').slideToggle();
        return false;
    });

    /* components */

    /*
        if ($('.styled').length) {
            $('.styled').styler();
        }

        if ($('.fancybox').length) {
            $('.fancybox').fancybox({
                margon: 10,
                padding: 10
            });
        }

        if ($('.scroll').length) {
            $(".scroll").mCustomScrollbar({
                axis: "x",
                theme: "dark-thin",
                autoExpandScrollbar: true,
                advanced: {autoExpandHorizontalScroll: true}
            });
        }
        */

    /* components */

    if ($('.slick-slider').length) {
        var prev_arrow = '<button class="slick-prev slick-arrow"><span class="icon icon-chevron-left"></span></button>',
            next_arrow = '<button class="slick-next slick-arrow"><span class="icon icon-chevron-right"></span></button>';

        $('.slick-slider').each(function () {
            $(this).slick({
                arrows: true,
                appendArrows: $(this).nextAll('.slider__custom-nav'),
                prevArrow: prev_arrow,
                nextArrow: next_arrow,
                dots: true,
                infinite: false,
                speed: 300,
                slidesToShow: 1,
                slidesToScroll: 1,
                /*responsive: [
                    {
                        breakpoint: 1024,
                        settings: {
                            slidesToShow: 3,
                            slidesToScroll: 3,
                            infinite: true,
                            dots: true
                        }
                    },
                    {
                        breakpoint: 600,
                        settings: "unslick"
                    }
                ]*/
            });

            var a = $(this).find('.slick-dots .slick-active button'),
                b = $(this).find('li').length,
                countCurrent = $(this).next('.slider__custom-nav').find('.slider__count-current'),
                countTotal = $(this).next('.slider__custom-nav').find('.slider__count-total');

            if (a.text().length === 1) {
                countCurrent.text('0' + a.text());
            } else {
                countCurrent.text(a.text());
            }

            if (b > 9) {
                countTotal.text(b);
            } else {
                countTotal.text('0' + b);
            }
        });

        var a = $(this).find('.slick-dots .slick-active button'),
            b = $(this).find('li').length,
            countCurrent = $(this).next('.slider__custom-nav').find('.slider__count-current'),
            countTotal = $(this).next('.slider__custom-nav').find('.slider__count-total');

        if (a.text().length === 1) {
            countCurrent.text('0' + a.text());
        } else {
            countCurrent.text(a.text());
        }

        if (b > 9) {
            countTotal.text(b);
        } else {
            countTotal.text('0' + b);
        }

        $('.slick-slider').on('afterChange', function () {
            var a = $(this).find('.slick-dots .slick-active button'),
                b = $(this).find('li').length,
                countCurrent = $(this).next('.slider__custom-nav').find('.slider__count-current'),
                countTotal = $(this).next('.slider__custom-nav').find('.slider__count-total');

            if (a.text().length === 1) {
                countCurrent.text('0' + a.text());
            } else {
                countCurrent.text(a.text());
            }

            if (b > 9) {
                countTotal.text(b);
            } else {
                countTotal.text('0' + b);
            }
        });
    }

    /* FAQ list items */
    /*var faqText = $('.faq__text'),
        currentItemTitle = $('.faq__title.active'),
        currentTextWrap = currentItemTitle.next();

    faqText.slideUp(0);
    currentTextWrap.slideDown(0);*/

    $('.faq__title').on('click', function () {
        if ($(this).hasClass('active')) {
            $(this).closest('.faq__box').find('.faq__title.active').removeClass('active').next().slideUp(350);
        } else {
            $(this).closest('.faq__box').find('.faq__title.active').removeClass('active').next().slideUp(350);
            $(this).addClass('active').next().slideDown(350);
        }
    });
});

var handler = function () {

    var height_footer = $('footer').height();
    var height_header = $('header').height();
    //$('.content').css({'padding-bottom':height_footer+40, 'padding-top':height_header+40});


    var viewport_wid = viewport().width;
    var viewport_height = viewport().height;

    if (viewport_wid <= 991) {

    }

}
$(window).bind('load', handler);
$(window).bind('resize', handler);