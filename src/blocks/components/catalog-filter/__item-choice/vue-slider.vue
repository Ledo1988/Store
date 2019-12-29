<template>
	<div id="catalog-filter__slider">
		<vue-slider
				v-model="value"
				:enable-cross="false"
				:min="1000"
				:max="20000"
				:interval="100"
				:tooltip-formatter="formatter2"
		></vue-slider>
	</div>
</template>

<script>
	import Vue from 'vue';
	import VueSlider from 'vue-slider-component';

	export default {
		components: {
			VueSlider
		},
		data: function () {

			return {
				value: [1000, 20000],
				formatter2: v => `${('' + v).replace(/\B(?=(\d{3})+(?!\d))/g, ' ')} ₽`,

			}
		}
	}
</script>
