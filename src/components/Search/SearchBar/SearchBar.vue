<template>
    <div class="flex justify-center mt-5">
        <input v-model="query" placeholder="Search here ..." class="p-2 pl-3 pr-3 outline-none text-black w-6/12 rounded-l-sm"/>
        <button @click="search" class="text-white bg-spgreen1 p-1 pl-2 pr-2 outline-none rounded-r-sm">Search</button>
    </div>   
</template>
<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
    data() {
        return {
            query : null as unknown as any
        }
    },
    methods : {
        search(){
            this.$emit('searchClicked',this.query)
        }
    }
})
</script>