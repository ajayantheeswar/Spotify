<template>
    <div class="fixed create-playlist text-white flex pt-2">
        <div class="mx-auto pl-20 pr-20 relative">
            <h1 class="text-2xl mx-auto p-2">Create Playist</h1>
            <hr>
            <p v-show="success" class="text-spgreen pl-2 pt-2">Success !</p>
            <input
                v-model="playlistName" 
                text="input" 
                class="m-10  rounded background-black-opacity pt-4 p-4 outline-none" 
                placeholder="Playlist Name" />
            <button 
             @click="createPlaylist"
             class="bg-spgreen p-2 rounded-full pl-3 pr-3 font-bold" >Create Playlist</button>
            <p class="font-bold text-2xl absolute right-0 top-0 cursor-pointer m-3 p-2" @click="xClicked">X</p>
        </div>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';
import * as PlayerService from '@/services/player.service'


export default Vue.extend({

    data () {
        return {
            playlistName : '',
            success : false
        }
    },

    methods:{
        xClicked() {
            this.$emit('closeClicked')
        },
        createPlaylist () {
            if (this.playlistName === '') return
            PlayerService.createPlaylist(this.playlistName)
                .then(({data}: any) => {
                    this.success = data.success
                    this.xClicked()
                })
                .catch(err => {
                    console.log(err)
                })
        }
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
        transform: translateY(-50%);
    }

    .background-black-opacity {
        background-color: rgba(71, 71, 71, 0.5);
    }

    .background-black-opacity::placeholder{
        color: #5a5a5a;
    }
</style>