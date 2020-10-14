<template>
	<div class="flex flex-col pt-0">
		<ul class="w-11/12 mx-auto mt-2 bg-lightgrey2 rounded p-2 pl-5 pr-5 flex space-x-10">
			<button class="font-bold">My Playlists</button>
			<!-- <button class="font-bold">value</button>
			<button class="font-bold">value</button>
			<button class="font-bold">value</button> -->
		</ul>
		<div class="w-11/12 mx-auto">
			<component :is="current"></component>
		</div>
    </div>
</template>

<script lang="ts">
import Vue from "vue";
import MyPlaylist from '@/components/Playlist/MyPlaylist/MyPlaylist.vue'

export default Vue.extend({
	components: {
		myPlaylist : MyPlaylist
	},
	data(){
		return {
			current : 'myPlaylist'
		}
		
	}
});
</script>

<style lang="postcss" scoped>

</style>