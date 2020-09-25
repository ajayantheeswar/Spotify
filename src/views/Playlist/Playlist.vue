<template>
    <div>
        <div class="bg-black sticky top-0 left-0 w-full p-3 pr-5 pl-5 text-xl font-bold z-10">Navbar</div>
        <Albumportrait />
        <AlbumControl />
        <ul class="mt-7 space-y-4">
           <AlbumSongItem />
           <AlbumSongItem />
           <AlbumSongItem />
           <AlbumSongItem />
           <AlbumSongItem />
           <AlbumSongItem />
        </ul>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Albumportrait from '@/components/Album/AlbumPortrait.vue';
import AlbumControl from '@/components/Album/AlbumControl.vue';
import AlbumSongItem from '@/components/Album/SongItem.vue';


export default Vue.extend({
    components : {
        Albumportrait,
        AlbumControl,
        AlbumSongItem
    }
})
</script>

<style lang="postcss" scoped>
    
</style>