<template>
	<div class="flex flex-col pt-0">
        <div class="bg-black sticky top-0 left-0 w-full p-3 pr-5 pl-5 text-xl font-bold z-10">Navbar</div>
        <div class="p-4">
            <thumb-nail-view-container :windowWidth="windowWidth" title="Popular Tamil Songs !" />
            <thumb-nail-view-container :windowWidth="windowWidth" title="Popular Tamil Songs !" />
            <thumb-nail-view-container :windowWidth="windowWidth" title="Popular Tamil Songs !" />
            <thumb-nail-view-container :windowWidth="windowWidth" title="Popular Tamil Songs !" />
            <thumb-nail-view-container :windowWidth="windowWidth" title="Popular Tamil Songs !" />
            <thumb-nail-view-container :windowWidth="windowWidth" title="Popular Tamil Songs !" />
        </div>
        
    </div>
</template>

<script lang="ts">
import Vue from "vue";
import ThumbNailViewContainer from '@/components/Player/ThumbnailContainer/ThumbNailCointainer.vue'

export default Vue.extend({
    props:['windowWidth'],
	components: {
        ThumbNailViewContainer
	},
});
</script>

<style></style>
