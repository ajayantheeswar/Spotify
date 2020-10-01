<template>
    <div>
        <div class="flex justify-between song-item pr-5 m-2 rounded cursor-pointer pt-2 pb-1 transition duration-300 ease-in-out" @click="playClick">
            <div class="flex">
                <span class="song-symbol"></span>
                <div class="song-artist ml-10 text-xs space-y-1">
                    <p class="text-sm">{{ track.track_name }}</p>
                    <div class="text-lightgrey1 flex space-x-4">
                        <p v-for="artist in track.track_artist" :key="artist.id">{{ artist.artist.artist_name }}</p>
                    </div>
                </div>
            </div>
            <div v-if="!isAlbum">
                <p class="text-lightgrey3 text-xs">{{ AlbumName }}</p>
            </div>
            <div class="flex items-center">
                <div class="text-white text-2xl flex items-start relative option w-10 pb-3">
                    <p>.</p>
                    <p>.</p>
                    <p>.</p>
                    <div class="hidden absolute song-drop cursor-pointer" @click.stop>
                        <p class="hover:bg-gray-800 p-1 rounded" @click="addOneToQueue">Add to Queue</p>
                        <p v-if="isAuth" 
                            class="hover:bg-gray-800 p-1 rounded" 
                            @click="ShowAddSongToPlaylist=true">Add to playlist</p>
                         <p v-if="isAuth && owner"
                            @click="removeFromPlaylist" 
                            class="hover:bg-gray-800 p-1 rounded" >Remove from Playlist</p>
                    </div>
                </div>
                <p class="text-sm">23 : 00</p>
            </div>
        </div>
        <AddSongToPlaylist
            :track="track"
            @click.stop
            @closeClicked="ShowAddSongToPlaylist=false"
            v-if="ShowAddSongToPlaylist"
        />
    </div>
    
</template>

<script lang="ts">
import Vue from 'vue'
import {playerEventBus} from '@/main';
import store from '@/store/index'
import AddSongToPlaylist from '@/components/Playlist/AddSongToPlaylist/AddSongToPlaylist.vue';



export default Vue.extend({

    data() {
        return {
            ShowAddSongToPlaylist : false
        }
    },
    props : ['isAlbum',"track","AlbumName","owner"],
    components:{
         AddSongToPlaylist
    },
    methods : {
        log(message: string) {
            console.log(message)
        },
        addOneToQueue(){
            this.$emit('addOneToQueue',this.track)
        },
        playClick(){
            this.$emit('playClick',this.track)
        },
        removeFromPlaylist(){
            this.$emit('removeFromPlaylist',this.track.id)
        } 
    },
    computed: {
        isAuth () {
            return this.$store.getters.isAuthenticated
        }
    },
  watch: {
    isAuth (newAuthStatus) {
      if(!newAuthStatus) console.log('user-logged-out') 
    }
  }
    
    
})
</script>

<style lang="postcss" scoped>
    .option .drop {
        @apply p-2 rounded;
        font-size: 0.7rem;
        left: 70%;
        top:70%;
        width :100px;
        background-color : #000000;

    }

    .option:hover .drop {
        @apply flex flex-col items-center
    }

    .option .song-drop {
        @apply p-2 rounded;
        font-size: 0.7rem;
        right: 80%;
        top:70%;
        width :100px;
        background-color : #000000;

    }

    .option:hover .song-drop {
        @apply flex flex-col items-center
    }

    .option:hover .drop {
        @apply flex flex-col items-center
    }

    .song-item:hover {
        background-color : hsla(0,0%,100%,.1);
    }

    .song-item:hover .song-symbol::before {
        content : '►';
        @apply p-2 ml-4;
    }

    .song-symbol::before {
        content: '𝅘𝅥𝅮';
        @apply p-2 ml-4;
    }
</style>