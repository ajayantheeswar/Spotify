<template>
    <div>
        <div class="m-8">
            <div v-if="itemList" class="mb-16">
                <div class="flex w-full justify-between items-center pr-5 pl-4 mb-5">
                    <h1 class="text-2xl font-bold hover:underline">{{ title }}</h1>
                </div>
                <ul v-if="itemList" class="thumbnail-list grid gap-4 ml-3">
                    <thumbnailItem 
                        v-for="(listItem,i) in itemList"
                        :thumItem="listItem" 
                        :key="listItem.id" 
                        v-show="i*220 < windowWidth"/>
                </ul>
                <p v-if="loading">Loading ...</p>
                <div class="flex justify-center">
                    <button class="pageButton" :disabled="!hasPrevPage" @click="prevPage">Prev</button>
                    <button class="pageButton" :disabled="!hasNextPage" @click="nextPage">Next</button>
                </div>
            </div>
            <div v-if="itemList && itemList.length === 0 && searchAlbum && searchAlbum !== ''" class="text-center">
                <p>No Results Found ... Try Again ...</p>
            </div>
        </div>
        
    </div> 
</template>
<script lang="ts">
import Vue from 'vue';
import * as SearchService from '@/services/search.service.ts';
import thumbnailItem from '@/components/Player/ThumbnailContainer/ThumbnailItem/ThumbnailItem.vue'
export default Vue.extend({
    props : ['windowWidth'],
    components:{
        thumbnailItem
    },
    data() {
        return {
            itemList : null as unknown as any[],
            mounted : false,
            loading: false,
            error : null as unknown as string,
            currentPage: null as unknown as number,
            totalDocuments : null as unknown as number,
            searchQuery: null as unknown as string,
            title: `Albums Search Results For '${this.$route.params.query}'`
        }
    },
    computed: {
        TotalPages() {
          if(!this.totalDocuments || this.totalDocuments <= 0) return 0
          return Math.ceil(+this.$data.totalDocuments/2);
        },
        hasNextPage(){
            const t = this.TotalPages as unknown as number;
            return t > this.$data.currentPage ;
        },
        hasPrevPage() {
            return this.$data.currentPage > 1
        }
    },
    mounted() {
        const page = this.$route.query.page ? +this.$route.query.page : 1
        const query= this.$route.params.query;
        this.searchQuery = query;
        this.populateList(query,page);
        console.log('asd')
    },
    methods:{
        populateList(query: string,page: number) {
             this.loading = true;
             SearchService.getSearchAlbumResults(query,page)
                .then(({data}: any)=> {
                    this.loading = false;
                    if(!(this.searchQuery && this.searchQuery !== '')) return

                    this.itemList = data.albums ;
                    this.totalDocuments = +data.totalResults
                    this.currentPage = +data.page

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
        nextPage(){
            const page = this.currentPage + 1
            this.populateList(this.searchQuery,page);
        },
        prevPage() {
            const page = this.currentPage - 1
            this.populateList(this.searchQuery,page);
        }
    }
})
</script>
<style lang="postcss" scoped>
    .pageButton{
        @apply p-2 pr-4 pl-4 bg-spgreen rounded-sm m-2
    }
    .pageButton:disabled {
        @apply bg-gray-400
    }

    .thumbnail-list{
        @apply grid-cols-7 ;
        grid-template-columns: repeat(8,175px);
    }
</style>