<template>
    <div class="pt-8 p-8 flex">
        <div v-if="image" class="inline-block">
            <img :src="image" style="height:200px" class="m-0 inline-block" alt=""/>
        </div>
         <div v-else class="text-lightgrey3 bg-gray-900 fill-current p-3">
            <svg width="60" height="60" class="mx-auto" viewBox="0 0 80 81" xmlns="http://www.w3.org/2000/svg">
                <title>Playlist Icon</title>
                <path d="M25.6 11.565v45.38c-2.643-3.27-6.68-5.37-11.2-5.37-7.94 0-14.4 6.46-14.4 14.4s6.46 14.4 14.4 14.4 14.4-6.46 14.4-14.4v-51.82l48-10.205V47.2c-2.642-3.27-6.678-5.37-11.2-5.37-7.94 0-14.4 6.46-14.4 14.4s6.46 14.4 14.4 14.4S80 64.17 80 56.23V0L25.6 11.565zm-11.2 65.61c-6.176 0-11.2-5.025-11.2-11.2 0-6.177 5.024-11.2 11.2-11.2 6.176 0 11.2 5.023 11.2 11.2 0 6.174-5.026 11.2-11.2 11.2zm51.2-9.745c-6.176 0-11.2-5.024-11.2-11.2 0-6.174 5.024-11.2 11.2-11.2 6.176 0 11.2 5.026 11.2 11.2 0 6.178-5.026 11.2-11.2 11.2z" fill="currentColor" fill-rule="evenodd"></path>
            </svg>
        </div>
        <div class="flex flex-col justify-end pl-6">
            <h6 class="text-sm font-bold">{{!isplaylist ? 'Album' : 'Playlist'}}</h6>
            <h1 class="text-4xl font-bold">{{ albumName }}</h1>
            <div class="space-x-4 flex">
                <h1 class="text-sm">{{ musicDirector }}</h1>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
    props : ['albumName','musicDirector','image','isplaylist']
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