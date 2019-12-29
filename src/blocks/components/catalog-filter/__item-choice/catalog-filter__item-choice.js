import Vue from 'vue';
import VueSlider from 'vue-slider-component';
import App from './vue-slider.vue';

new Vue({
	el: '#catalog-filter__slider',
	components: {
		VueSlider: window['vue-slider-component']
	},
	render: h => h(App),
})