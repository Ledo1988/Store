<template>
	<paginate :page-count="26"
			  :page-range="3"
			  :margin-pages="5"
			  :prev-class="'pagination-prev'"
			  :next-class="'pagination-next'"
			  :container-class="'main-catalog__pagination'"
			  :page-class="'page-item'" :clickHandler="pageCallback">

		<span slot="prevContent">Changed previous button</span>
		<span slot="nextContent">Changed next button</span>
	</paginate>
</template>

<script>
	import Vue from 'vue';
	import  VuejsPaginate from 'vuejs-paginate';

	export default {
		name: "pagination",
		data: {

		},
		methods: {
			pageCallback: function(pageNum){
				console.log(pageNum)
			}
		}
	}
</script>
