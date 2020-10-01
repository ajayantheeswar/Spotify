<template>
    <div class="bg-lightgrey2 p-3 col-span-1 relative flex-col thumbnail cursor-pointer" @click.prevent="goToAlbum">
        <div class="mx-auto pb-3" style="width:150px;">
            <div v-if="!thumItem.image_url || thumItem.image_url === ''" class="text-lightgrey3 bg-gray-900 fill-current p-3">
                <svg width="60" height="60" class="mx-auto" viewBox="0 0 80 81" xmlns="http://www.w3.org/2000/svg">
                    <title>Playlist Icon</title>
                    <path d="M25.6 11.565v45.38c-2.643-3.27-6.68-5.37-11.2-5.37-7.94 0-14.4 6.46-14.4 14.4s6.46 14.4 14.4 14.4 14.4-6.46 14.4-14.4v-51.82l48-10.205V47.2c-2.642-3.27-6.678-5.37-11.2-5.37-7.94 0-14.4 6.46-14.4 14.4s6.46 14.4 14.4 14.4S80 64.17 80 56.23V0L25.6 11.565zm-11.2 65.61c-6.176 0-11.2-5.025-11.2-11.2 0-6.177 5.024-11.2 11.2-11.2 6.176 0 11.2 5.023 11.2 11.2 0 6.174-5.026 11.2-11.2 11.2zm51.2-9.745c-6.176 0-11.2-5.024-11.2-11.2 0-6.174 5.024-11.2 11.2-11.2 6.176 0 11.2 5.026 11.2 11.2 0 6.178-5.026 11.2-11.2 11.2z" fill="currentColor" fill-rule="evenodd"></path>
                </svg>
            </div>
            <div v-else>
                <img :src="thumItem.image_url" />
            </div>
        </div>
        <div class="p-2 space-y-2">
            <h2 class="font-bold">{{  !isPlaylist ? thumItem.album_name : thumItem.name }}</h2>
            <h3 v-if="!isPlaylist" class="text-lightgrey1 fontSize capitalize">{{thumItem.artist.artist_name}}</h3>
        </div>
        <div
            @click.stop.prevent="playAlbum"
        >
            <button              
                class="bg-spgreen rounded-full absolute h-10 w-10 hidden playbutton focus:outline-none">►</button>
        </div>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';
import * as PlayerService from '@/services/player.service';
import {playerEventBus} from '@/main'

export default Vue.extend({

    props:['thumItem','isPlaylist'],
    mounted(){
        console.log(this.thumItem)
    },
    data() {
        return {
            error : null as unknown as string
        }
    },
    methods : {
        goToAlbum(){
            //console.log(this.thumItem.id)
            if(!this.isPlaylist)
                this.$router.push('/player/album/'+this.thumItem.id)
            else this.$router.push('/player/playlist/'+this.thumItem.id)
        },
        playAlbum(cb: any){
            if(!this.isPlaylist)
                PlayerService.getAlbumByID(this.thumItem.id)
                    .then(({data}) => {
                        const length = data ? data : -1;
                        if(length.track.length >= 0){
                            playerEventBus.$emit('setTrackSource',{
                            trackList : data.track,
                            playnow: true
                        })
                        }
                    })
                    .catch(err => {

                        if(err.response){
                            this.error = err.response.data;
                            
                        }else{
                            this.error = err.message;
                        }
                    })
            else {
                PlayerService.getPlaylistByID(this.thumItem.id)
                    .then(({data}) => {
                        const length = data ?  data.updatedPlaylist : -1;
                        if(length.track.length >= 0){
                            playerEventBus.$emit('setTrackSource',{
                                trackList : data.updatedPlaylist.track,
                                playnow: true
                            })
                        }
                    })
                    .catch(err => {
                        if(err.response){
                            this.error = err.response.data;
                        }else{
                            this.error = err.message;
                        }
                    })
            }
        },
    }

})
</script>

<style lang="postcss" scoped>
    .fontSize {
        font-size: 12px;
    }

    .playbutton {
        right : 1rem;
        bottom : 1rem;
    }

    .thumbnail:hover .playbutton {
        @apply block
    }
</style>