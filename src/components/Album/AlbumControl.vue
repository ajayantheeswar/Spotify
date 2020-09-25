<template>
    <div class="p-3 pl-10 flex items-center space-x-6">
        <button class="bg-spgreen rounded-full h-12 w-12 flex justify-center items-center text-2xl play-button">►</button>
        <input id="favorite" hidden type="checkbox" :value="true"/>
        <label for="favorite" class="block w-6"><img src="@/assets/like.svg" alt='ile'></label>
        <div class="text-white text-2xl flex items-start relative option w-10">
            <p>.</p>
            <p>.</p>
            <p>.</p>
            <div class="hidden absolute drop cursor-pointer">
                <p class="hover:bg-gray-800 p-1 rounded">Add to Queue</p>
                <p class="hover:bg-gray-800 p-1 rounded">Add to playlist</p>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
    
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

    .play-button:hover {
        transform: scale(1.05);
    }
</style>