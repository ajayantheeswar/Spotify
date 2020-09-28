<template>
    <div class="flex flex-col pt-0">
        <div class="bg-black sticky top-0 left-0 w-full p-3 pr-5 pl-5 text-xl font-bold z-10">Album</div>
        <div class="bg-gray-200 rounded m-2 mt-4 w-1/2 text-black p-2 pr-6 pl-6 mx-auto capitalize nav-links">
            <router-link to="create-album">Create Album</router-link>
        </div>
        <div class="mt-3 border-lightgrey1 m-20 p-4 bg-lightgrey2 rounded">
            <router-view />
        </div>
    </div> 
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
    
})
</script>

<style lang="postcss" scoped>
    .nav-links a.router-link-active {
        @apply underline
    }
</style>