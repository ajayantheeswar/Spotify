<template>
    <div v-if="mounted" class="fixed create-playlist text-white flex pt-2">
        <div class="mx-auto pl-20 pr-20 relative">
            <h1 class="text-2xl mx-auto p-2">Select Playlist</h1>
            <hr>
            <p v-show="success" class="text-spgreen pl-2 pt-2">Success !</p>
            <ul class="playlist-list p-3 overflow-y-scroll">
                <p v-for="item in playlistList" 
                :key="item.id" 
                @click.stop="playlistSelect(item.id)"
                class="cursor-pointer font-bold" > {{ item.name }} </p>
            </ul>
            <p class="font-bold text-2xl absolute right-0 top-0 cursor-pointer m-3 p-2" @click="xClicked">X</p>
        </div>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';
import * as PlayerService from '@/services/player.service'


export default Vue.extend({

    props: ['track'],

    data () {
        return {
            playlistList : null as unknown as any,
            success : false,
            loading : false,
            error : null as unknown as string,
            mounted : false
        }
    },

    methods:{
        xClicked() {
            this.$emit('closeClicked')
        },
        getUserPlaylist (cb: any) {
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
        },
       playlistSelect(PlaylistID: string) {
           PlayerService.addMusicToplayList(this.track.id,PlaylistID)
            .then(({data}: any) => {
                this.xClicked();
                console.log(data)
            })
            .catch(err => {
                if(err.response) this.error = err.response.data.error
                else this.error = err.message
            })
        }
    },
    mounted() {
        this.getUserPlaylist(() => {
            this.mounted = true
        })
    }
})
</script>


<style lang="postcss" scoped>
    .create-playlist{
        background-color : rgba(0,0,0,0.5);
        width: 100%;
        height: 300px;
        z-index: 200;
        top : 50%;
        left: 0;
        transform: translateY(-50%);
    }

    .background-black-opacity {
        background-color: rgba(71, 71, 71, 0.5);
    }

    .background-black-opacity::placeholder{
        color: #5a5a5a;
    }

    .playlist-list {
        width:350px;
    }

    .playlist-list::-webkit-scrollbar {
        width: 2px;
    }

    .playlist-list::-webkit-scrollbar-track {
        box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    }

    .playlist-list::-webkit-scrollbar-thumb {
        @apply bg-spgreen1;
        outline: 1px solid black;
    }


</style>