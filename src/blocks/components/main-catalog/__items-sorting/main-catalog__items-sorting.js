import Vue from 'vue';
import toggleActive from './toggleActive.vue';

new Vue({
    el: '#view-sorting',
    components: {
        toggleActive
    },

    render: h => h(toggleActive),
})