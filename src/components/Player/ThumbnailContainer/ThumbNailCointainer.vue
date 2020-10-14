<template>
    <div>
        <div v-if="itemList" class="mb-16">
            <div class="flex w-full justify-between items-center pr-5 pl-4 mb-5">
                <h1 class="text-2xl font-bold hover:underline">{{ title }}</h1>
                <h2 @click="seeAllClicked" class="text-gray-600 uppercase font-bold text-xs">See all</h2>
            </div>
            <ul v-if="itemList" class="thumbnail-list grid gap-4 ml-3">
                <thumbnailItem 
                    v-for="(listItem,i) in itemList"
                    :thumItem="listItem" 
                    :key="listItem.id" 
                    v-show="i*220 < windowWidth"/>
            </ul>
            <p v-if="loading">Loading ...</p>
        </div>
        <div v-if="itemList && itemList.length === 0 && searchAlbum && searchAlbum !== ''" class="text-center">
            <p>No Results Found ... Try Again ...</p>
        </div>
    </div>
    
</template>

<script lang="ts">
import Vue from 'vue'
import * as playerService from '@/services/player.service';
import * as SearchService from '@/services/search.service.ts'
import thumbnailItem from './ThumbnailItem/ThumbnailItem.vue'

export default Vue.extend({
    props : ['title','windowWidth','isAlbum','language','searchAlbum'],

    data(){
        return {
            itemList : null as unknown as any[],
            mounted : false,
            loading: false,
            error : null as unknown as string
        }
    },
    updated() {
        console.log('thuib-updated')
    },
    components : {
        thumbnailItem
    },
    mounted() {
        this.populateList()
        console.log('thum-mounted')
    },
    watch: {
        searchAlbum: function() {
            this.populateList()
        }
    },
    methods: {
        populateList () {
            let method: any
            this.loading = true;
            if(this.language){
                method = playerService.getAlbumsByLanguageID(this.language.id,7,0)
            }else if(this.searchAlbum){
                method = SearchService.getGeneralResults(this.searchAlbum)
            }
            if(!method){ 
                this.loading = false
                return 
            }
            method
                .then(({data}: any)=> {
                    this.loading = false;
                    if(this.language)   this.itemList = data.length > 0 ? data  : null;
                    else if(this.searchAlbum) {
                         this.itemList = data.albums ;
                    }
                    console.log(data)
                })
                .catch((err: any) => {
                    this.loading = false;
                    if(err.response){
                        this.error = err.reaponse.data.error
                    }else{
                        this.error = err.message
                    }
                })
        },
        seeAllClicked() {
            if(this.language) this.languageSeeAllHandler()
            else if(this.searchAlbum) this.seeAllSearchAlbumHandler()
        },
        languageSeeAllHandler(){
            return null
        },
        seeAllSearchAlbumHandler() {
            this.$router.push('/player/search/albums/'+this.searchAlbum)
        }
    }
})
</script>

<style lang="postcss" scoped>
    .thumbnail-list{
        @apply grid-cols-7 ;
        grid-template-columns: repeat(8,175px);
    }

</style>