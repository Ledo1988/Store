import $ from 'jquery';

$( document ).ready(function() {

    $('body .items-sorting__view').on('click', '.items-sorting__view-item', function(){
       $(this).parents('.items-sorting__view').find('.items-sorting__view-item').removeClass('active');
       $(this).addClass('active');
    });

    $('body .items-sorting__main').on('click', '.items-sorting__main-item', function(){
        $(this).parents('.items-sorting__main').find('.items-sorting__main-item').removeClass('active');
        $(this).addClass('active');
    });

    $('body .items-sorting__main').on('click', '.items-sorting__main-item-rate', function(){
        $(this).find('.items-sorting__rate-item').toggleClass('active');
    });
});

// import Vue from 'vue';
// import sorting from './sorting.vue';
//
// new Vue({
//     el: '#myapp',
//     components: {
//         sorting
//     },
//     render: h => h(sorting),
//
// })