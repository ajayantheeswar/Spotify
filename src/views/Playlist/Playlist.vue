<template>
    <div v-if="mounted && !error">
        <div v-if="trackItem" class="bg-black sticky top-0 left-0 w-full p-3 pr-5 pl-5 text-xl font-bold z-10">Navbar</div>
        <Albumportrait
            :isplaylist="true"
            :musicDirector="trackItem.name"
            :albumName="trackItem.album_name"/>
        <AlbumControl
            :isplaylist="true"
            @deletePlaylist="deletePlaylist"
            :owner="owner" 
            @addToQueue="addToQueue"
            @playAlbum="playAlbum" />
        <ul class="mt-7 space-y-4">
           <AlbumSongItem 
                v-for="track in trackItem.track"
                :AlbumName="track.album_name"
                @addOneToQueue="addOneToQueue"
                :albumID="track.album_id || trackItem.id"
                :owner="owner"
                @playClick="playSong"
                @removeFromPlaylist="removeFromPlaylist"
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
            loading : false,
            owner : false
        }
    },
    methods : {
        getPlaylist(playlistID: any , cb: any){
            this.loading = true
            PlayerService.getPlaylistByID(playlistID)
                .then(({data}) => {
                    this.loading = false
                    this.trackItem = data ? data.updatedPlaylist: null
                    this.owner = data.owner;
                    console.log(data)
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
        },
        removeFromPlaylist(trackID: any){
            if(!this.owner) return
            PlayerService.removeMusicFromplayList(trackID,this.trackItem.id)
                .then(({data}: any) => {
                    
                if(data.success)
                    this.trackItem.track = this.trackItem.track.filter((track: any) => track.id !== trackID) 

                console.log(data)
            })
            .catch(err => {
                if(err.response) this.error = err.response.data.error
                else this.error = err.message
            })
        },
        deletePlaylist(){
            if(!this.owner) return
            PlayerService.deletePlaylist(this.trackItem.id)
               .then(({data}: any) => {
                   this.$router.push('/player')
               })
               .catch(err => {
                   console.log(err)
               })
        }
    },
    mounted() {
        this.getPlaylist(this.$route.params.playlistID,() => {
            this.mounted = true
        })
    }
})
</script>

<style lang="postcss" scoped>
    
</style>