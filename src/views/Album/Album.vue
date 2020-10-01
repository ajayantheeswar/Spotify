<template>
    <div v-if="mounted && !error">
        <div v-if="trackItem" class="bg-black sticky top-0 left-0 w-full p-3 pr-5 pl-5 text-xl font-bold z-10">Navbar</div>
        <Albumportrait
            :musicDirector="trackItem.artist.artist_name"
            :image="trackItem.image_url"
            :albumName="trackItem.album_name"/>
        <AlbumControl 
            @addToQueue="addToQueue"
            @playAlbum="playAlbum" />
        <ul class="mt-7 space-y-4">
           <AlbumSongItem 
                v-for="track in trackItem.track"
                :AlbumName="trackItem.album_name"
                @addOneToQueue="addOneToQueue"
                @playClick="playSong"
                :isAlbum="true" 
                :key="track.id" 
                :track="track" />
        </ul>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Albumportrait from '@/components/Album/AlbumPortrait.vue';
import AlbumControl from '@/components/Album/AlbumControl.vue';
import AlbumSongItem from '@/components/Album/SongItem.vue';

import * as PlayerService from '@/services/player.service';

import {playerEventBus} from '@/main'

export default Vue.extend({
    components : {
        Albumportrait,
        AlbumControl,
        AlbumSongItem
    },
    data() {
        return {
            trackItem : null as unknown as any,
            mounted : false,
            error : null as unknown as string,
            loading : false
        }
    },
    methods : {
        getAlbum(albumID: any , cb: any){
            this.loading = true
            PlayerService.getAlbumByID(albumID)
                .then(({data}) => {
                    this.loading = false
                    this.trackItem = data ? data : null
                    cb()
                })
                .catch(err => {
                    this.loading = false;
                    if(err.response){
                        this.error = err.response.data;
                        
                    }else{
                        this.error = err.message;
                    }
                    cb()
                })
        },
        playAlbum(){
            playerEventBus.$emit('setTrackSource',{
                trackList : this.trackItem.track,
                playnow: true
            })
        },
        addToQueue() {
            playerEventBus.$emit('addToQueue',{
                trackList : this.trackItem.track,
                playnow : false
            })
        },
        addOneToQueue(track: any) {
            playerEventBus.$emit('addOneToQueue',{
                track : track
            })
        },
        playSong(track: any) {
            playerEventBus.$emit('setTrackSource',{
                trackList : this.trackItem.track,
                playnow : true,
                clickedTrack : track
            })
        }
    },
    mounted() {
        this.getAlbum(this.$route.params.albumID,() => {
            this.mounted = true
        })
    }
})
</script>

<style lang="postcss" scoped>
    
</style>