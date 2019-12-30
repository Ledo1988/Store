import $ from 'jquery';

$( document ).ready(function() {
    let windowWidth = $( window ).width();

    if (windowWidth < 769) {

        $('body').on('click', '.filter-open', function() {
           $('body').find('.main-catalog__sub-menu').addClass('active');
           $('body').addClass('overflow-hidden');
           $('html').addClass('overflow-hidden');
        });

        $('body').on('click', '.filter-close', function() {
            $('body').find('.main-catalog__sub-menu').removeClass('active');
            $('body').removeClass('overflow-hidden');
            $('html').removeClass('overflow-hidden');
        });


        window.onscroll = function() {myFunction()};
        var filterOpen = $('.filter-open');
        var sticky = $('.filter-open').offset().top;

        function myFunction() {
            if (window.pageYOffset > sticky) {
                filterOpen.addClass("sticky");
            } else {
                filterOpen.removeClass("sticky");
            }
        }

    }
});


