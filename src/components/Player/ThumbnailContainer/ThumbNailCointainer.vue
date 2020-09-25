<template>
    <div class="mb-16">
        <div class="flex w-full justify-between items-center pr-5 pl-4 mb-5">
            <h1 class="text-2xl font-bold hover:underline">{{ title }}</h1>
            <h2 class="text-gray-600 uppercase font-bold text-xs">See all</h2>
        </div>
        <ul class="thumbnail-list grid gap-4 ml-3">
            <thumbnailItem v-for="i in 8" :key="i" v-show="i*220 < windowWidth"/>
         </ul>
        
    </div>
</template>

<script lang="ts">
import Vue from 'vue'

import thumbnailItem from './ThumbnailItem/ThumbnailItem.vue'

export default Vue.extend({
    props : ['title','windowWidth'],
    components : {
        thumbnailItem
    },
    mounted() {
        console.log(this.windowWidth);
    }
})
</script>

<style lang="postcss" scoped>
    .thumbnail-list{
        @apply grid-cols-7 ;
        grid-template-columns: repeat(8,175px);
    }

</style>