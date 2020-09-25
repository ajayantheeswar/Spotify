<template>
    <div class="pt-8 p-8 flex">
        <div class="inline-block">
            <img src="@/assets/master.jpeg" style="height:200px" class="m-0 inline-block" alt=""/>
        </div>
        <div class="flex flex-col justify-end pl-6">
            <h6 class="text-sm font-bold">Album</h6>
            <h1 class="text-4xl font-bold">Master</h1>
            <div class="space-x-4 flex">
                <h1 class="text-sm">Anirudh Ravichander</h1>
                <h1 class="text-sm">Anirudh Ravichander</h1>
                <h1 class="text-sm">Anirudh Ravichander</h1>
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