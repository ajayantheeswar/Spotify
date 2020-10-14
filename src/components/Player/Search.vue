<template>
	<div class="m-3">
		<SearchBar @searchClicked="search"/>
		<div v-if="searched" class="w-11/12 mx-auto pt-10">
			<!-- Albumn Search Result Component -->
			<thumb-nail-view-container 
                :windowWidth="windowWidth"
				:searchAlbum="searchQuery"
                :isAlbum="true"
                :title="`Albums for '${searchQuery}' `" />
		</div>
    </div>
</template>

<script lang="ts">
import Vue from "vue";
import SearchBar from '@/components/Search/SearchBar/SearchBar.vue';
import * as SearchService from '@/services/search.service.ts'
import ThumbNailViewContainer from '@/components/Player/ThumbnailContainer/ThumbNailCointainer.vue';
import router from '@/router/index';


export default Vue.extend({
	props:['windowWidth'],
	components: {
		SearchBar,
		ThumbNailViewContainer
	},
	data() {
        return {
			searchQuery:null as unknown as string,
            songResults : null as unknown as any,
            albumResults : null as unknown as any,
			artistResults : null as unknown as any,
			searched : false,

        } 
	},
	methods : {
		search(query: any){
			if(query === this.searchQuery)return
			this.searchQuery=query;
			this.$router.push('/player/search/'+query)
			!this.searched ? this.searched = true: null;
		}
	},
	updated() {
		console.log('seached-updated')
	},
	mounted() {
		console.log('seached-mouunted')
		const query = this.$route.params.query;
		if(query) this.searchQuery = query; this.searched = true

	}
});
</script>

<style></style>
