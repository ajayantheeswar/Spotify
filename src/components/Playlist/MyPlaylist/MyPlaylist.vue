<template>
	<div v-if="mounted && playlistList" class="m-5">
        <ul class="grid grid-flow-col grid-cols-6 grid-rows-3 gap-4">
            <thumbNailItem 
                v-for="listItem in playlistList"
                :isPlaylist="true"
                :thumItem="listItem" 
                :key="listItem.id"
            />
        </ul>
    </div>
</template>

<script lang="ts">
import Vue from "vue";
import * as PlayerService from '@/services/player.service';
import thumbNailItem from '@/components/Player/ThumbnailContainer/ThumbnailItem/ThumbnailItem.vue'

export default Vue.extend({
    data() {
        return {
            loading : false,
            mounted : false,
            playlistList: null as unknown as any,
            error : null as unknown as any
        }
    },
	components: {
        thumbNailItem
    },
    methods : {
        getPlaylists(cb: any) {
            this.loading = true
            PlayerService.getPlaylistOfUser()
                .then(({data}: any) => {
                    this.loading = false
                    this.playlistList = data;
                    cb()
                })
                .catch(err => {
                    this.loading = false;
                    if(err.response) this.error = err.response.data.error
                    else this.error = err.message
                    cb()
                })
        }
    },
    mounted() {
        this.getPlaylists(()=>{
            this.mounted = true
        })
    }
});
</script>

<style lang="postcss" scoped>

</style>