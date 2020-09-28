<template>
    <div v-if="itemList" class="mb-16">
        <div class="flex w-full justify-between items-center pr-5 pl-4 mb-5">
            <h1 class="text-2xl font-bold hover:underline">{{ title }}</h1>
            <h2 class="text-gray-600 uppercase font-bold text-xs">See all</h2>
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
</template>

<script lang="ts">
import Vue from 'vue'
import * as playerService from '@/services/player.service';

import thumbnailItem from './ThumbnailItem/ThumbnailItem.vue'

export default Vue.extend({
    props : ['title','windowWidth','isAlbum','item'],

    data(){
        return {
            itemList : null as unknown as any[],
            mounted : false,
            loading: false,
            error : null as unknown as string
        }
    },

    components : {
        thumbnailItem
    },
    mounted() {
        this.populateList()
    },

    methods: {
        populateList () {
            let method: any
            this.loading = true;
            if(this.isAlbum){
                method = playerService.getAlbumsByLanguageID(this.item.id,7,0)
            }
            method
                .then(({data}: any)=> {
                    this.loading = false;
                    this.itemList = data.length > 0 ? data  : null;
                })
                .catch((err: any) => {
                    this.loading = false;
                    if(err.response){
                        this.error = err.reaponse.data.error
                    }else{
                        this.error = err.message
                    }
                })
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