<template>
	<div id='view-sorting'>
		<!-- a1 -->
		<a class="items-sorting__main-item" v-bind:class="[isActive ? 'active' : '']" @click="toggleClass()" href="javascript:void(0);">
			<img src="img/sprites/sprite.svg#ico_sorting-1" width="19" height="18" alt="Сортировка">
		</a>

		<!-- a2 -->
		<a class="items-sorting__main-item" v-bind:class="[isActive ? '' : 'active']" @click="toggleClass()" href="javascript:void(0);" >
			<img src="img/sprites/sprite.svg#ico_sorting-2" width="19" height="18" alt="Сортировка">
		</a>

	</div>
</template>

<script>
	import Vue from 'vue';

	export default {

		data: function () {
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
		}
	}
</script>

