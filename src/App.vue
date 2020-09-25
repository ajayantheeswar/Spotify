<template>
	<div v-if="mounted" id="app">
		<router-view></router-view>
	</div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
	data(){
		return {
			mounted : false
		}
	},
	components: {

	},
	mounted() {
		this.$store.dispatch('checkAuthOnLoading',
			(val: any)=> {
				this.mounted = true;
				
			})
		console.log('a')
	}
});
</script>

<style></style>
