<template>
    <div class="track-queue absolute pt-3 font-bold text-2xl flex flex-col items-center">
        <div class="pb-2">
            <p>Music Queue</p>
        </div>
        <hr class="w-11/12 mb-2">
        <ul class="space-y-4 pt-3 overflow-y-scroll queue-list w-full p-6">
            <AlbumDetails
                v-for="track in srcList"
                :isPlaying="track.id === srcList[currentPlayingIndex].id"
                @clicked="changeTrack"
                :key="track.id"
                :isQueue="true"
                :track="track" />
        </ul>
    </div>    
</template>

<script lang="ts">
import Vue from 'vue';
//import QueueItem from './QueueItem.vue';
import AlbumDetails from '../AlbumDetails/AlbumDetails.vue'
import {playerEventBus} from '@/main';

export default Vue.extend({
    props : [
        'srcList',
        'currentPlayingIndex'
    ],
    components : {
        AlbumDetails
    },
    methods : {
        changeTrack(trackID: any){
            playerEventBus.$emit('ChangeQueueTrackWithID',{trackID})
        }
    }
})
</script>

<style lang="postcss" scoped>
    .track-queue{
        height: 70vh;
        background: black;
        width: 340px;
        bottom:100%;
        right:0%
    }

    .queue-list::-webkit-scrollbar {
        width: 2px;
    }

    .queue-list::-webkit-scrollbar-track {
        box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    }

    .queue-list::-webkit-scrollbar-thumb {
        @apply bg-spgreen1;
        outline: 1px solid black;
    }

</style>