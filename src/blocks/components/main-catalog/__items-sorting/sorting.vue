<template>
	<div id='myapp'>

		<!-- div 1 -->
		<div class='div' v-bind:class="[isActive ? 'red' : 'blue']" v-on:click="toggleClass"></div>

		<!-- div 2 -->
		<div class='div' v-bind:class="[isActive ? 'blue' : 'red']" v-on:click="toggleClass"></div>

	</div>
	
</template>

<script>
	import Vue from 'vue';

	export default {
		name: "sorting",
		data: {
			isActive: true
		},
		methods: {
			toggleClass: function(event){
				// Check value
				if(this.isActive){
					this.isActive = false;
				}else{
					this.isActive = true;
				}

			}
		},
	}
</script>

