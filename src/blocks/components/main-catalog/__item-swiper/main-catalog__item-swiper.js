import $ from 'jquery';
import Swiper from 'swiper';

$( document ).ready(function() {
    let newClassThumbs;
    let newClassTop;
    let newClassBtnNext;
    let newClassBtnPrev;

    $('body .main-catalog__item').each(function(index, element){
        newClassThumbs = 'gallery-thumbs-s'+index;
        newClassTop = 'gallery-top-s'+index;
        newClassBtnNext = 'next-' + newClassThumbs;
        newClassBtnPrev = 'prev-' + newClassThumbs;

        $(this).find('.gallery-thumbs').addClass(newClassThumbs);
        $(this).find('.gallery-top').addClass(newClassTop);
        $(this).find('.item-swiper-button-next').addClass(newClassBtnNext);
        $(this).find('.item-swiper-button-prev').addClass(newClassBtnPrev);

        newClassThumbs = '.' + newClassThumbs;
        newClassTop = '.' + newClassTop;
        newClassBtnNext = '.' + newClassBtnNext;
        newClassBtnPrev = '.' + newClassBtnPrev;

        let galleryThumbs = new Swiper(newClassThumbs, {
            spaceBetween: 0,
            slidesPerView: 'auto',
            direction: 'vertical',
            loop: true,
            freeMode: true,
            loopedSlides: 5, //looped slides should be the same
            watchSlidesVisibility: true,
            watchSlidesProgress: true,

        });

        let galleryTop = new Swiper(newClassTop, {
            spaceBetween: 7,
            direction: 'vertical',
            effect: 'fade',
            loop:true,
            loopedSlides: 5, //looped slides should be the same
            thumbs: {
                swiper: galleryThumbs,
            },
            navigation: {
                nextEl: newClassBtnNext,
                prevEl: newClassBtnPrev,
            },
        });
    });
});


// $('body .item__swiper--wrapper').each(function (index) {
//     var galleryThumbs = new Swiper('.gallery-thumbs', {
//         spaceBetween: 0,
//         slidesPerView: 'auto',
//         direction: 'vertical',
//         loop: true,
//         freeMode: true,
//         loopedSlides: 5, //looped slides should be the same
//         watchSlidesVisibility: true,
//         watchSlidesProgress: true,
//
//     });
//     var galleryTop = new Swiper('.gallery-top', {
//         spaceBetween: 7,
//         direction: 'vertical',
//         loop:true,
//         loopedSlides: 5, //looped slides should be the same
//         thumbs: {
//             swiper: galleryThumbs,
//         },
//         navigation: {
//             nextEl: '.gallery-thumbs .item-swiper-button-next',
//             prevEl: '.gallery-thumbs .item-swiper-button-prev',
//         },
//     });
// });

