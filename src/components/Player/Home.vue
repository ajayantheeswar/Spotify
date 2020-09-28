<template>
	<div class="flex flex-col pt-0">
        <div class="bg-black sticky top-0 left-0 w-full p-3 pr-5 pl-5 text-xl font-bold z-10">Navbar</div>
        <div class="p-4">
            <thumb-nail-view-container 
                v-for="language in languages" 
                :key="language.id" 
                :item="language" 
                :windowWidth="windowWidth" 
                :isAlbum="true"
                :title="`Popular ${language.language} Songs !`" />
        </div>
        <p v-if="loading">Loading</p>
    </div>
</template>

<script lang="ts">
import Vue from "vue";
import ThumbNailViewContainer from '@/components/Player/ThumbnailContainer/ThumbNailCointainer.vue'
import {getLanguages} from '@/services/player.service';

export default Vue.extend({
    props:['windowWidth'],
    data() {
        return {
            languages : null as unknown as any[],
            loading : false,
            error : null
        }
    },
	components: {
        ThumbNailViewContainer,
    },
    methods : {
        getLanguagesList(){
            this.loading = true;
            getLanguages()
                .then(({data})=>{
                    this.loading = false;
                    this.languages = data
                })
                .catch(err => {
                    this.loading = false;
                    if(err.response){
                        this.error = err.response.data.error;
                    }else{
                        this.error = err.message;
                    }
                    console.log(this.error)
                })
        }
    },
    mounted() {
        this.getLanguagesList()
    }
});
</script>

<style></style>
