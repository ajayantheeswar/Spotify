<template>
    <div class="bg-lightgrey2 p-3 col-span-1 relative flex-col thumbnail">
                <div class="mx-auto pb-3" style="width:150px;">
                    <div v-if="true" class="text-lightgrey3 bg-gray-900 fill-current p-3">
                        <svg width="60" height="60" class="mx-auto" viewBox="0 0 80 81" xmlns="http://www.w3.org/2000/svg">
                            <title>Playlist Icon</title>
                            <path d="M25.6 11.565v45.38c-2.643-3.27-6.68-5.37-11.2-5.37-7.94 0-14.4 6.46-14.4 14.4s6.46 14.4 14.4 14.4 14.4-6.46 14.4-14.4v-51.82l48-10.205V47.2c-2.642-3.27-6.678-5.37-11.2-5.37-7.94 0-14.4 6.46-14.4 14.4s6.46 14.4 14.4 14.4S80 64.17 80 56.23V0L25.6 11.565zm-11.2 65.61c-6.176 0-11.2-5.025-11.2-11.2 0-6.177 5.024-11.2 11.2-11.2 6.176 0 11.2 5.023 11.2 11.2 0 6.174-5.026 11.2-11.2 11.2zm51.2-9.745c-6.176 0-11.2-5.024-11.2-11.2 0-6.174 5.024-11.2 11.2-11.2 6.176 0 11.2 5.026 11.2 11.2 0 6.178-5.026 11.2-11.2 11.2z" fill="currentColor" fill-rule="evenodd"></path>
                        </svg>
                    </div>
                    <div v-else>
                        <img src="" />
                    </div>
                </div>
                <div class="p-2 space-y-2">
                    <h2 class="font-bold">{{ 'Aashiqui 2' }}</h2>
                    <h3 class="text-lightgrey1 fontSize capitalize">{{'Anirudh Ravivhandran'}}</h3>
                </div>
                <div>
                    <button class="bg-spgreen rounded-full absolute h-10 w-10 hidden playbutton focus:outline-none">►</button>
                </div>
            </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
})
</script>

<style lang="postcss" scoped>
    .fontSize {
        font-size: 12px;
    }

    .playbutton {
        right : 1rem;
        bottom : 1rem;
    }

    .thumbnail:hover .playbutton {
        @apply block
    }
</style>