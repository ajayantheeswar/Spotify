<template>
    <div class="pt-4 pb-4 lg:mx-5">
        <h2 class="text-lipgrey text-lg">{{ title }}</h2>
        <ul class="flex flex-col mt-2">
            <router-link class="hover:text-spgreen pt-2" v-for="item in elements" :key="item.name" :to="item.to">{{item.name}}</router-link>
        </ul>
    </div>
</template>

<style lang="postcss" scoped>
    .footer-container {
        @apply pt-16 ;
        width: 100%;
        background-color: black;
    }
</style>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
    props : ['title','elements'],
    mounted () {
        console.log(this.elements)
    }
})
</script>