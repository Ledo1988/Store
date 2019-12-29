import Vue from 'vue';
import  VuejsPaginate from 'vuejs-paginate';
import App from './pagination.vue';

Vue.component('paginate', VuejsPaginate),

new Vue({
    el: '#pagination',

    render: h => h(App),
})

